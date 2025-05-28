import Link from 'next/link';
import { Heart } from 'lucide-react'; 
import { FaCartArrowDown } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";

export default function MenuBar() {
  return (
    <nav className=" text-black p-4">
      <div className="max-w-7xl mx-auto flex flex-row justify-between items-center gap-5">
        <div className="space-x-6">
          <Link href="/" className="hover:text-teal-300">Home</Link>
          <div className="relative group inline-block">
  <Link href="/product" className="hover:text-teal-300">Products</Link>
  <div className="absolute hidden group-hover:block bg-white text-black shadow-md mt-2 rounded-md z-10">
    <ul className="py-2 w-40">
      <li>
        <Link href="/product#shop" className="block px-4 py-2 hover:bg-teal-100">Stationery</Link>
      </li>
      <li>
        <Link href="/product_sport" className="block px-4 py-2 hover:bg-teal-100">Sports</Link>
      </li>
    </ul>
  </div>
</div>
          <Link href="/about" className="hover:text-teal-300">About</Link>
          <Link href="/contact" className="hover:text-teal-300">Contact</Link>
        </div>
        <div className="flex items-center space-x-5">

             <Link href="/wishlist">
      <button className="relative flex items-center overflow-hidden rounded-md bg-gray-600 group transition-all duration-300 hover:shadow-md ">
      {/* Pink Diagonal Transition Block */}
      <span className="absolute top-0 left-0 h-full w-0 bg-pink-600 transform -skew-x-20 transition-all duration-300 group-hover:w-10 z-10 hover:bg-pink-600 " />
      {/* Icon */}
      <span className="relative z-10 w-10 h-10 flex items-center justify-center text-white transition-colors duration-300 group-hover:text-white ">
        <Heart className="w-5 h-5" fill="currentColor" />
      </span>

      {/* Label */}
      <span className="relative z-10 px-3 py-2 font-semibold  text-white  text-sm">
        Wishlist
      </span>
    </button> 
    </Link>
          <Link href="/login">
            <button className="bg-[#06bbcc] hover:bg-gray-600 px-4 py-2 rounded text-white font-semibold flex items-center gap-2 ">Login<CgProfile size={20}/></button>
          </Link>

        </div>
      </div>
    </nav>
  );
}
