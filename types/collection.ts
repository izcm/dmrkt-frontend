// Local Collection type - provider agnostic
export type Collection = {
  address: `0x${string}`
  name: string
  symbol: string
  totalSupply: string
  tokenType: string
  description?: string
  imageUrl?: string
  bannerImageUrl?: string
  floorPrice?: number
  externalUrl?: string
}

export type Listing = {
  tokenId: string
  image: string
  name: string
  price: string
}
