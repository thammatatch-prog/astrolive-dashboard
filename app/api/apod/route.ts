import { getAPOD } from "@/lib/nasa"

export async function GET() {
  const data = await getAPOD()
  return Response.json(data)
}