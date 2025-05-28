// components/Topbar.js
export default function Topbar() {
    return (
      <div className="w-full bg-gradient-to-r bg-black  text-white flex justify-between items-center p-2 ">
        <div className="text-xl font-semibold"></div>
        <div className="flex items-center">
          <span className="mr-4">Welcome, User</span>
          <button className="bg-teal-500 hover:bg-teal-400 text-white px-4 py-2 rounded-lg transition-all duration-200 " >
            Logout
          </button>
        </div>
      </div>
    );
  }
  