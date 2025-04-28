export default function SchoolsSection() {
  return (
    <section className="py-16 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-[#0099ff] mb-12 flex items-center justify-center">
          Schools We Are In <span className="ml-2 w-2 h-2 rounded-full bg-red-500"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-200 aspect-square"></div>
          <div className="bg-gray-200 aspect-square"></div>
          <div className="bg-gray-200 aspect-square"></div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 opacity-20">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="25" r="20" stroke="#CCCCCC" strokeWidth="2" />
        </svg>
      </div>
      <div className="absolute bottom-10 right-10 opacity-20">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="30" height="30" stroke="#CCCCCC" strokeWidth="2" />
        </svg>
      </div>
    </section>
  )
}
