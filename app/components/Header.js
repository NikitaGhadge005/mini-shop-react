import Link from 'next/link';
import MenuBar from './MenuBar';

export default function Header() {
  return (
    <header className="bg-white text-black p-4 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex gap-3 items-center">
          <img
            src="/uploads/logo.png"
            alt="logo"
            className="w-14 h-14 object-contain"
          />
          <div>
            <h1 className="text-2xl font-bold border-b-2 border-slate-300 leading-tight">
              Rayat Store
            </h1>
            <p className="text-sm text-gray-600">Your one-stop shop for everything!</p>
          </div>
        </div>

        {/* Menu Bar */}
        <MenuBar />
      </div>
    </header>
  );
}
