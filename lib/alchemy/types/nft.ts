import { NFT } from '@/types/nft'

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

const tokenIdToDecimal = (tokenId: string): string => {
  return tokenId.startsWith('0x') ? BigInt(tokenId).toString() : tokenId
}

// Convert Alchemy NFT to local NFT type
export const toNFT = (alchemy: AlchemyNFT): NFT => {
  const fmtId = tokenIdToDecimal(alchemy.id.tokenId)
  return {
    contract: alchemy.contract.address as `0x${string}`,
    tokenId: fmtId,
    name: alchemy.title || alchemy.metadata?.name || `#${fmtId}`,
    description: alchemy.description || alchemy.metadata?.description,
    image: alchemy.media?.[0]?.gateway || alchemy.media?.[0]?.thumbnail || alchemy.metadata?.image,
    tokenType: alchemy.id.tokenMetadata?.tokenType,
    attributes: alchemy.metadata?.attributes?.map(attr => ({
      traitType: attr.trait_type || '',
      value: attr.value || '',
    })),
    lastUpdated: alchemy.timeLastUpdated,
  }
}
