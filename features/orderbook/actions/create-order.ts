'use server'

import { dbConnect } from '@/lib/mongodb/mongodb'
import { OrderModel } from '@/lib/mongodb/models'

export const createOrder = async (data: any) => {
  await dbConnect()

  const doc = (await OrderModel.create({ ...data })) as any

  const plain = {
    ...doc.toObject(),
    _id: doc._id.toString(), // flatten
  }

  return plain
}
