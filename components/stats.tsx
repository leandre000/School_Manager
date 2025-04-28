export default function Stats() {
  return (
    <section className="py-16 container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-4">
            <span className="text-gray-500">👤</span>
          </div>
          <div>
            <h3 className="text-3xl font-bold">
              +7.5k<span className="text-[#0099ff]">.</span>
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              Voluptatum deleniti atque corrupti quos dolores et quas provident
            </p>
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-4">
            <span className="text-gray-500">⚡</span>
          </div>
          <div>
            <h3 className="text-3xl font-bold">
              +7.5k<span className="text-[#0099ff]">.</span>
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              Voluptatum deleniti atque corrupti quos dolores et quas provident
            </p>
          </div>
        </div>
      </div>

      {/* Decorative arrows */}
      <div className="flex justify-center mt-12">
        <svg width="100" height="50" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 25 L90 25 M80 15 L90 25 L80 35" stroke="#CCCCCC" strokeWidth="2" />
        </svg>
      </div>
    </section>
  )
}
