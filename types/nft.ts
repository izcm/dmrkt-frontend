export type AlchemyNFTResponse = {
  nfts: AlchemyNFT[]
  pageKey?: string
}
export type AlchemyNFT = {
  contract: {
    address: string
  }

  id: {
    tokenId: string
    tokenMetadata?: {
      tokenType?: string
    }
  }

  title?: string
  description?: string

  tokenUri?: {
    gateway?: string
    raw?: string
  }

  media?: Array<{
    gateway?: string
    thumbnail?: string
    raw?: string
    format?: string
    bytes?: number
  }>

  metadata?: {
    image?: string
    attributes?: Array<{
      value?: string
      trait_type?: string
    }>
    name?: string
    description?: string
  }

  timeLastUpdated?: string

  contractMetadata?: {
    name?: string
    symbol?: string
    totalSupply?: string
    tokenType?: string
    contractDeployer?: string
    deployedBlockNumber?: number
    openSea?: {
      floorPrice?: number
      collectionName?: string
      description?: string
      imageUrl?: string
      bannerImageUrl?: string
      externalUrl?: string
      discordUrl?: string
    }
  }

  spamInfo?: {
    isSpam?: string
    classifications?: string[]
  }
}
