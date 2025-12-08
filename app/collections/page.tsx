import { dummyCollections } from '@/lib/mock/dummyCollections'

import { CollectionFilters } from '@/components/molecules/CollectionFilters'
import { CollectionList } from '@/components/organisms/CollectionList'
import { DummyCollection } from '@/lib/mock/dummyCollections'

interface CollectionsClientProps {
  collections: DummyCollection[]
}

export default function BrowseCollectionsPage() {
  return (
    <main className="flex flex-row max-w-7xl gap-8 mx-auto">
      <CollectionFilters />
      <CollectionList collections={dummyCollections} />
    </main>
  )
}
