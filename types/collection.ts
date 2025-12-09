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

export type Listing = {
  tokenId: string
  image: string
  name: string
  price: string
}
