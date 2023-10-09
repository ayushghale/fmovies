import React, { useState } from "react";

import Header from "./include/header";
// import WatchMovie from "../components/movieDescription/watchMovie"
import MovieDetails from "../components/movieDescription/movieDetails";
import SidarEp from "../components/movieDescription/sidebarEp";
import Comment from "../components/movieDescription/comment";
import Trend from "../components/home/Trend";

export default function MovieDesc() {
  console.log("movie desc");
  return (
    <div>
      <div className="bg-gray-900 header ">
        <Header />
      </div>
      {/* <div className="px-[6%]">
        <div className="flex">
          <div>
            <MovieDetails />
          </div>
          <div className="flex">
          <SidarEp />
          </div>
        </div>
      </div> */}
      <div className="px-[1%]">
        <div className="grid grid-cols-5">
          <div className="col-span-4 ">
            <MovieDetails />
          </div>
          <div className="w-[100%] px-2 flex">
          <SidarEp />
            {/* <Trend /> */}
          </div>
        </div>
      </div>




      
      <div className="px-[1%] pt-8">
        <div className="grid grid-cols-5">
          <div className="col-span-4 ">
            {/* <MovieDetails /> */}
            <Comment />
            {/* Other components or content */}
          </div>
          <div className="max-w-[350px] px-2">
            <Trend />
          </div>
        </div>
      </div>
    </div>
  );
}

function Dropdown() {
  // State to manage dropdown visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="p-4">
      <div className="relative inline-block text-left">
        <button
          onClick={toggleDropdown}
          className="inline-flex items-center justify-center px-4 py-2 text-gray-700 transition duration-300 ease-in-out border border-gray-300 rounded-md hover:text-gray-900 hover:bg-gray-100"
        >
          Dropdown
          <svg
            className={`w-4 h-4 ml-2 transform ${
              isOpen ? "rotate-0" : "-rotate-90"
            }`}
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 0 1 .7.29l3 3a1 1 0 0 1 0 1.42l-3 3a1 1 0 0 1-1.42-1.42L10.59 8H6a1 1 0 0 1 0-2h4.59l-1.3-1.29A1 1 0 0 1 10 3zm0 10a1 1 0 0 1-.7-.29l-3-3a1 1 0 0 1 1.42-1.42L10 11.59l3.3-3.29a1 1 0 0 1 1.4 1.42l-3 3a1 1 0 0 1-.7.29z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {isOpen && (
          <div className="absolute right-0 w-48 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg">
            <ul>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Option 1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Option 2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Option 3
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
