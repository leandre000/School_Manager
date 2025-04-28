import Image from "next/image"
import Link from "next/link"

export default function SchoolsPage() {
  const schools = [
    {
      name: "Greenfield Academy",
      location: "New York, NY",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Riverside School",
      location: "Chicago, IL",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Mountain View High",
      location: "Denver, CO",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Sunshine Elementary",
      location: "Miami, FL",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Pacific Coast College",
      location: "San Francisco, CA",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Lakeside Institute",
      location: "Seattle, WA",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Schools We Work With</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {schools.map((school, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="aspect-video relative">
              <Image src={school.image || "/placeholder.svg"} alt={school.name} fill className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold">{school.name}</h3>
              <p className="text-gray-600">{school.location}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <h2 className="text-2xl font-bold mb-4">Want to list your school?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Join our growing network of educational institutions and benefit from our comprehensive school administration
          system.
        </p>
        <Link href="/contact" className="btn-primary">
          Get Started
        </Link>
      </div>
    </div>
  )
}
