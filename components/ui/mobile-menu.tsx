'use client'

import { useState, useRef, useEffect } from 'react'
import { createProxy } from "next/dist/build/webpack/loaders/next-flight-loader/module-proxy"
import Link from 'next/link'
import ModalForm from '@/components/modalForm'
import { useSearchParams } from 'next/navigation';

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)
  const proxy = createProxy("C:/Users/arif_/Downloads/open-react-template-master/components/ui/mobile-menu.tsx")

  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)
 // Get userid from query parameters
 const search = useSearchParams();
 const userid = search.get('id');
  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && 'active'}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" rx="1" />
          <rect y="11" width="24" height="2" rx="1" />
          <rect y="18" width="24" height="2" rx="1" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <nav
        id="mobile-nav"
        ref={mobileNav}
        className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
        style={mobileNavOpen ? { maxHeight: mobileNav.current?.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: 0.8 }}
      >
        <ul className="bg-gray-800 px-4 py-2">
        <li>
              <ModalForm />
              </li>
              {!userid ? (
                <>
        <li>
                <Link
                  href="/signin"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Sign in
                </Link>
              </li>
              </>
              ) : null}
              <li>
                <Link
                  href="/about"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Contact 
                </Link>
              </li>
              {userid ? (
                <>
        <li>
        <Link
        href={`/payouts?id=${userid}`} // Use template literal to include userid in the URL
        className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
      >
        Your Payouts
      </Link>
              </li>
              </>
              ) : null} {userid ? (
                <>
        <li>
        <Link
        href={`/bookings?id=${userid}`} // Use template literal to include userid in the URL
        className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
      >
        Your Bookings
      </Link>
              </li>
              <li>
                  <Link
        href={`/carriers?id=${userid}`} // Use template literal to include userid in the URL
        className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
      >
        Your Carriers
      </Link>
                  </li>
              <li>
                  <Link
        href={`/`} // Use template literal to include userid in the URL
        className="font-medium text-red-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
      >
        Log Out
      </Link>
                  </li>
              </>
              ) : null}
               {!userid ? (
                <>
        <li>
                <Link href="/signup" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
                  Sign up
                </Link>
              </li>
              </>
              ) : null}
               {userid ? (
                <>
        <li>
                <Link href={`/profile?id=${userid}`} className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
                  My Profile
                </Link>
              </li>
              </>
              ) : null}
             
              
        </ul>
      </nav>
    </div>
  )
}
