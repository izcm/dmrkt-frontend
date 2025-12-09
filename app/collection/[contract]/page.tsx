import { NFTGallery } from '@/features/orderbook/ui/NFTGallery';
import { getCollectionMetadata } from '@/lib/alchemy/'

export default async function CollectionPage(props: {
  params: Promise<{ contract: string }>
}) {
  const { contract } = await props.params

  const collection = await getCollectionMetadata(contract as `0x${string}`)

  return (
    <main className="flex flex-col gap-4 max-w-7xl mx-auto">
      <NFTGallery collection={collection} />
    </main>
  )
}
