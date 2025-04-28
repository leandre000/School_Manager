import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-bold mb-4">SAS</h3>
            <p className="text-gray-400 text-sm">
              Unleash your potential with a Revolutionary Tool. Reporting made simple.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Useful links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-white">
                  How it Works
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/schools" className="hover:text-white">
                  Schools
                </Link>
              </li>
              <li>
                <Link href="/join-us" className="hover:text-white">
                  Join Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick actions</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/join-us" className="hover:text-white">
                  Join Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/message" className="hover:text-white">
                  Message
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">FAQs</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/faq" className="hover:text-white">
                  What is SAS Used For?
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white">
                  What is SAS Used For?
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white">
                  What is SAS Used For?
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact us</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                SAS
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
                SAS
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <div>Copyright © 2024 SAS. All rights reserved.</div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white">
              Privacy policy
            </Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-white">
              Terms and Conditions
            </Link>
            <span>|</span>
            <Link href="/agreement" className="hover:text-white">
              User agreement
            </Link>
            <span>|</span>
            <Link href="/license" className="hover:text-white">
              License
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
