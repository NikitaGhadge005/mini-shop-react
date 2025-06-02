import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Rayat Store</h2>
          <p className="text-sm leading-relaxed">
            Rayat Store is your one-stop shop for quality products at affordable prices.
            Fast delivery, trusted service!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-teal-300">Home</Link></li>
            <li><Link href="/shop" className="hover:text-teal-300">Shop</Link></li>
            <li><Link href="/about" className="hover:text-teal-300">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-teal-300">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
          <p className="text-sm flex items-center mb-2">
            <FaEnvelope className="inline mr-2 text-base" /> support@rayatstore.com
          </p>
          <div className="flex space-x-4 mt-3 text-lg">
            <Link href="#" className="hover:text-teal-300"><FaFacebookF /></Link>
            <Link href="#" className="hover:text-teal-300"><FaInstagram /></Link>
            <Link href="#" className="hover:text-teal-300"><FaTwitter /></Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 text-center text-xs text-gray-400 border-t border-gray-600 pt-4">
        © {new Date().getFullYear()} Rayat Store. All rights reserved.
      </div>
    </footer>
  );
}
