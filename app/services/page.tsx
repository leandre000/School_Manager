export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Services</h1>
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">School Registration</h3>
            <p className="text-gray-600">
              Streamline your school registration process with our digital platform, making it easier for students and
              parents.
            </p>
          </div>

          <div className="border p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Administrative Tools</h3>
            <p className="text-gray-600">
              Comprehensive tools to manage school administration, from attendance tracking to grade management.
            </p>
          </div>

          <div className="border p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Digital Marketing</h3>
            <p className="text-gray-600">
              Expand your school's reach with our digital marketing solutions designed specifically for educational
              institutions.
            </p>
          </div>

          <div className="border p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Analytics & Reporting</h3>
            <p className="text-gray-600">
              Gain insights into your school's performance with detailed analytics and reporting tools.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
