import type { Hex } from '@/domain/shared/eth'
import type { Trade } from '@/domain/trade'

import { type NFTCollectionDTO, toNFTCollection } from './nft-collection'
import { type NFTDTO, toNFT } from './nft'
import { type OrderDTO, toListing } from './order'

export type SettlementDTO = {
  id: string
  chainId: number
  orderHash: Hex
  txHash: Hex

  collection: Hex
  tokenId: string

  seller: Hex
  buyer: Hex

  currency: Hex
  price: string

  blockNumber: number
  timestamp: number

  logIndex: number

  txContext?: {
    txIndex: number
    functionSelector: string
    functionName: string
    contractAddress: string
    gasUsed: number
    gasPrice: number
  }

  nftCollection?: NFTCollectionDTO | null
  order?: OrderDTO | null
  nft?: NFTDTO | null

  createdAt: number
}

export function toTrade(dto: SettlementDTO): Trade {
  return {
    ...dto,

    tokenId: BigInt(dto.tokenId),
    price: BigInt(dto.price),

    nftCollection: dto.nftCollection ? toNFTCollection(dto.nftCollection) : undefined,
    nft: dto.nft ? toNFT(dto.nft) : undefined,

    listing: dto.order ? toListing(dto.order) : undefined,

    txContext: dto.txContext
      ? {
          txIndex: dto.txContext.txIndex,

          functionSelector: dto.txContext.functionSelector as `0x${string}`,
          functionName: dto.txContext.functionName,
          contractAddress: dto.txContext.contractAddress as `0x${string}`,

          gasUsed: dto.txContext.gasUsed,
          gasPrice: dto.txContext.gasPrice,
        }
      : undefined,
  }
}
