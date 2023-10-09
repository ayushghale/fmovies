import React, { Component, useState, useEffect } from "react";

import HoverMovie from "./HoverMovie";

export default function LatestTvShows() {
  // https://image.tmdb.org/t/p/original/[poster_path] image path
  // const apiUrl = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${apiKey}`;

  
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  const [hoveredMovieId, setHoveredMovieId] = useState(null);

  useEffect(() => {
    const apiKey = "25557d80eb22a3a4103c3f753f66b70e"; // Replace with your TMDb API key
    const apiUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;

    // Make the API call when the component mounts
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Handle the API response data here
        // console.log(data);
        setUpcomingMovies(data.results); // Assuming you want to store the results in state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <section className="new">
      <div className="flex mb-8 head align-items-center">
        <div className="flex start ">
          <h2 className="pr-2 text-3xl font-bold uppercase">
            <i className="bi bi-file-play-fill"></i>Latest Tv Shows
          </h2>
        </div>
      </div>
      <div className="tab-content" data-name="movies">
        <div className="grid grid-cols-2 gap-[14px] mt-4 movies items md:grid-cols-4 lg:grid-cols-7">
          {/* movie display */}

          {upcomingMovies.map((movie) => (

            <div
              key={movie.id}
              className="group relative grid-cols-1.5 border-transparent border-non rounded-2xl mb-8 item"
              onMouseEnter={() => setHoveredMovieId(movie.id)}
              onMouseLeave={() => setHoveredMovieId(null)}
            >
              <div>
                <div className="absolute z-[5] font-bold text-xs top-3 quality bg-[##00acc1] text-black rounded-r-lg px-[5px] h-[15px] leading-[15px] bg-[#00acc1] ">
                  HD
                </div>
                <div className="relative block object-contain overflow-hidden border-transparent rounded-md border-non poster">
                  <img
                    className=" lazyload"
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt="Teenage Mutant Ninja Turtles: Mutant Mayhem"
                  />
                </div>
                <div className="flex flex-col mt-3 meta">
                  <div className="flex items-center justify-between">
                    <span className="inline-block overflow-hidden text-sm text-ellipsis">
                    {movie.release_date.split("-")[0]}
                    </span>
                    <span className="px-2 type border  border-[#00acc1] rounded-md text-center text-sm w-[auto]">
                      MOVIE
                    </span>
                    <span className="inline-block text-sm time overflow-hidden w-[auto">
                      {movie.id}
                    </span>
                  </div>
                  <a href="##" className="text-base name text-[#e9e9e9] ">
                    {movie.title}
                  </a>
                </div>
              </div>
              {hoveredMovieId === movie.id && (
                <div className=" z-[99999] left-[11rem] top-[5rem] transition-opacity duration-300 opacity-100 hover:inline absolute">
                  <HoverMovie movieId={movie.id} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
