import Hero from "@/components/hero"
import Stats from "@/components/stats"
import SchoolsSection from "@/components/schools-section"
import FaqSection from "@/components/faq-section"
import ContactCta from "@/components/contact-cta"

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <SchoolsSection />
      <FaqSection />
      <ContactCta />
    </>
  )
}
