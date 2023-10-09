import React, { Component, useState } from "react";

import "../../index.css";
import Dropdown from "../Dropdown";

function Header() {
  // Rename your function to start with an uppercase letter
  return (
    <div>
      <div className="flex justify-between py-2">
        <div className="flex">
          <Dropdown />
          <img
            className="h-10"
            src="https://s3.bunnycdn.ru/assets/sites/fmovies/logo.png"
            alt="FMovies"
          />
        </div>
        <Search />
        <Login />
      </div>
      <div>{/* <Test /> */}</div>
    </div>
  );
}

export default Header;

// function Test() {
//   return (
//       <div class="px-8 pt-2 mb-4 bg-white shadow-md">
//         <nav class="flex flex-row justify-center -mb-px text-xs text-gray-500 font-bold text-center">
//           <a
//             href="##"
//             class="flex-1 mr-8 py-3 no-underline border-b-2 border-transparent tracking-wide flex flex-col"
//           >
//             <i class="fa fa-home fa-2x"></i>
//             <span class="pt-1"><DropDown/></span>
//           </a>
//           <a
//             href="##"
//             class="flex-1 mr-8 py-3 no-underline border-b-2 border-transparent tracking-wide flex flex-col"
//           >
//             <i class="fa fa-bars fa-2x"></i>
//             <span class="pt-1">Search</span>
//           </a>
//           <a
//             href="##"
//             class="flex-1 mr-8 py-3 no-underline border-b-2 border-transparent tracking-wide flex flex-col"
//           >
//             <i class="fa fa-user fa-2x"></i>
//             <span class="pt-1">login</span>
//           </a>
//         </nav>
//       </div>
//   );
// }

// dropdown
function DropDown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative flex items-center justify-center">
      <div>
        <button
          id="dropdown-button"
          className="px-3 py-1 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
          onClick={toggleDropdown}
        >
          c
        </button>
        {isOpen && (
          <div
            id="dropdown-menu"
            className="absolute bg-white border shadow-lg"
            onClick={closeDropdown}
          >
            <ul>
              <li>
                <a href="##">Option 1</a>
              </li>
              <li>
                <a href="##">Option 2</a>
              </li>
              <li>
                <a href="## ">Option 3</a>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div>
        <img
          className="w-20"
          src="https://s3.bunnycdn.ru/assets/sites/fmovies/logo.png"
          alt="FMovies"
        />
      </div>
    </div>
  );
}

// search
function Search() {
  return (
    <div className="flex items-center w-1/3 px-4 py-2 font-bold text-white rounded-full bg-neutral-200 hover:bg-neutral-500">
      <form className="" action="filter" autoComplete="off">
        <a
          className="px-2 py-1 rounded-full filter-btn btn btn-sm bg-neutral-400 hover:bg-neutral-600"
          href="filter"
        >
          <i className="bi bi-funnel"></i> Filter
        </a>
        <input
          type="text"
          placeholder="Search movies..."
          name="keyword"
          className="text-center text-white bg-transparent border-none outline-none"
        />
        <button type="submit">
          <i className="bi bi-search"></i>
        </button>
      </form>
      <div className="suggestions"></div>
    </div>
  );
}

//login
function Login() {
  return (
    <div className="flex items-center px-4 py-2 font-bold text-white bg-transparent border rounded-full hover:bg-teal-500 border-neutral-200">
      <div id="user"> login</div>
    </div>
  );
}

// function fmoviesnav() {
//   return (
//     <div classNameNameName="">
//       <header classNameName="abs-head">
//         <div classNameName="container">
//           <div classNameName="wrapper justify-content-between align-items-center">
//             <div classNameName="start">
//               <div id="menu-toggler">
//                 <i classNameName="bi bi-list-nested"></i>
//               </div>
//               <div id="menu">
//                 <ul>
//                   <li>
//                     <a href="/">Home</a>
//                   </li>
//                   <li>
//                     <a href="##"></a>
//                     <ul>
//                       <li>
//                         <a href="##">Action</a>
//                       </li>
//                       <li>
//                         <a href="adult">Adult</a>
//                       </li>
//                       <li>
//                         <a href="adventure">Adventure</a>
//                       </li>
//                       <li>
//                         <a href="animation">Animation</a>
//                       </li>
//                       <li>
//                         <a href="biography">Biography</a>
//                       </li>
//                       <li>
//                         <a href="comedy">Comedy</a>
//                       </li>
//                       <li>
//                         <a href="costume">Costume</a>
//                       </li>
//                       <li>
//                         <a href="crime">Crime</a>
//                       </li>
//                       <li>
//                         <a href="documentary">Documentary</a>
//                       </li>
//                       <li>
//                         <a href="drama">Drama</a>
//                       </li>
//                       <li>
//                         <a href="family">Family</a>
//                       </li>
//                       <li>
//                         <a href="fantasy">Fantasy</a>
//                       </li>
//                       <li>
//                         <a href="film-noir">Film-Noir</a>
//                       </li>
//                       <li>
//                         <a href="game-show">Game-Show</a>
//                       </li>
//                       <li>
//                         <a href="history">History</a>
//                       </li>
//                       <li>
//                         <a href="horror">Horror</a>
//                       </li>
//                       <li>
//                         <a href="kungfu">Kungfu</a>
//                       </li>
//                       <li>
//                         <a href="music">Music</a>
//                       </li>
//                       <li>
//                         <a href="musical">Musical</a>
//                       </li>
//                       <li>
//                         <a href="mystery">Mystery</a>
//                       </li>
//                       <li>
//                         <a href="news">News</a>
//                       </li>
//                       <li>
//                         <a href="reality">Reality</a>
//                       </li>
//                       <li>
//                         <a href="reality-tv">Reality-TV</a>
//                       </li>
//                       <li>
//                         <a href="romance">Romance</a>
//                       </li>
//                       <li>
//                         <a href="sci-fi">Sci-Fi</a>
//                       </li>
//                       <li>
//                         <a href="short">Short</a>
//                       </li>
//                       <li>
//                         <a href="sport">Sport</a>
//                       </li>
//                       <li>
//                         <a href="talk">Talk</a>
//                       </li>
//                       <li>
//                         <a href="talk-show">Talk-Show</a>
//                       </li>
//                       <li>
//                         <a href="thriller">Thriller</a>
//                       </li>
//                       <li>
//                         <a href="tv-movie">TV Movie</a>
//                       </li>
//                       <li>
//                         <a href="tv-show">TV Show</a>
//                       </li>
//                       <li>
//                         <a href="war">War</a>
//                       </li>
//                       <li>
//                         <a href="western">Western</a>
//                       </li>
//                     </ul>
//                   </li>
//                   <li>
//                     <a href="##">Country</a>
//                     <ul>
//                       <li>
//                         <a href="/country/argentina">Argentina</a>
//                       </li>
//                       <li>
//                         <a href="/country/australia">Australia</a>
//                       </li>
//                       <li>
//                         <a href="/country/austria">Austria</a>
//                       </li>
//                       <li>
//                         <a href="/country/belgium">Belgium</a>
//                       </li>
//                       <li>
//                         <a href="/country/brazil">Brazil</a>
//                       </li>
//                       <li>
//                         <a href="/country/canada">Canada</a>
//                       </li>
//                       <li>
//                         <a href="/country/china">China</a>
//                       </li>
//                       <li>
//                         <a href="/country/czech-republic">Czech Republic</a>
//                       </li>
//                       <li>
//                         <a href="/country/denmark">Denmark</a>
//                       </li>
//                       <li>
//                         <a href="/country/finland">Finland</a>
//                       </li>
//                       <li>
//                         <a href="/country/france">France</a>
//                       </li>
//                       <li>
//                         <a href="/country/germany">Germany</a>
//                       </li>
//                       <li>
//                         <a href="/country/hongkong">Hong Kong</a>
//                       </li>
//                       <li>
//                         <a href="/country/hungary">Hungary</a>
//                       </li>
//                       <li>
//                         <a href="/country/india">India</a>
//                       </li>
//                       <li>
//                         <a href="/country/ireland">Ireland</a>
//                       </li>
//                       <li>
//                         <a href="/country/israel">Israel</a>
//                       </li>
//                       <li>
//                         <a href="/country/italy">Italy</a>
//                       </li>
//                       <li>
//                         <a href="/country/japan">Japan</a>
//                       </li>
//                       <li>
//                         <a href="/country/luxembourg">Luxembourg</a>
//                       </li>
//                       <li>
//                         <a href="/country/mexico">Mexico</a>
//                       </li>
//                       <li>
//                         <a href="/country/netherlands">Netherlands</a>
//                       </li>
//                       <li>
//                         <a href="/country/new-zealand">New Zealand</a>
//                       </li>
//                       <li>
//                         <a href="/country/norway">Norway</a>
//                       </li>
//                       <li>
//                         <a href="/country/philippines">Philippines</a>
//                       </li>
//                       <li>
//                         <a href="/country/poland">Poland</a>
//                       </li>
//                       <li>
//                         <a href="/country/romania">Romania</a>
//                       </li>
//                       <li>
//                         <a href="/country/russia">Russia</a>
//                       </li>
//                       <li>
//                         <a href="/country/south-africa">South Africa</a>
//                       </li>
//                       <li>
//                         <a href="/country/south-korea">South Korea</a>
//                       </li>
//                       <li>
//                         <a href="/country/spain">Spain</a>
//                       </li>
//                       <li>
//                         <a href="/country/sweden">Sweden</a>
//                       </li>
//                       <li>
//                         <a href="/country/switzerland">Switzerland</a>
//                       </li>
//                       <li>
//                         <a href="/country/thailand">Thailand</a>
//                       </li>
//                       <li>
//                         <a href="/country/turkey">Turkey</a>
//                       </li>
//                       <li>
//                         <a href="/country/united-kingdom">United Kingdom</a>
//                       </li>
//                       <li>
//                         <a href="/country/united-states">United States</a>
//                       </li>
//                     </ul>
//                   </li>
//                   <li>
//                     <a href="movie">Movies</a>
//                   </li>
//                   <li>
//                     <a href="tv">TV Shows</a>
//                   </li>
//                   <li>
//                     <a href="trending">Trending</a>
//                   </li>
//                   <li>
//                     <a href="top-imdb">Top IMDb</a>
//                   </li>
//                 </ul>
//               </div>
//               <a classNameName="logo" href="/home">
//                 <img
//                   src="https:s3.bunnycdn.ru/assets/sites/fmovies/logo.png"
//                   alt="FMovies"
//                 />
//               </a>
//             </div>
//             <div classNameName="step">
//               <div classNameName="search-box">
//                 <button classNameName="search-toggler">
//                   <i classNameName="bi bi-search"></i>
//                 </button>
//                 <div classNameName="search-wrap">
//                   <form
//                     classNameName="d-flex align-items-center"
//                     action="filter"
//                     autocomplete="off"
//                   >
//                     <a classNameName="filter-btn btn btn-sm" href="filter">
//                       <i classNameName="bi bi-funnel"></i> Filter
//                     </a>
//                     <input
//                       type="text"
//                       placeholder="Search movies..."
//                       name="keyword"
//                     />
//                     <button type="submit">
//                       <i classNameName="bi bi-search"></i>
//                     </button>
//                   </form>
//                   <div classNameName="suggestions"></div>
//                 </div>
//               </div>
//             </div>
//             <div classNameName="end">
//               <div id="user"></div>
//             </div>
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// }
