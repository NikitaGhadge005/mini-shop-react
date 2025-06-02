'use client'

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import React, { useEffect, useState } from 'react';
import { MdOutlineSportsVolleyball } from "react-icons/md";
import { GiBookshelf } from "react-icons/gi";

const Dashboard = () => {
  const [totalSportsProducts, setTotalSportsProducts] = useState(0);
  const [totalStationaryProducts, setTotalStationaryProducts] = useState(0);

  useEffect(() => {
    const fetchSportsProducts = async () => {
      try {
        const res = await fetch('/api/sports');
        const data = await res.json();
        setTotalSportsProducts(data.products.length);
      } catch (error) {
        console.error('Error fetching sports products:', error);
      }
    };

    const fetchStationaryProducts = async () => {
      try {
        const res = await fetch('/api/stationary');
        const data = await res.json();
        setTotalStationaryProducts(data.products.length);
      } catch (error) {
        console.error('Error fetching stationary products:', error);
      }
    };

    fetchSportsProducts();
    fetchStationaryProducts();
  }, []);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 bg-gray-50 min-h-screen">
        <Topbar />

        <div className="p-10 text-xl font-semibold text-gray-800">
          Welcome to the Dashboard!
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          {/* Sports Products Card */}
          <div className="w-56 h-32 rounded-xl p-4 text-white bg-gradient-to-r from-[#eb2892] to-[#f8a5c2] shadow-md">
            <div className="flex justify-between items-start">
              <div className="text-4xl font-semibold">{totalSportsProducts}</div>
              <div className="bg-white text-[#eb2892] text-sm px-2 py-0.5 rounded-full font-medium flex items-center gap-1">
                <MdOutlineSportsVolleyball />
              </div>
            </div>
            <div className="mt-6 text-xl opacity-90">Sports Products</div>
          </div>

          {/* Stationary Products Card */}
          <div className="w-56 h-32 rounded-xl p-4 text-white bg-gradient-to-r from-[#007bff] to-[#66ccff] shadow-md">
            <div className="flex justify-between items-start">
              <div className="text-4xl font-semibold">{totalStationaryProducts}</div>
              <div className="bg-white text-[#007bff] text-sm px-2 py-0.5 rounded-full font-medium flex items-center gap-1">
                <GiBookshelf />
              </div>
            </div>
            <div className="mt-6 text-xl opacity-90">Stationary Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
