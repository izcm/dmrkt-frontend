'use client'

import Link from 'next/link'

import { CollectionMetadata } from '@/types'

interface CollectionListProps {
  collections: CollectionMetadata[]
}

export function CollectionList({ collections }: CollectionListProps) {
  return (
    <div className="flex-2 flex flex-col divide-y divide-border-soft border border-default rounded-lg">
      {collections.map((col, i) => {
        const metadata = col.contractMetadata;
        return (
        <Link key={i} href={`/collection/${col.address}`}>
          <div
            role="button"
            className="grid grid-cols-[auto_1fr_120px_100px_100px] items-center text-start gap-4 py-4 px-4 hover-lift cursor-pointer group focus:outline-none focus:bg-surface/40 focus:border-accent"
          >
            <div className="w-10 h-10 rounded-lg overflow-hidden border border-border-soft flex-shrink-0">
              <img src={metadata.openSea?.imageUrl || '/placeholder-collection.png'} className="w-full h-full object-cover" alt="collection image" />
            </div>

            <div className="min-w-0">
              <div className="font-medium text-sm truncate group-hover:text-accent transition-colors">
                {metadata.name}
              </div>
              <div className="text-xs text-muted truncate font-mono">
                {col.address.slice(0, 10)}...{col.address.slice(-6)}
              </div>
            </div>

            <div className="text-xs text-muted text-right">
              <div className="font-semibold">{metadata.symbol || 'N/A'}</div>
            </div>

            <div className="text-xs text-muted text-right">
              <div className="font-semibold">{metadata.totalSupply?.toString() || 'N/A'}</div>
              <div className="text-xs">items</div>
            </div>

            <div className="text-xs text-right">
              <span
                className={`px-2 py-1 rounded text-xs ${
                  metadata.symbol
                    ? 'bg-green-500/10 text-green-300 px-2 py-0.5 rounded'
                    : 'bg-border-soft/20 text-muted text-xs uppercase tracking-wide'
                }`}
              >
                {metadata.symbol ? '✓' : 'Unverified'}
              </span>
            </div>
          </div>
      </Link>
      )
    })}
    </div>
  )
}
