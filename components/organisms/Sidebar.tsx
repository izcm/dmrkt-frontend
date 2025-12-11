'use client'

import { Checkbox, RangeSlider, Select } from '@/components/atoms'
import { ChevronDown } from 'lucide-react'

interface NFTFiltersProps {
  traits: [string, Record<string, number>][]
  filters: any
  setFilters: any
}

export const Sidebar = ({ traits, filters, setFilters }: NFTFiltersProps) => {
  return (
    <aside
      className="w-[320px] sticky top-1 p-4 bg-surface/40 border border-default rounded-lg overflow-scroll scrollbar-hide"
      style={{ height: 'calc(100vh - 4px)' }}
    >
      <ul>
        {traits.map(([type, values]) => (
          <li key={type} className='text-start'>
            <button className='flex w-full justify-between items-center py-1'>
              <span>{type}</span>
              <ChevronDown />
            </button>
            {Object.keys(values).map((value, i) => (
              <Checkbox key={i} label={value} />
            ))}
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-sm font-bold mb-2">Status</h3>
          <div className="flex flex-col gap-2">
            <Checkbox label="Buy Now" />
            <Checkbox label="Has Offers" />
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold mb-2">Price</h3>
          <RangeSlider min={0} max={100} onChange={() => {}} />
          <div className="text-xs text-muted mt-2">0 - 100 ETH</div>
        </div>

        <div>
          <h3 className="text-sm font-bold mb-2">Traits</h3>
          <div className="flex flex-col gap-2">
            <Checkbox label="Background" />
            <Checkbox label="Hat" />
            <Checkbox label="Eyes" />
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold mb-2">Rarity</h3>
          <Select options={['All', 'Common', 'Rare', 'Epic']} />
        </div>
      </div>
    </aside>
  )
}
