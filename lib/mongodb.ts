import mongoose from "mongoose"

const MONGODB_URI = process.env.MONGODB_URI || ""

let cached = (global as any).mongoose || { conn: null, promise: null }

export async function connectDB() {
  if (!MONGODB_URI) return null
  if (cached.conn) return cached.conn
  cached.promise = mongoose.connect(MONGODB_URI)
  cached.conn = await cached.promise
  return cached.conn
}