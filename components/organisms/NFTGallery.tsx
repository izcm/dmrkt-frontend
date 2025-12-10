'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'

import { NFT } from '@/types/nft'

export const NFTGallery = ({ nfts }: { nfts: NFT[] }) => {
  const { contract } = useParams()
  const contractAddress = Array.isArray(contract) ? contract[0] : contract

  return (
    <div className="border border-default rounded-lg">
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {nfts.map(nft => {
          const imageUrl = nft.image || 'https://via.placeholder.com/300?text=NFT'

          return (
            <li key={`${nft.contract}-${nft.tokenId}`}>
              <Link
                href={`/collection/${contractAddress}/${nft.tokenId}`}
                className="group block border border-default rounded-lg overflow-hidden hover:-translate-y-1 transition-transform"
              >
                <div className="aspect-square bg-muted/10">
                  <img src={imageUrl} alt={nft.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-3 border-t border-default">
                  <div className="font-medium truncate group-hover:text-accent transition-colors">
                    {nft.name}
                  </div>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
