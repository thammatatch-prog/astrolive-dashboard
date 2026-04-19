import dns from "node:dns"
dns.setDefaultResultOrder("ipv4first")
import { connectDB } from "@/lib/mongodb"
import NeoCache from "@/models/NeoCache"

const NASA_API_KEY = process.env.NASA_API_KEY

async function translateToThai(text: string): Promise<string> {
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=th&dt=t&q=${encodeURIComponent(text)}`
  const res = await fetch(url)
  const data = await res.json()
  return data[0].map((item: string[]) => item[0]).join("")
}

export async function getAPOD() {
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`,
    { cache: "no-store" }
  )
  const data = await res.json()
  const titleTH = await translateToThai(data.title)
  const explanationTH = await translateToThai(data.explanation)
  return { ...data, titleTH, explanationTH }
}

export async function getNEO() {
  const today = new Date().toISOString().split("T")[0]

  await connectDB()
  const cached = await NeoCache.findOne({ date: today })

  if (cached) {
    console.log("ดึงจาก Cache แล้วครับ!")
    return cached.data
  }

  const res = await fetch(
    `https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&end_date=${today}&api_key=${NASA_API_KEY}`,
    { cache: "no-store" }
  )
  const data = await res.json()
  const neos = data.near_earth_objects[today] || []

  await NeoCache.create({ date: today, data: neos })
  console.log("เก็บลง Cache แล้วครับ!")

  return neos
}