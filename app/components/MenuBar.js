'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FaCartArrowDown, FaRegHeart } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { Heart, Menu, X } from 'lucide-react';

export default function MenuBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-black">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center px-4 py-3">
        {/* Toggle Button for Mobile */}
        <button
          className="sm:hidden text-black focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Links */}
        <div
          className={`w-full sm:flex sm:items-center sm:justify-between ${
            isOpen ? 'block' : 'hidden'
          } sm:w-auto`}
        >
          {/* Left Menu */}
          <div className="space-y-3 sm:space-y-0 sm:space-x-6 sm:flex items-center">
            <Link href="/" className="block hover:text-teal-400">
              Home
            </Link>

            {/* Dropdown */}
            <div className="relative group inline-block">
              <Link href="/product" className="block hover:text-teal-400">
                Products
              </Link>
              <div className="absolute hidden group-hover:block bg-white text-black shadow-md mt-2 rounded-md z-10">
                <ul className="py-2 w-40">
                  <li>
                    <Link
                      href="/product#shop"
                      className="block px-4 py-2 hover:bg-teal-100"
                    >
                      Stationery
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/product_sport"
                      className="block px-4 py-2 hover:bg-teal-100"
                    >
                      Sports
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <Link href="/about" className="block hover:text-teal-400">
              About
            </Link>
            <Link href="/contact" className="block hover:text-teal-400">
              Contact
            </Link>
          </div>

          {/* Right Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center mt-4 sm:mt-0 space-y-3 sm:space-y-0 sm:space-x-5">
            <Link href="/wishlist">
              <button className="relative flex items-center overflow-hidden rounded-md bg-gray-600 group transition-all duration-300 hover:shadow-md">
                <span className="absolute top-0 left-0 h-full w-0 bg-pink-600 transform -skew-x-20 transition-all duration-300 group-hover:w-10 z-10" />
                <span className="relative z-10 w-10 h-10 flex items-center justify-center text-white">
                  <Heart className="w-5 h-5" fill="currentColor" />
                </span>
                <span className="relative z-10 px-3 py-2 font-semibold text-white text-sm">
                  Wishlist
                </span>
              </button>
            </Link>

            <Link href="/login">
              <button className="bg-[#06bbcc] hover:bg-gray-600 px-4 py-2 rounded text-white font-semibold flex items-center gap-2">
                Login <CgProfile size={20} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
