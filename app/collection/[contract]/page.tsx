import { CollectionView } from '@/features/orderbook/ui/CollectionView'

import { getCollectionMetadata, getNFTByContract, toCollection, toNFT } from '@/lib/alchemy'

export default async function CollectionPage(props: { params: Promise<{ contract: string }> }) {
  const { contract } = await props.params

  const alchemyCollection = await getCollectionMetadata(contract as `0x${string}`)
  const collection = toCollection(alchemyCollection)

  // TODO: update to use https://www.alchemy.com/docs/reference/nft-api-endpoints/nft-api-endpoints/nft-metadata-endpoints/get-nft-metadata-batch-v-3
  // + use totalsupply to get number of NFTs and [Batch] for pagination
  const nftsObj = await getNFTByContract(contract as `0x${string}`) // includes pagination nextItem field

  const nfts = nftsObj.metas.map(raw => {
    return toNFT(raw)
  })

  return (
    <main className="flex flex-col gap-4 max-w-7xl mx-auto">
      <CollectionView collection={collection} nfts={nfts} />
    </main>
  )
}
