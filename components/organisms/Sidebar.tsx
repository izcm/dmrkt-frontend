'use client'

import { Checkbox, RangeSlider, Select } from '@/components/atoms'

export const Sidebar = () => {
  return (
    <aside className="min-w-[320px] sticky p-4 border border-default rounded-lg">
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
          <RangeSlider min={0} max={100} start={0} end={100} onChange={() => {}} />
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
