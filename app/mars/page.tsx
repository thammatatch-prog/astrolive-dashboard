import { getMars } from "@/lib/nasa"

export default async function Mars() {
  const photos = await getMars()

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-blue-900 mb-2">
        🔴 Mars Gallery
      </h1>
      <p className="text-gray-500 mb-8">
        ภาพจาก Curiosity Rover บนดาวอังคาร
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo: any) => (
          <div key={photo.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <img
              src={photo.img_src}
              alt={photo.camera.full_name}
              className="w-full h-48 object-cover"
            />
            <div className="p-3">
              <p className="text-blue-900 font-medium text-sm">{photo.camera.full_name}</p>
              <p className="text-gray-400 text-xs mt-1">Sol {photo.sol}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}