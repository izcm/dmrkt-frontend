import { useChainId } from 'wagmi'
import { useSimpleWrite, WrongNetworkError } from '@a2zb/react-wagmi'

import { getChainConfig } from '@/lib/blockchain'

import { useTx } from '@/app/providers/TxProvider'
import { orderbookAbi } from '@/protocol/config'

export function useCancelOrder() {
  const { addTx } = useTx()

  const { simpleWrite } = useSimpleWrite()

  const chainId = useChainId()
  const chain = getChainConfig(chainId)

  async function cancelOrder(nonce: bigint, listingId?: string) {
    if (!chain) throw new WrongNetworkError('cancel order')

    return simpleWrite({
      abi: orderbookAbi,
      address: chain.marketplace,
      functionName: 'cancelOrder',
      args: [nonce],
      onSuccess: hash => addTx({ hash, listingId, label: 'order cancelled' }),
    })
  }

  return {
    cancelOrder,
  }
}
