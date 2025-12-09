'use client'

import { TextInput } from '@/components/atoms/TextInput'
import { RangeSlider } from '@/components/atoms/RangeSlider'
import { Checkbox } from '@/components/atoms/Checkbox'
import { FormSelect } from '@/components/atoms/FormSelect'

export function CollectionFilters() {
  return (
    <div className="min-w-[240px] p-4 rounded-lg border border-default">
      <div className="relative mx-auto">
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
          <FormSelect
            options={[
              { label: 'High to Low', value: 'high' },
              { label: 'Low to High', value: 'low' },
            ]}
            onChange={value => console.log('Volume:', value)}
            defaultValue="high"
          />
        </div>

        {/* Sort */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-muted">Sort</label>
          <FormSelect
            options={[
              { label: 'Trending', value: 'trending' },
              { label: 'Newest', value: 'newest' },
              { label: 'Most Active', value: 'active' },
            ]}
            onChange={value => console.log('Sort:', value)}
            defaultValue="trending"
          />
        </div>
      </div>
    </div>
  )
}
