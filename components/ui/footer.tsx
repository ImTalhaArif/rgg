import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

            {/* 1st block: Branding */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-4">
                <Link href="/" className="inline-block" aria-label="RGG">
                  <img src="/images/logo.jpg" className="logo" style={{ width: '120px', height: 'auto' }} />
                </Link>
              </div>
              <p className="text-gray-400">
                Reliance Global Group (RGG) provides trusted services across Travel, Healthcare, Education, Jobs, Insurance, and more — empowering individuals and businesses to grow with confidence.
              </p>
            </div>

            {/* 2nd, 3rd, 4th blocks */}
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">

              {/* 2nd block: Services */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Services</h6>
                <ul>
                  <li className="mb-1">
                    <Link href="/travel" className="hover:text-white transition duration-150 ease-in-out">Travel & Tours</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/healthcare" className="hover:text-white transition duration-150 ease-in-out">Healthcare Support</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/education" className="hover:text-white transition duration-150 ease-in-out">Education & Study Abroad</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/jobs" className="hover:text-white transition duration-150 ease-in-out">Job Services</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/insurance" className="hover:text-white transition duration-150 ease-in-out">Insurance</Link>
                  </li>
                </ul>
              </div>

              {/* 3rd block: Resources */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Resources</h6>
                <ul>
                  <li className="mb-1">
                    <Link href="/faq" className="hover:text-white transition duration-150 ease-in-out">FAQ</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/blogs" className="hover:text-white transition duration-150 ease-in-out">Blogs & Guides</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/support" className="hover:text-white transition duration-150 ease-in-out">Customer Support</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/terms" className="hover:text-white transition duration-150 ease-in-out">Terms & Conditions</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/privacy" className="hover:text-white transition duration-150 ease-in-out">Privacy Policy</Link>
                  </li>
                </ul>
              </div>

              {/* 4th block: Company */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Company</h6>
                <ul>
                  <li className="mb-1">
                    <Link href="/about" className="hover:text-white transition duration-150 ease-in-out">About Us</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/team" className="hover:text-white transition duration-150 ease-in-out">Our Team</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/contact" className="hover:text-white transition duration-150 ease-in-out">Contact</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/careers" className="hover:text-white transition duration-150 ease-in-out">Careers</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/partnerships" className="hover:text-white transition duration-150 ease-in-out">Partnerships</Link>
                  </li>
                </ul>
              </div>

            </div>

          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">

            {/* Social links */}
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              <li>
                <Link href="/" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-white hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Twitter">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link href="/" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-white hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Facebook">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link href="/" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-white hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Instagram">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20.145" cy="11.892" r="1" />
                    <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                    <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                  </svg>
                </Link>
              </li>
            </ul>

            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mt-4 md:mt-0">
              &copy; <Link href="https://reliance-global-group.vercel.app" className="hover:text-white">Reliance Global Group |</Link> All rights reserved.
            </div>

          </div>

        </div>
      </div>
    </footer>
  )
}
