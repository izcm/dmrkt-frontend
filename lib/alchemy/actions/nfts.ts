import { AlchemyNFT } from '@/lib/alchemy/types/nft'
import { ALCHEMY_API_KEY as apiKey } from '../constants'
import { ALCHEMY_ENDPOINT_URL as endpoint } from '../constants'

const baseUrl = `${endpoint}/${apiKey}`

export const getNFTByContract = async (
  contract: `0x${string}`
): Promise<{ base: any; metas: AlchemyNFT[] }> => {
  const res = await fetch(`${baseUrl}/getNFTsForContract?contractAddress=${contract}`)
  const data = await res.json()

  // Map all NFTs → fetch metadata for each
  const metas = await Promise.all(
    data.nfts.map(async (nft: any) => {
      const tokenId = nft.id.tokenId
      const res = await fetch(
        `${baseUrl}/getNFTMetadata?contractAddress=${contract}&tokenId=${tokenId}`
      )
      return res.json()
    })
  )

  return {
    base: data,
    metas,
  }
}
