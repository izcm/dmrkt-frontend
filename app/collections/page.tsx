'use client'

import { Search } from 'lucide-react'
import { dummyCollections } from '@/lib/mock/dummyCollections'
import Link from 'next/link'

export default function BrowseCollectionsPage() {
  return (
    <main className="flex flex-row max-w-7xl gap-8 mx-auto">
      <div className="min-w-[240px]">
        <div className="relative mt-8 mx-auto">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            className="border border-default rounded-lg px-9 py-2 w-full"
            placeholder="Search collections"
          />
        </div>

        {/* Filters */}
        <div className="mt-6 flex flex-col gap-4">
          {/* Price Range */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-muted">Price Range</label>
            <input
              type="range"
              min="0"
              max="100"
              className="w-full"
            />
          </div>

          {/* Collection Type */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-muted">Type</label>
            <div className="flex flex-col gap-1">
              {['All', 'ERC721', 'ERC1155'].map((type) => (
                <label key={type} className="flex items-center gap-2 text-sm cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  {type}
                </label>
              ))}
            </div>
          </div>

          {/* Volume */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-muted">Volume</label>
            <select className="border border-default rounded px-2 py-1 text-sm bg-surface">
              <option>High to Low</option>
              <option>Low to High</option>
            </select>
          </div>

          {/* Sort */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-muted">Sort</label>
            <select className="border border-default rounded px-2 py-1 text-sm bg-surface">
              <option>Trending</option>
              <option>Newest</option>
              <option>Most Active</option>
            </select>
          </div>
        </div>
      </div>
      <div
        className="
          flex-2 mt-8  
          flex flex-col divide-y 
          divide-border-soft border border-default rounded-lg
        "
      >
        {dummyCollections.map((col, i) => (
          <Link key={i} href={`/collection/${col.contract}`}>
            <div
              role="button"
              className="
              grid grid-cols-[auto_1fr_120px_100px_100px] 
              items-center text-start gap-4 py-4 px-4 
              hover-lift cursor-pointer group
              focus:outline-none focus:bg-surface/40 focus:border-accent
            "
            >
              <div className="w-10 h-10 rounded-lg overflow-hidden border border-border-soft flex-shrink-0">
                <img src={col.image} className="w-full h-full object-cover" alt="" />
              </div>

              <div className="min-w-0">
                <div className="font-medium text-sm truncate group-hover:text-accent transition-colors">
                  {col.name}
                </div>
                <div className="text-xs text-muted truncate font-mono">
                  {col.contract.slice(0, 10)}...{col.contract.slice(-6)}
                </div>
              </div>

              <div className="text-xs text-muted text-right">
                <div className="font-semibold">{col.symbol || 'N/A'}</div>
              </div>

              <div className="text-xs text-muted text-right">
                <div className="font-semibold">{col.totalSupply?.toLocaleString() || 'N/A'}</div>
                <div className="text-xs">items</div>
              </div>

              <div className="text-xs text-right">
                <span className={`px-2 py-1 rounded text-xs ${
                  col.verified 
                    ? 'bg-green-500/10 text-green-300 px-2 py-0.5 rounded' 
                    : 'bg-border-soft/20 text-muted text-xs uppercase tracking-wide'
                }`}>
                  {col.verified ? '✓' : 'Unverified'}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
