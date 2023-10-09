import React, { Component, useState, useEffect } from "react";

export default function HoverMovie({ movieId }) {

  const apiKey = "25557d80eb22a3a4103c3f753f66b70e"; // Replace with your TMDb API key
  const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`;

  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    fetch(movieDetailsUrl)
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
        // console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });
  }, [movieDetailsUrl]);

  return (
    <section>
      <div className="w-[310px] pointer-events-auto  h-[340px] transition-transform  duration-300 ">
        <div className="m-0 bg-black border-0 tooltipster-box rounded-xl">
          {/* movie deatils fech */}
          {movieDetails ? (
            <>

              <div className="tooltipster-content leading-4 text-[#888] p-0 flex flex-col relative overflow-hidden ">
                <div className="info">
                  <div className="p-5 border-0 border-[#353535] head ">
                    <div className="flex font-medium leading-5 start trxt-xl mr-[30px] text-[#e9e9e9]">
                      <div className="name text-major">
                        {movieDetails.title}
                      </div>
                      <div
                        className="absolute dropdown user-bookmark top-6 right-5"
                        data-id="68702"
                      >
                        <button
                          className="add2list text-[1.5rem]"
                          data-toggle="dropdown"
                        >
                          <i className="bi bi-plus-circle-dotted"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right folders"></div>
                      </div>
                    </div>
                    <div className="flex end text-[.94rem] my-3 items-center">
                      <span className="quality boder-0 rounded-xl bg-[#00acc1] font-medium h-6  text-[#0f0f0f] mr-2 px-2 flex items-center justify-center">
                        HD
                      </span>{" "}
                      <span className="border-[#00acc1] border px-2 font-medium h-6 mr-2 rating rounded-xl flex items-center justify-center">
                        TV-MA
                      </span>
                      <div className="meta text-[#00acc1] flex mr-2">
                        <span className="mr-2">{movieDetails.release_date.split("-")[0]}</span>
                        <span className="mr-2">
                          <i className="bi bi-star-fill"></i>
                          {movieDetails.vote_average.toFixed(1)}{" "}
                        </span>
                        <span className="mr-2">{movieDetails.runtime} min</span>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 pb-5 body">
                    <div className="meta">
                      <div className="mb-2">
                        <span>Country:</span>{" "}
                        {movieDetails.production_countries.map(
                          (country, index) => (
                            <span key={index}>
                              <a
                                href={`#`} // Add your URL or link here
                                className="px-1 text-white hover:text-[#00acc1] transition-colors duration-500 ease-in-out"
                              >
                                {country.name}
                              </a>
                              {index <
                                movieDetails.production_countries.length - 1 &&
                                ", "}
                            </span>
                          )
                        )}
                      </div>
                      {/* Genre */}
                      <div className="mb-2">
                        <span className="text-[#7b7b7b] font-bold">Genre:</span>{" "}
                        {movieDetails.genres.map((genre, index) => (
                          <span key={genre.id}>
                            <a
                              href={`/genre/${genre.name}`} // Add your URL or link here
                              className="px-1 text-white hover:text-[#00acc1] transition-colors duration-500 ease-in-out"
                            >
                              {genre.name}
                            </a>
                            {index < movieDetails.genres.length - 1 && ", "}
                          </span>
                        ))}
                      </div>
                      {/* end Gern */}
                      <div className="mb-2 ">
                        <span className="text-[#7b7b7b]">Scores:</span>{" "}
                        <span> {movieDetails.vote_average.toFixed(1)}{" "} by {movieDetails.vote_count.toFixed(1)}{" "}  reviews </span>
                      </div>
                    </div>
                    <div className="mt-4 text-[#7b7b7b] desc">
                    {movieDetails.overview}
                    </div>
                  </div>
                </div>
                <div className="mx-5 mb-5 action ">
                  <a
                    className="font-semibold cursor-pointer btn-primary btn w-[100%] bg-[#00acc1] hover:bg-[#71eeff] text-black py-2 px-4 text-center  border-0 rounded-xl h-[40px] flex items-center justify-center"
                    href="/tv/6ixtynin9-the-series-lxvnm"
                  >
                    <i className="bi bi-play-circle-fill"></i> Watch Now
                  </a>
                </div>
              </div>
            </>
          ) : (
            <p>Loading...</p>
          )}
          {/* end movie deatils fech  */}
        </div>
      </div>
    </section>
  );
}
