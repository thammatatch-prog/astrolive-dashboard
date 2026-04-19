import { getNEO } from "@/lib/nasa"

export const dynamic = "force-dynamic"

export default async function NeoTracker() {
  const neos = await getNEO()

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-blue-900 mb-2">
        ☄️ NEO Tracker
      </h1>
      <p className="text-gray-500 mb-8">
        พบ {neos.length} วัตถุใกล้โลกวันนี้
      </p>

      <div className="grid grid-cols-1 gap-4">
        {neos.map((neo: any) => (
          <div
            key={neo.id}
            className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-blue-900 font-bold text-lg">{neo.name}</p>
                <p className="text-gray-500 text-sm mt-1">
                  ระยะห่าง: {Number(neo.close_approach_data[0].miss_distance.kilometers).toLocaleString()} km
                </p>
                <p className="text-gray-500 text-sm">
                  ความเร็ว: {Number(neo.close_approach_data[0].relative_velocity.kilometers_per_hour).toLocaleString()} km/h
                </p>
              </div>
              {neo.is_potentially_hazardous_asteroid && (
                <span className="bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full">
                  ⚠️ อันตราย
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}