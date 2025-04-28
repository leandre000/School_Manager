import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Better Future For Kids</h1>
        <p className="text-lg mb-8 max-w-2xl mx-auto">Let The Child Be The Director, Through Good Schools</p>
        <Link href="/schools" className="btn-primary inline-flex items-center">
          Schools{" "}
          <span className="ml-2 bg-white rounded-full p-1">
            <span className="w-4 h-4 rounded-full bg-[#0099ff] inline-block"></span>
          </span>
        </Link>
      </div>

      <div className="mt-16 md:mt-24 relative">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          <div className="relative">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden bg-pink-200 relative">
              <Image
                src="/placeholder.svg?height=192&width=192"
                alt="Student"
                width={192}
                height={192}
                className="object-cover"
              />
            </div>
          </div>

          <div className="max-w-md">
            <p className="text-gray-700 mb-4">
              Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
              provident
            </p>
          </div>

          <div className="relative">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden bg-blue-200 relative">
              <Image
                src="/placeholder.svg?height=192&width=192"
                alt="Student"
                width={192}
                height={192}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <Image src="/placeholder.svg?height=100&width=100" alt="" width={100} height={100} className="object-contain" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20">
        <Image src="/placeholder.svg?height=100&width=100" alt="" width={100} height={100} className="object-contain" />
      </div>
    </section>
  )
}
