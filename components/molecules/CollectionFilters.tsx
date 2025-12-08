'use client'

import { TextInput } from '@/components/atoms/TextInput'
import { RangeSlider } from '@/components/atoms/RangeSlider'
import { Checkbox } from '@/components/atoms/Checkbox'
import { Select } from '@/components/atoms/Select'

export function CollectionFilters() {
  return (
    <div className="min-w-[240px]">
      <div className="relative mt-8 mx-auto">
        <TextInput placeholder="Search collections" />
      </div>

      {/* Filters */}
      <div className="mt-6 flex flex-col gap-4">
        {/* Price Range */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-muted">Price Range</label>
          <RangeSlider min={0} max={100} />
        </div>

        {/* Collection Type */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-muted">Type</label>
          <div className="flex flex-col gap-1">
            {['All', 'ERC721', 'ERC1155'].map(type => (
              <Checkbox key={type} label={type} />
            ))}
          </div>
        </div>

        {/* Volume */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-muted">Volume</label>
          <Select options={['High to Low', 'Low to High']} />
        </div>

        {/* Sort */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-muted">Sort</label>
          <Select options={['Trending', 'Newest', 'Most Active']} />
        </div>
      </div>
    </div>
  )
}
