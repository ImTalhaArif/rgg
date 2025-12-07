"use client";
import React, { useState } from "react";
import Link from "next/link";
import MobileMenu from "./mobile-menu";
import { useSearchParams } from "next/navigation";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const search = useSearchParams();
  const userid = search.get("id");
  const adminid = search.get("aid");

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="shrink-0 mr-4">
            <Link href="/" className="block">
              <img
                src="/images/whitelogo.png"
                className="logo"
                style={{ width: "150px", height: "auto" }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end items-center space-x-4">

              <li>
                <Link href="/" className="font-medium text-purple-600 hover:text-gray-200 px-3 py-3">
                  Home
                </Link>
              </li>

              <li>
                <Link href="#about" className="font-medium text-purple-600 hover:text-gray-200 px-3 py-3">
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="#services"
                  className="font-medium text-purple-600 hover:text-gray-200 px-3 py-3"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="#pricing"
                  className="font-medium text-purple-600 hover:text-gray-200 px-3 py-3"
                >
                  Pricing
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="font-medium text-purple-600 hover:text-gray-200 px-3 py-3"
                >
                  Contact
                </Link>
              </li>

              {/* Admin Panel */}
              {adminid && (
                <>
                  <li>
                    <Link href="/admin/dashboard" className="font-medium text-purple-600 hover:text-gray-200 px-3 py-3">
                      Dashboard
                    </Link>
                  </li>

                  <li>
                    <Link href="/admin/users" className="font-medium text-purple-600 hover:text-gray-200 px-3 py-3">
                      Users
                    </Link>
                  </li>

                  <li>
                    <Link href="/admin/settings" className="font-medium text-purple-600 hover:text-gray-200 px-3 py-3">
                      Settings
                    </Link>
                  </li>

                  <li>
                    <Link href="/" className="font-medium text-red-600 hover:text-gray-200 px-3 py-3">
                      Sign Out
                    </Link>
                  </li>
                </>
              )}

              {/* Authenticated User */}
              {userid && !adminid && (
                <>
                  <li>
                    <Link href={`/dashboard?id=${userid}`} className="font-medium text-purple-600 hover:text-gray-200 px-3 py-3">
                      Dashboard
                    </Link>
                  </li>

                  <li>
                    <Link href={`/profile?id=${userid}`} className="font-medium text-purple-600 hover:text-gray-200 px-3 py-3">
                      My Profile
                    </Link>
                  </li>

                  <li>
                    <Link href="/" className="font-medium text-red-600 hover:text-gray-200 px-3 py-3">
                      Log Out
                    </Link>
                  </li>
                </>
              )}

              {/* Guest */}
              {!userid && !adminid && (
                <>
                  <li>
                    <Link href="/signin" className="font-medium text-purple-600 hover:text-gray-200 px-3 py-3">
                      Sign In
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/signup"
                      className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-2"
                    >
                      Sign Up
                    </Link>
                  </li>
 <li>
                    <Link
                      href="#services"
                      className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-2"
                    >
                      Services
                    </Link>
                  </li>
                </>
              )}

              {/* CTA Button */}
              <li>
                <Link
                  href="/request-help"
                  className="btn-sm text-white bg-red-600 hover:bg-red-700 ml-3"
                >
                  Roadside Help
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
