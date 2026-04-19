import mongoose from "mongoose"

const NeoCacheSchema = new mongoose.Schema({
  date: { type: String, required: true, unique: true },
  data: { type: Array, required: true },
  createdAt: { type: Date, default: Date.now, expires: 86400 }
})

export default mongoose.models.NeoCache ||
  mongoose.model("NeoCache", NeoCacheSchema)