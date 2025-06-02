import Link from 'next/link';
import MenuBar from './MenuBar';

export default function Header() {
  return (
    <header className="bg-white text-black px-4 py-3 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center gap-3">
          <img
            src="/uploads/logo.png"
            alt="logo"
            className="w-12 h-12 object-contain"
          />
          <div>
            <h1 className="text-xl md:text-2xl font-bold border-b-2 border-slate-300 leading-tight">
              Rayat Store
            </h1>
            <p className="text-xs md:text-sm text-gray-600">
              Your one-stop shop for everything!
            </p>
          </div>
        </div>

        {/* Menu Bar */}
        <nav className="mt-3 sm:mt-0">
          <MenuBar />
        </nav>
      </div>
    </header>
  );
}
