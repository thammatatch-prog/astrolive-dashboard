import Link from "next/link"
import { getAPOD } from "@/lib/nasa"

export default async function Home() {
  const apod = await getAPOD()

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">

      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-blue-900 mb-4">
          AstroLive Dashboard
        </h1>
        <p className="text-gray-500 text-lg">
          ข้อมูลดาราศาสตร์แบบ Real-time จาก NASA
        </p>
      </div>

      {/* APOD Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-12">
        {apod.url && (
          <img
            src={apod.url}
            alt={apod.title}
            className="w-full object-cover max-h-96"
          />
        )}
        <div className="p-6">
          <p className="text-xs text-blue-600 font-medium mb-1">
            ภาพดาราศาสตร์ประจำวัน — {apod.date}
          </p>
          <h2 className="text-2xl font-bold text-blue-900 mb-3">
            {apod.titleTH}
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            {apod.explanationTH}
          </p>
        </div>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <Link href="/neo-tracker">
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all cursor-pointer">
            <p className="text-3xl mb-3">☄️</p>
            <p className="text-blue-900 font-bold text-lg mb-2">NEO Tracker</p>
            <p className="text-gray-500 text-sm">
              ติดตาม asteroid ที่กำลังเข้าใกล้โลกในสัปดาห์นี้
            </p>
          </div>
        </Link>

        <Link href="/mars">
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all cursor-pointer">
            <p className="text-3xl mb-3">🔴</p>
            <p className="text-blue-900 font-bold text-lg mb-2">Mars Gallery</p>
            <p className="text-gray-500 text-sm">
              ภาพล่าสุดจาก Curiosity และ Perseverance Rover
            </p>
          </div>
        </Link>

        <Link href="/space-weather">
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all cursor-pointer">
            <p className="text-3xl mb-3">☀️</p>
            <p className="text-blue-900 font-bold text-lg mb-2">Space Weather</p>
            <p className="text-gray-500 text-sm">
              Solar flare และพายุแม่เหล็กโลกวันนี้
            </p>
          </div>
        </Link>

      </div>
    </div>
  )
}