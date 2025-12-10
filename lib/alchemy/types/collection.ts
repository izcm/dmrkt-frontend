import { Collection } from '@/types'

export type AlchemyCollection = {
  address: string
  contractMetadata: {
    name: string
    symbol: string
    totalSupply: string
    tokenType: string
    contractDeployer: string
    deployedBlockNumber: number
    openSea?: {
      floorPrice?: number
      collectionName?: string
      safelistRequestStatus?: string
      imageUrl?: string
      description?: string
      externalUrl?: string
      twitterUsername?: string
      discordUrl?: string
      bannerImageUrl?: string
      lastIngestedAt?: string
    }
  }
}

// Convert Alchemy Collection to local Collection type
export const toCollection = (alchemy: AlchemyCollection): Collection => {
  return {
    address: alchemy.address as `0x${string}`,
    name: alchemy.contractMetadata.name,
    symbol: alchemy.contractMetadata.symbol,
    totalSupply: alchemy.contractMetadata.totalSupply,
    tokenType: alchemy.contractMetadata.tokenType,
    description: alchemy.contractMetadata.openSea?.description,
    imageUrl: alchemy.contractMetadata.openSea?.imageUrl,
    bannerImageUrl: alchemy.contractMetadata.openSea?.bannerImageUrl,
    floorPrice: alchemy.contractMetadata.openSea?.floorPrice,
    externalUrl: alchemy.contractMetadata.openSea?.externalUrl,
  }
}
