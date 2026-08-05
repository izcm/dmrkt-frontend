import { useSimpleWrite } from '@a2zb/react-wagmi'

import { useTx } from '@/app/providers/TxProvider'

import { useWallet } from '@/features/wallet/hooks/use-wallet'
import { decodeContractError } from '@/lib/blockchain'

import type { Order } from '@/protocol/eip712'
import { orderbookAbi } from '@/protocol/config'
import { ORDERBOOK_ERROR_MESSAGES } from '@/protocol/errors'

import { useTradeValidation } from './use-trade-validation'
import { useTradeSimulation } from './use-trade-simulation'

/**
 * @param order the listing being validated
 * @returns validation and execution state
 */

export function useFillOrder(order?: Order, listingId?: string, onConfirmed?: () => void) {
  const { addTx } = useTx()
  const { account } = useWallet()

  const sim = useTradeSimulation(order)

  const { isFillable, isChecking, error } = useTradeValidation(sim)

  const { simpleWrite } = useSimpleWrite()

  async function fill() {
    if (!isFillable || isChecking || !sim.data?.request) return

    return simpleWrite({
      ...(sim.data.request as Parameters<typeof simpleWrite>[0]),
      onSuccess: hash =>
        addTx({
          hash,
          listingId,
          label: 'order filled',
          onConfirmed,
          decodeError: (err: unknown) =>
            decodeContractError(err, orderbookAbi, ORDERBOOK_ERROR_MESSAGES),
        }),
    })
  }

  return {
    fill,
    isFillable,
    isChecking,
    error,
    hasAccount: !!account,
  }
}
