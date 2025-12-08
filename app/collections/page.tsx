'use client'

import { Search } from 'lucide-react'
import { dummyCollections } from '@/lib/mock/dummyCollections'
import Link from 'next/link'

export default function BrowseCollectionsPage() {
  return (
    <main className="flex flex-col max-w-6xl mx-auto">
      <div className="relative mt-8 w-full max-w-4xl mx-auto">
        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          className="border border-default rounded-lg px-9 py-2 w-full"
          placeholder="Search collections"
        />
      </div>
      <div
        className="
          mt-8  
          flex flex-col divide-y 
          divide-border-soft border border-default rounded-lg
        "
      >
        {dummyCollections.map((col, i) => (
          <Link href={`/collection/${col.contract}`}>
          <div
            key={i}
            role="button"
            className="
              grid grid-cols-[auto_1fr_200px] 
              items-center text-start gap-4 py-2 px-2 
              hover-lift cursor-pointer group
              focus:outline-none focus:bg-surface/40 focus:border-accent
            "
          >
            <div className="w-10 h-10 rounded-sm overflow-hidden border border-border-soft">
              <img src={col.image} className="w-full h-full object-cover" alt="" />
            </div>
            <div className="font-medium text-sm truncate group-hover:text-accent transition-colors">
              {col.name}
            </div>
            <div className="text-xs text-muted truncate font-mono">{col.contract}</div>
          </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
