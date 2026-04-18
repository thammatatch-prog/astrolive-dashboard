import { getNEO } from "@/lib/nasa"

export async function GET() {
  const data = await getNEO()
  return Response.json(data)
}