'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'

import { NFT } from '@/types/nft'
import { NFTCard } from '../molecules/NFTCard'

interface NFTGalleryProps {
  nfts: NFT[]
  baseUrl: string
}

export const NFTGallery = ({ nfts, baseUrl }: NFTGalleryProps) => {
  console.log(baseUrl)
  return (
    <div className="border border-default rounded-lg">
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {nfts.map(nft => (
          <li key={`${nft.contract}-${nft.tokenId}`}>
            <Link href={`${baseUrl}/${nft.tokenId}`}>
              <NFTCard nft={nft} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
