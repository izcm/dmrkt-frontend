// lib/dbConnect.ts
import mongoose, { Mongoose } from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable')
}

/**
 * Extend global type to cache the connection
 */
declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: {
    conn: Mongoose | null
    promise: Promise<Mongoose> | null
  }
}

// Create the global cache if it doesn't exist
global.mongooseCache = global.mongooseCache ?? { conn: null, promise: null }

export const dbConnect = async (): Promise<Mongoose> => {
  const cached = global.mongooseCache

  if (cached.conn) return cached.conn

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then(mongoose => mongoose)
  }

  cached.conn = await cached.promise
  return cached.conn
}
