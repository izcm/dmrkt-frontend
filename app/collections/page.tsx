import { CollectionFilters } from '@/components/molecules/CollectionFilters'
import { CollectionList } from '@/components/organisms/CollectionList'

import { popularEthCollections } from '@/types/mock/mockCollectionsAddresses'
import { toCollection } from '@/lib/alchemy/types/collection'

import { getCollectionMetadata } from '@/lib/alchemy'

export default async function BrowseCollectionsPage() {
  const alchemyCollections = await Promise.all(
    popularEthCollections.map(c => getCollectionMetadata(c.address))
  )

  const collections = alchemyCollections.map(c => {
    return toCollection(c)
  })

  return (
    <main className="flex flex-col max-w-7xl mx-auto">
      <div className="flex flex-row gap-8">
        <CollectionFilters />
        <CollectionList collections={collections} />
      </div>
    </main>
  )
}
