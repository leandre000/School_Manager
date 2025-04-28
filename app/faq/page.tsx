import Link from "next/link"

export default function FaqPage() {
  const faqs = [
    {
      question: "What is SAS For?",
      answer:
        "SAS is a comprehensive school administration system designed to help educational institutions manage their operations more efficiently. It provides tools for registration, administration, marketing, and analytics.",
    },
    {
      question: "How does SAS help schools?",
      answer:
        "SAS helps schools by streamlining administrative processes, expanding their digital presence, growing their customer base, and providing valuable insights through analytics and reporting.",
    },
    {
      question: "Is SAS suitable for all types of schools?",
      answer:
        "Yes, SAS is designed to be flexible and can be adapted to the needs of various educational institutions, including primary schools, high schools, colleges, and specialized training centers.",
    },
    {
      question: "How secure is the SAS platform?",
      answer:
        "Security is our top priority. SAS employs industry-standard security measures to protect all data, including encryption, secure authentication, and regular security audits.",
    },
    {
      question: "Can SAS integrate with other systems?",
      answer:
        "Yes, SAS is designed with integration capabilities in mind. It can integrate with various educational tools and systems to provide a comprehensive solution for your institution.",
    },
    {
      question: "How do I get started with SAS?",
      answer:
        "Getting started with SAS is easy. Simply contact us through our website, and our team will guide you through the setup process and provide training for your staff.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center text-[#0099ff]">Frequently Asked Questions</h1>

      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-8 border-b pb-6">
            <h3 className="text-xl font-medium mb-3 text-[#0099ff]">{faq.question}</h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}

        <div className="text-center mt-12">
          <p className="mb-4">Still have questions?</p>
          <Link href="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
