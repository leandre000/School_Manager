"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold">
            SAS<span className="text-red-500">.</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="font-medium hover:text-[#0099ff]">
            Home
          </Link>
          <Link href="/about" className="font-medium hover:text-[#0099ff]">
            About
          </Link>
          <Link href="/services" className="font-medium hover:text-[#0099ff]">
            Services
          </Link>
          <Link href="/contact" className="font-medium hover:text-[#0099ff]">
            Contact
          </Link>
          <Link href="https://youtube.com" className="font-medium hover:text-[#0099ff] flex items-center">
            Youtube <span className="ml-1 w-2 h-2 rounded-full bg-red-500"></span>
          </Link>
        </nav>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-white border-t">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="font-medium hover:text-[#0099ff]">
              Home
            </Link>
            <Link href="/about" className="font-medium hover:text-[#0099ff]">
              About
            </Link>
            <Link href="/services" className="font-medium hover:text-[#0099ff]">
              Services
            </Link>
            <Link href="/contact" className="font-medium hover:text-[#0099ff]">
              Contact
            </Link>
            <Link href="https://youtube.com" className="font-medium hover:text-[#0099ff] flex items-center">
              Youtube <span className="ml-1 w-2 h-2 rounded-full bg-red-500"></span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
