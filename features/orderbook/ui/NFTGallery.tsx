'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'

import { Search } from 'lucide-react'
import { ChartArea } from 'lucide-react'

import { TextInput } from '@/components/atoms/TextInput'
import { CollectionMetadata } from '@/types'

export const NFTGallery = ({collection}: {collection: CollectionMetadata}) => {
  const { contract } = useParams()
  const { contractMetadata: metadata} = collection

  return (
    <>
      <div className='flex gap-4 justify-evenly items-center'>
        <div className="flex-1 relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
        <TextInput />
      </div>
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
      <div className="flex flex-row gap-4">
        <div className="min-w-[320px] p-4 border border-default rounded-lg">
        </div>
        <div className='flex-1'>
          <div className='flex gap-2 border border-default rounded-lg py-2 px-4'>
            <span>{metadata.name}</span>
          </div>
          <div ></div>
        </div>

      </div>
    </>
  )
}
