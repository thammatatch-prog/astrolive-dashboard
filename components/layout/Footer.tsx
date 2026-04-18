export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 flex justify-between items-center">

        {/* ซ้าย */}
        <div>
          <p className="text-xl font-bold">ASTROLIVE</p>
          <p className="text-blue-300 text-sm mt-1">
            ข้อมูลดาราศาสตร์แบบ Real-time
          </p>
        </div>

        {/* ขวา */}
        <p className="text-blue-300 text-sm">
          ข้อมูลจาก NASA Open API
        </p>

      </div>
    </footer>
  )
}