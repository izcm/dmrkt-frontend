import { AlchemyCollection } from '../types/collection'

import { ALCHEMY_API_KEY as apiKey } from '../constants'
import { ALCHEMY_ENDPOINT_URL as endpoint } from '../constants'

const baseUrl = `${endpoint}/${apiKey}`

export const getCollectionMetadata = async (address: `0x${string}`): Promise<AlchemyCollection> => {
  const res = await fetch(`${baseUrl}/getContractMetadata?contractAddress=${address}`)
  const data = await res.json()

  return data as AlchemyCollection
}

export type Result<T> = { ok: true; data: T } | { ok: false; error: string }
