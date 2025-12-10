'use client'

export const Sidebar = () => {
  return (
    <aside className="min-w-[320px] sticky p-4 border border-default rounded-lg">
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-sm font-bold mb-2">Status</h3>
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            <span className="text-xs">Buy Now</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            <span className="text-xs">Has Offers</span>
          </label>
        </div>

        <div>
          <h3 className="text-sm font-bold mb-2">Price</h3>
          <input type="range" className="w-full" />
          <div className="text-xs text-gray-400">0 - 100 ETH</div>
        </div>

        <div>
          <h3 className="text-sm font-bold mb-2">Traits</h3>
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            <span className="text-xs">Background</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            <span className="text-xs">Hat</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            <span className="text-xs">Eyes</span>
          </label>
        </div>

        <div>
          <h3 className="text-sm font-bold mb-2">Rarity</h3>
          <select className="w-full bg-gray-800 text-white p-1 text-xs rounded">
            <option>All</option>
            <option>Common</option>
            <option>Rare</option>
            <option>Epic</option>
          </select>
        </div>
      </div>
    </aside>
  )
}
