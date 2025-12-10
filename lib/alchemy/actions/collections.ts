import { AlchemyCollection } from '../types/collection'
import { AttributeSummary } from '@/types'

import { ALCHEMY_API_KEY as apiKey } from '../constants'
import { ALCHEMY_ENDPOINT_URL as endpoint } from '../constants'

export const getCollectionMetadata = async (address: `0x${string}`): Promise<AlchemyCollection> => {
  const url = `${endpoint}/nft/v3/${apiKey}/getContractMetadata?contractAddress=${address}`

  const res = await fetch(url)
  if (!res.ok) throw new Error(`Alchemy failed ${res.status}`)

  const data = await res.json()

  return data
}

export const getCollectionAttributes = async (
  address: `0x${string}`
): Promise<AttributeSummary> => {
  const url = `${endpoint}/nft/v3/${apiKey}/summarizeNFTAttributes`

  const res = await fetch(`${url}?contractAddress=${address}`)
  const data = await res.json()
  return data
}

export type Result<T> = { ok: true; data: T } | { ok: false; error: string }
