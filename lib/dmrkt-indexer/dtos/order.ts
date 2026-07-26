import type { Order } from '@/protocol/eip712'

import type { Hex } from '@/domain/shared/eth'
import type { Listing } from '@/domain/listing'

import { toNFTCollection, type NFTCollectionDTO } from './nft-collection'
import { toNFT, type NFTDTO } from './nft'

export type OrderDTO = {
  id: string

  chainId: number
  orderHash: Hex

  side: 'ask' | 'bid'
  isCollectionBid: boolean

  collection: Hex
  tokenId: string

  price: string
  currency: Hex

  actor: Hex

  start: number // unix ms
  end: number // unix ms

  nftCollection?: NFTCollectionDTO | null
  nft?: NFTDTO | null

  // raw order for contract interaction
  rawOrder: Order

  status: 'active' | 'filled' | 'cancelled' | 'expired'

  txHash?: Hex

  createdAt: number
}

export function toListing(dto: OrderDTO): Listing {
  return {
    ...dto,
    nftCollection: dto.nftCollection ? toNFTCollection(dto.nftCollection) : undefined,
    nft: dto.nft ? toNFT(dto.nft) : undefined,
    tokenId: BigInt(dto.tokenId),
    price: BigInt(dto.price),
  }
}
