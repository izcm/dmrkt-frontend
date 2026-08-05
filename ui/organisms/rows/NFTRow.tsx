import type { NFT } from '@/domain/models/nft'
import { EntityRow } from './EntityRow'

export function NFTRow({ nft }: { nft: NFT }) {
  return <EntityRow nft={nft} />
}
