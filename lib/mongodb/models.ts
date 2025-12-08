import mongoose from 'mongoose'

// ------------
// ORDER
// ------------
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
  signature: {
    type: String,
    required: true,
    match: /^0x[a-fA-F0-9]+$/,
  },
})

export const OrderModel = mongoose.models.order || mongoose.model('order', OrderItem)
