'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="flex gap-8 mt-4">
        <Link href="/collections">
          <button className="w-full btn btn-secondary">Browse Collections</button>
        </Link>
      </div>
    </div>
  )
}
