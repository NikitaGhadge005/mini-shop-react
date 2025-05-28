import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-10 mb-0 bottom-0">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Rayat Store</h2>
          <p className="text-sm">
            Rayat Store is your one-stop shop for quality products at affordable prices. Fast delivery, trusted service!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-teal-300">Home</Link></li>
            <li><Link href="/shop" className="hover:text-teal-300">Shop</Link></li>
            <li><Link href="/about" className="hover:text-teal-300">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-teal-300">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Contact Us</h2>
          <p className="text-sm mb-2"><FaEnvelope className="inline mr-2" /> support@rayatstore.com</p>
          <div className="flex space-x-4 mt-3">
            <Link href="#"><FaFacebookF className="hover:text-teal-300" /></Link>
            <Link href="#"><FaInstagram className="hover:text-teal-300" /></Link>
            <Link href="#"><FaTwitter className="hover:text-teal-300" /></Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-8 text-center text-xs border-t border-slate-100 pt-4">
        © {new Date().getFullYear()} Rayat Store. All rights reserved.
      </div>
    </footer>
  );
}
