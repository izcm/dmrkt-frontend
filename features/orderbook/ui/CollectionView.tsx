'use client'

import Link from 'next/link'
import { Search, ChartArea } from 'lucide-react'

import { NFTGallery, Sidebar } from '@/components/organisms'
import { TextInput } from '@/components/atoms'

import { Collection, NFT } from '@/types'
import { CollectionBanner } from '@/components/molecules/CollectionBanner'

interface CollectionViewProps {
  collection: Collection
  nfts: NFT[]
}

// TODO: make bid should redirect to `create-bid` with contractAddr + isCollectionBid parameters
export const CollectionView = ({ collection, nfts }: CollectionViewProps) => {
  const contract = collection.address
  const baseUrl = `/collection/${contract}`

  return (
    <div className="flex flex-col gap-4">
      <CollectionBanner collection={collection}/>
      {/* SEARCH INPUT AND LINKS */}
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
          <TextInput />
        </div>

        <Link href={`${contract}/create-order`}>
          <button className="btn btn-secondary px-6">Make Collection Bid</button>
        </Link>
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
          <NFTGallery nfts={nfts} baseUrl={baseUrl} />
        </main>
      </div>
    </div>
  )
}
