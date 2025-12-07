export type Order = {
  side: number
  actor: `0x${string}`
  isCollectionBid: boolean
  collection: `0x${string}`
  tokenId: bigint
  price: bigint
  currency: `0x${string}`
  start: bigint
  end: bigint
  nonce: bigint
}

export type Signature = {
  v: number
  r: `0x${string}`
  s: `0x${string}`
}

export type Fill = {
  actor: `0x${string}`
  tokenId: bigint
}
