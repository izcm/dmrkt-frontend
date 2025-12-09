import { NFTGallery } from '@/features/orderbook/ui/NFTGallery'
import { getCollectionMetadata, getNFTByContract } from '@/lib/alchemy/'

export default async function CollectionPage(props: { params: Promise<{ contract: string }> }) {
  const { contract } = await props.params

  const collection = await getCollectionMetadata(contract as `0x${string}`)
  const nftsObj = await getNFTByContract(contract as `0x${string}`) // includes pagination nextItem field

  return (
    <main className="flex flex-col gap-4 max-w-7xl mx-auto">
      <NFTGallery collection={collection} nfts={nftsObj.metas} />
    </main>
  )
}
