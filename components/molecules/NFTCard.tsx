'use client'

import { NFT } from '@/types/nft'

export const NFTCard = ({ nft }: { nft: NFT }) => {
  return (
    <div className="group border border-default rounded-lg overflow-hidden hover:-translate-y-1 transition-transform">
      <div className="aspect-square bg-muted/10">
        <img src={nft.image} alt={nft.name} className="w-full h-full object-cover" />
      </div>
      <div className="p-3 border-t border-default">
        <div className="truncate group-hover:text-accent transition-colors">{nft.name}</div>
      </div>
    </div>
  )
}
