'use client'

import { useAccount, useSignTypedData } from "wagmi";

// local
import { domain, fields } from "@/utils/signing"

export default function CreateOrder() {
  const { address: account, isConnected } = useAccount();
  const { signTypedDataAsync } = useSignTypedData();
  
  const collectionAddr = "0x0000000000000000000000000000000000000000" as `0x${string}`;
  const tokenAddr = "0x0000000000000000000000000000000000000000" as `0x${string}`;

  const order = {
    side: 1,
    actor: account,
    isCollectionBid: false,
    collection: collectionAddr,
    tokenId: BigInt(123),
    price: BigInt(100000000000),
    currency: tokenAddr,
    start: BigInt(0),
    end: BigInt(99999999999),
    nonce: BigInt(77),
  }

  const handleSignOrder = async () => {
    const types = {
      Order: fields,
    }

    const sig = await signTypedDataAsync({
      domain,
      types,
      primaryType: "Order",
      message: order,
    })

    console.log("Signature:", sig);
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
            <button className="btn py-1 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent" />
              SELL
            </button>

            <button className="btn py-1 flex items-center gap-2 opacity-50">
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
          <select className="border border-default rounded px-3 py-2">
            <option>Any Token</option>
            <option>Specific Token #…</option>
          </select>
        </div>

        {/* Price */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Price (ETH)</label>
          <input
            type="number"
            className="border border-default rounded px-3 py-2"
            placeholder="0.42"
          />
        </div>

        {/* Valid Until */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Valid Until</label>
          <select className="border border-default rounded px-3 py-2">
            <option>7 days</option>
            <option>1 day</option>
            <option>30 minutes</option>
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
        <button 
          onClick={handleSignOrder}
          className="btn btn-primary mt-4 rounded px-4 py-2"
        >
          SIGN ORDER
        </button>
      </div>
    </main>
  )
}
