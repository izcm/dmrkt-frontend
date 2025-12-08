'use client'

import { useState } from 'react'
import { useAccount, useSignTypedData } from 'wagmi'

import { parseEther } from 'viem'

// local
import { domain, fields } from '@/features/orderbook/eip712'
import { createOrder } from '../actions/create-order'

import { DURATIONS } from '../constants'

const collectionAddr = '0x0000000000000000000000000000000000000000' as `0x${string}`
const tokenAddr = '0x0000000000000000000000000000000000000000' as `0x${string}`

function sanitize(obj: any): any {
  if (typeof obj === 'bigint') return obj.toString()
  if (Array.isArray(obj)) return obj.map(sanitize)
  if (obj && typeof obj === 'object') {
    return Object.fromEntries(
      Object.entries(obj).map(([k, v]) => [k, sanitize(v)])
    )
  }
  return obj
}

function prepareDBOrder(order: any, sig: any): any {
  return sanitize({ ...order,  signature: "abc"})
}

export const CreateOrderForm = () => {
  const { address: account, isConnected } = useAccount()
  const { signTypedDataAsync } = useSignTypedData()

  const [form, setForm] = useState({
    side: 0,
    price: '',
    actor: account,
    isCollectionBid: false,
    end: 0,
  })

  const handleChange = (field: string, value: any) => {
    setForm(prev => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSumbitOrder = async () => {
    const now = Math.floor(Date.now() / 1000)

    const order = {
      side: form.side,
      actor: account,
      isCollectionBid: form.isCollectionBid,
      collection: collectionAddr,
      tokenId: BigInt(123), // TODO select token
      price: parseEther(form.price),
      currency: tokenAddr,
      start: BigInt(now),
      end: BigInt(now + form.end),
      nonce: BigInt(77), // TODO generate
    }

    console.log(order);
    const types = {
      Order: fields,
    }

    try {
      const sig = await signTypedDataAsync({
        domain,
        types,
        primaryType: 'Order',
        message: order,
      })

      const res = await createOrder({...order, signature: sig})
    } catch (err) {
      console.error("createOrder error:", err)
      throw err // rethrow so you see it in client console too
    }
  }

  return (
    <main className="w-full max-w-2xl mx-auto flex flex-col gap-8">
      {/* Title */}
      <div className="text-center text-lg font-medium">Create Order</div>

      {/* Form Card */}
      <div className="border border-default rounded-lg p-8 flex flex-col gap-8">
        {/* Order Type */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Order Type</label>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => handleChange('side', 0)}
              className="btn py-1 flex items-center gap-2"
            >
              <span className="h-2 w-2 rounded-full bg-accent" />
              SELL
            </button>

            <button
              onClick={() => handleChange('side', 1)}
              className="btn py-1 flex items-center gap-2 opacity-50"
            >
              <span className="h-2 w-2 rounded-full border border-default" />
              BUY
            </button>
          </div>
        </div>

        {/* Token */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Token</label>

          {/* SELL — specific token */}
          <select className="border border-default rounded px-3 py-2">
            <option>#42</option>
            <option>#1337</option>
          </select>

          {/* BUY — collection bid */}
          <select
            onChange={e => handleChange('isCollectionBid', e.target.value == 'any')}
            className="border border-default rounded px-3 py-2"
          >
            <option value="any">Any Token</option>
            <option value="specific">Specific Token #…</option>
          </select>
        </div>

        {/* Price */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Price (ETH)</label>
          <input
            onChange={e => {
              const price = e.target.value
              parseEther(price)
              handleChange('price', price)
            }}
            type="number"
            className="border border-default rounded px-3 py-2"
            placeholder="0.42"
          />
        </div>

        {/* Valid Until */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Valid Until</label>
          <select
            onChange={e => handleChange('end', DURATIONS[e.target.value as keyof typeof DURATIONS])}
            className="border border-default rounded px-3 py-2"
          >
            <option value={'7d'}>7 days</option>
            <option value={'1d'}>1 day</option>
            <option value={'30m'}>30 minutes</option>
          </select>
        </div>

        {/* Divider */}
        <div className="border-t border-default pt-4" />

        {/* Review Block */}
        <div className="flex flex-col gap-1 text-sm">
          <div className="font-semibold">Review</div>
          <div>SELL • #42</div>
          <div>Ξ0.42</div>
          <div>7 days left</div>
        </div>

        {/* Sign Button */}
        <button onClick={handleSumbitOrder} className="btn btn-primary mt-4 rounded px-4 py-2">
          SIGN ORDER
        </button>
      </div>
    </main>
  )
}
