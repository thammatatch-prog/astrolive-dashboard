import dns from "node:dns"
dns.setDefaultResultOrder("ipv4first")

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
  const res = await fetch(
    `https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&end_date=${today}&api_key=${NASA_API_KEY}`,
    { cache: "no-store" }
  )
  const data = await res.json()
  const neos = data.near_earth_objects[today] || []
  return neos
}

export async function getMars() {
  const res = await fetch(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=3500&api_key=${NASA_API_KEY}`,
    { cache: "no-store" }
  )
  const data = await res.json()
  return data.photos.slice(0, 12)
}