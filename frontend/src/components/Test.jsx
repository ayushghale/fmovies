// function Test() {
//   return (
//     <section className="new">
//       <div className="flex mb-8 head align-items-center">
//         <div className="flex start ">
//           <h2 className="pr-2 text-3xl font-bold uppercase">
//             <i className="bi bi-file-play-fill"></i>Recommended
//           </h2>
//           <div
//             className="flex tabs"
//             data-tabs
//             data-id="recommended"
//             data-persist="true"
//           >
//             <span
//               className="tab active rounded-md border border-[#00acc1] px-1 mx-1 hover:border-[#00acc1] inline-block cursor-pointer"
//               data-name="movies"
//             >
//               Movies
//             </span>
//             <span
//               className="tab active rounded-md border border-[#5c5c5c] px-1 mx-1 hover:border-[#00acc1] inline-block cursor-pointer"
//               data-name="shows"
//             >
//               TV Shows
//             </span>
//           </div>
//         </div>
//       </div>
//       <div className="tab-content" data-name="movies">
//         <div className="grid grid-cols-2 gap-[14px] mt-4 movies items md:grid-cols-4 lg:grid-cols-7">
//           {/* movie display */}
//           <div className=" group relative grid-cols-1.5 border-transparent border-non rounded-2xl mb-8 item">
//             <div>
//               <div className="absolute z-[5] font-bold text-xs top-3 quality bg-[##00acc1] text-black rounded-r-lg px-[5px] h-[15px] leading-[15px] bg-[#00acc1] ">
//                 HD
//               </div>
//               <div className="relative block object-contain overflow-hidden border-transparent rounded-md border-non poster">
//                 <img
//                   className=" lazyload"
//                   src={Mega}
//                   alt="Teenage Mutant Ninja Turtles: Mutant Mayhem"
//                 />
//               </div>
//               <div className="flex flex-col mt-3 meta">
//                 <div className="flex items-center justify-between">
//                   <span className="inline-block overflow-hidden text-sm text-ellipsis">
//                     2023
//                   </span>
//                   <span className="px-2 type border  border-[#00acc1] rounded-md text-center text-sm w-[auto]">
//                     MOVIE
//                   </span>
//                   <span className="inline-block text-sm time overflow-hidden w-[auto">
//                     99 min
//                   </span>
//                 </div>
//                 <a href="##" className="text-base name text-[#e9e9e9] ">
//                   Teenage Mutant Ninja Turtles: Mutant Mayhem
//                 </a>
//               </div>
//             </div>
//             <div className=" z-[99999] left-[12rem] top-[7rem] transition-opacity opacity-0 group-hover:opacity-100 absolute">
//               <HoverMovie />
//             </div>
//           </div>
//           {/* movie display */}
//           <div className=" group relative grid-cols-1.5 border-transparent border-non rounded-2xl mb-8 item">
//             <div>
//               <div className="absolute z-[5] font-bold text-xs top-3 quality bg-[##00acc1] text-black rounded-r-lg px-[5px] h-[15px] leading-[15px] bg-[#00acc1] ">
//                 HD
//               </div>
//               <div className="relative block object-contain overflow-hidden border-transparent rounded-md border-non poster">
//                 <img
//                   className=" lazyload"
//                   src={Mega}
//                   alt="Teenage Mutant Ninja Turtles: Mutant Mayhem"
//                 />
//               </div>
//               <div className="flex flex-col mt-3 meta">
//                 <div className="flex items-center justify-between">
//                   <span className="inline-block overflow-hidden text-sm text-ellipsis">
//                     2023
//                   </span>
//                   <span className="px-2 type border  border-[#00acc1] rounded-md text-center text-sm w-[auto]">
//                     MOVIE
//                   </span>
//                   <span className="inline-block text-sm time overflow-hidden w-[auto">
//                     99 min
//                   </span>
//                 </div>
//                 <a href="##" className="text-base name text-[#e9e9e9] ">
//                   Teenage Mutant Ninja Turtles: Mutant Mayhem
//                 </a>
//               </div>
//             </div>
//             <div className=" z-[99999] left-[12rem] top-[7rem] transition-opacity opacity-0 group-hover:opacity-100 absolute">
//               <HoverMovie />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }