import Link from 'next/link'
import { Search, ChartArea } from 'lucide-react'

import { NFTGallery, Sidebar } from '@/components/organisms'
import { TextInput } from '@/components/atoms'

import { Collection, NFT } from '@/types'

interface CollectionViewProps {
  collection: Collection
  nfts: NFT[]
}

export const CollectionView = ({ collection, nfts }: CollectionViewProps) => {
  const contract = collection.address

  return (
    <div className="flex flex-col gap-4">
      {/* TOP BANNER */}
      <div className="flex items-center border border-default rounded-lg px-4 py-2 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-12"
          style={{
            backgroundImage: `url(${collection.bannerImageUrl})`,
          }}
        />
        <span className="relative z-10">{collection.name}</span>
      </div>

      {/* SEARCH INPUT AND LINKS */}
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
          <TextInput />
        </div>

        <button className="btn btn-secondary px-6">Make Collection Order</button>

        <Link
          href={`/collection/${contract}/analytics`}
          className="
            flex items-center gap-2
            text-accent px-4 hover:text-accent/80 transition-colors
            border border-soft p-2 rounded-lg
          "
        >
          <ChartArea /> View Analytics
        </Link>
      </div>

      <div className="flex gap-4">
        <Sidebar />
        <main>
          <NFTGallery nfts={nfts} />
        </main>
      </div>
    </div>
  )
}
