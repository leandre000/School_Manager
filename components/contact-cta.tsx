import Link from "next/link"

export default function ContactCta() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-[#0099ff] mb-4">Want To List Your School With SAS</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Expand your School reach, grow your customer base, and streamline register with SAS. Contact us to thrive in
          the digital age and begin our journey together!
        </p>
        <Link href="/contact" className="btn-primary">
          Join Us
        </Link>
      </div>
    </section>
  )
}
