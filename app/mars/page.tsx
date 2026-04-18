export default function Mars() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">
        🔴 Mars Gallery
      </h1>
      <p className="text-gray-500 mb-8">
        ภาพล่าสุดจาก Curiosity และ Perseverance Rover
      </p>
      <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
        <p className="text-gray-400 text-center">
          กำลังเชื่อม NASA API...
        </p>
      </div>
    </div>
  )
}