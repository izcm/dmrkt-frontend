import mongoose from 'mongoose'

const OrderItem = new mongoose.Schema({
  side: {
    type: Number,
    required: true,
  },
  actor: {
    type: String,
    required: true,
    match: /^0x[a-fA-F0-9]{40}$/,
  },
  isCollectionBid: {
    type: Boolean,
    required: true,
  },
  collection: {
    type: String,
    required: true,
    match: /^0x[a-fA-F0-9]{40}$/,
  },
  tokenId: {
    // store as string to avoid JS number limits
    type: String,
    required: true,
    match: /^[0-9]+$/,
  },
  price: {
    // store as string to avoid JS number limits
    type: String,
    required: true,
    match: /^[0-9]+$/,
  },
  currency: {
    type: String,
    required: true,
    match: /^0x[a-fA-F0-9]{40}$/,
  },
  start: {
    type: String,
    required: true,
    match: /^[0-9]+$/,
  },
  end: {
    type: String,
    required: true,
    match: /^[0-9]+$/,
  },
  nonce: {
    type: String,
    required: true,
    match: /^[0-9]+$/,
  },
})

const SignatureItem = new mongoose.Schema({
  v: {
    type: Number,
    required: true,
  },
  r: {
    type: String,
    required: true,
    match: /^0x[a-fA-F0-9]{64}$/,
  },
  s: {
    type: String,
    required: true,
    match: /^0x[a-fA-F0-9]{64}$/,
  },
})

export const OrderModel = mongoose.models.Order || mongoose.model('Order', OrderItem)
export const SignatureModel =
  mongoose.models.Signature || mongoose.model('Signature', SignatureItem)
