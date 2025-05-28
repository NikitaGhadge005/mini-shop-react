"use client";

import React, { useState } from 'react';
import { motion } from "framer-motion";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { MdOutlineDashboard, MdNoteAdd } from "react-icons/md";
import { MdOutlineLibraryBooks, MdOutlineExpandMore, MdOutlineExpandLess } from "react-icons/md";
import { MdOutlineSportsEsports } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdOutlineManageHistory } from "react-icons/md";
import Topbar from './Topbar';

const Sidebar = () => {
  const Sidebar_animation = {
    open: {
      width: "16rem",
      transition: {
        damping: 20,
        type: "spring",
      },
    },
    close: {
      width: "4rem",
      transition: {
        damping: 20,
        type: "spring",
      },
    },
  };

  const [isOpen, setIsOpen] = useState(true);
  const [showStationarySub, setShowStationarySub] = useState(false);
  const [showSportsSub, setShowSportsSub] = useState(false);

  return (
    <div>
      <motion.div
        variants={Sidebar_animation}
        animate={isOpen ? "open" : "close"}
        className="bg-[#375d5f] text-[#FDFDFD] shadow-xl z-[999] max-w-[14rem] h-screen overflow-hidden md:relative fixed"
      >
        {/* Logo */}
        <div className="flex items-center gap-3 font-medium border-b border-slate-300 py-3 mx-3">
          <img src="/uploads/logo.png" alt="KBP logo" width={55} />
          {isOpen && <span className="text-xl whitespace-pre">Rayat Store </span>}
        </div>

        {/* Menu */}
        <div>
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-15 flex flex-col gap-1 font-medium overflow-x-hidden">

            {/* Dashboard */}
            <li className="p-2.5 w-full rounded-md cursor-pointer duration-300 hover:bg-blue-100 hover:text-blue-600 active:bg-blue-200 active:text-blue-700">
              <a href="/dashboard" className="flex items-center gap-3">
                <MdOutlineDashboard size={28} className="min-w-max" /> {isOpen && "Dashboard"}
              </a>
            </li>

            {/* Stationary with Submenu */}
            <li onClick={() => setShowStationarySub(!showStationarySub)} className="p-2.5 w-full rounded-md cursor-pointer duration-300 hover:bg-blue-100 hover:text-blue-600 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <MdOutlineLibraryBooks size={28} className="min-w-max" />
                {isOpen && "Stationary"}
              </div>
              {isOpen && (showStationarySub ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />)}
            </li>
            {isOpen && showStationarySub && (
            <ul className="ml-8 text-sm text-white flex flex-col gap-1">
            <li>
              <a href="/stationary" className="flex items-center gap-3 p-2.5 w-full rounded-md cursor-pointer duration-300 hover:bg-blue-100 hover:text-blue-600">
                <IoIosAddCircleOutline size={20} className="min-w-max" />
                Add Stationary
              </a>
            </li>
            <li>
              <a href="/managestationary" className="flex items-center gap-3 p-2.5 w-full rounded-md cursor-pointer duration-300 hover:bg-blue-100 hover:text-blue-600">
                <MdOutlineManageHistory size={20} className="min-w-max" />
                Manage Stationary
              </a>
            </li>
          </ul>
            )}

            {/* Sports with Submenu */}
            <li onClick={() => setShowSportsSub(!showSportsSub)} className="p-2.5 w-full rounded-md cursor-pointer duration-300 hover:bg-blue-100 hover:text-blue-600 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <MdOutlineSportsEsports size={28} className="min-w-max" />
                {isOpen && "Sports"}
              </div>
              {isOpen && (showSportsSub ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />)}
            </li>
            {isOpen && showSportsSub && (
              <ul className="ml-8 text-sm text-white flex flex-col gap-1">
              <li>
                <a href="/sports" className="flex items-center gap-3 p-2.5 w-full rounded-md cursor-pointer duration-300 hover:bg-blue-100 hover:text-blue-600">
                  <IoIosAddCircleOutline size={20} className="min-w-max" />
                  Add Sports
                </a>
              </li>
              <li>
                <a href="/managesports" className="flex items-center gap-3 p-2.5 w-full rounded-md cursor-pointer duration-300 hover:bg-blue-100 hover:text-blue-600">
                  <MdOutlineManageHistory size={20} className="min-w-max" />
                  Manage Sports
                </a>
              </li>
            </ul>
            )}
          </ul>
        </div>

        {/* Collapse Button */}
        <motion.div
          animate={isOpen ? { x: 0, y: 0, rotate: 180 } : { x: 0, y: 0, rotate: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setIsOpen(!isOpen)}
          className="absolute w-fit h-fit z-50 right-3 top-22 cursor-pointer md:block hidden"
        >
          <IoIosArrowDroprightCircle size={30} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Sidebar;
