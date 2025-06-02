// components/Topbar.js
import { FaUserCircle } from "react-icons/fa";

export default function Topbar() {
  return (
    <header className="w-full bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white flex justify-between items-center px-4 py-3 shadow-md">
      {/* App Title */}
      <div className="text-xl font-bold tracking-wide">
        Rayat Store Admin
      </div>

      {/* User & Logout */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <FaUserCircle size={22} />
          <span>Welcome, User</span>
        </div>
        <button
          type="button"
          className="bg-teal-500 hover:bg-teal-400 text-white px-4 py-2 rounded-lg transition-all duration-200"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
