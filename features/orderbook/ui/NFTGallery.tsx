'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Search, ChartArea } from 'lucide-react'

import { TextInput } from '@/components/atoms/TextInput'
import { AlchemyCollection } from '@/types'
import { AlchemyNFT } from '@/types/nft'

interface NFTGalleryProps {
  collection: AlchemyCollection
  nfts: AlchemyNFT[]
}

export const NFTGallery = ({ collection, nfts }: NFTGalleryProps) => {
  const { contract } = useParams()
  const { contractMetadata: metadata } = collection
  const contractAddress = Array.isArray(contract) ? contract[0] : contract

  return (
    <div className="flex flex-col gap-4">
      {/* TOP BANNER */}
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
          <TextInput />
        </div>

        <button className="btn btn-secondary px-6">Make Collection Order</button>

        <Link
          href={`/collection/${contract}/analytics`}
          className="
            flex items-center gap-2
            text-accent px-4 hover:text-accent/80 transition-colors
            border border-soft p-2 rounded-lg
        "
        >
          <ChartArea /> View Analytics
        </Link>
      </div>

      {/* FILTER MENU */}
      <div className="flex gap-4">
        <div className="w-[320px] p-4 border border-default rounded-lg"></div>

        <div className='flex-1 flex flex-col gap-4'>
          <div className="flex items-center border border-default rounded-lg px-4 py-2 relative overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-12"
              style={{
                backgroundImage: `url(${metadata.openSea?.bannerImageUrl})`,
              }}
            />
            <span className="relative z-10">{metadata.name}</span>
          </div>
          {/* NFT DISPLAY */}
          <div className="border border-default rounded-lg">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
              {nfts.map((nft) => {
                const imageUrl =
                  nft.media?.[0]?.gateway ||
                  nft.media?.[0]?.thumbnail ||
                  nft.metadata?.image ||
                  'https://via.placeholder.com/300?text=NFT'

                const title =
                  nft.title ||
                  nft.metadata?.name ||
                  `#${nft.id.tokenId}`

                return (
                  <Link
                    key={`${nft.contract.address}-${nft.id.tokenId}`}
                    href={`/collection/${contractAddress}/${nft.id.tokenId}`}
                    className="group border border-default rounded-lg overflow-hidden hover:-translate-y-1 transition-transform"
                  >
                    <div className="aspect-square bg-muted/10">
                      <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3 border-t border-default">
                      <div className="font-medium truncate group-hover:text-accent transition-colors">
                        {title}
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
