import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-900">
          ASTROLIVE
        </Link>

        {/* Menu */}
        <div className="flex gap-8">
          <Link href="/" className="text-gray-700 hover:text-blue-900 font-medium">
            หน้าหลัก
          </Link>
          <Link href="/neo-tracker" className="text-gray-700 hover:text-blue-900 font-medium">
            NEO Tracker
          </Link>
          <Link href="/mars" className="text-gray-700 hover:text-blue-900 font-medium">
            Mars
          </Link>
          <Link href="/space-weather" className="text-gray-700 hover:text-blue-900 font-medium">
            Space Weather
          </Link>
        </div>

      </div>
    </nav>
  )
}