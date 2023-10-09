import React, { useState, useEffect } from "react";

export default function Trend() {
  const apiKey = "25557d80eb22a3a4103c3f753f66b70e"; // Replace with your TMDb API key

  const [topNineTreandingDay, setTopNineTreandingDay] = useState([]);

  const treandingDay = `https://api.themoviedb.org/3/trending/all/day?sort_by=vote_average.desc&api_key=${apiKey}`;

  // data fech for top 9 trending of day topNineTreandingDay
  useEffect(() => {
    // data fech for top 9 trending of day topNineTreandingDay
    fetch(treandingDay)
      .then((response) => response.json())
      .then((data) => {
        // Handle the API response data here
        // console.log(data);
        const top9DaysMovies = data.results.slice(0, 9); // Get the top 9 movies by vote_average
        setTopNineTreandingDay(top9DaysMovies);
        // console.log(top9DaysMovies);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    // data fech for top 9 trending of day end
  }, []);

  // data fech for top 9 trending of week
  const [topNineTreandingWeek, setTopNineTreandingWeek] = useState([]);
  const treandingWeek = `https://api.themoviedb.org/3/trending/all/week?sort_by=vote_average.desc&api_key=${apiKey}`;
  // data fech for top 9 trending of week topNineTreandingWeek
  useEffect(() => {
    fetch(treandingWeek)
      .then((response) => response.json())
      .then((data) => {
        // Handle the API response data here
        // console.log(data);
        const top9WeekMovies = data.results.slice(0, 9); // Get the top 9 movies by vote_average
        setTopNineTreandingWeek(top9WeekMovies);
        // console.log(top9WeekMovies);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  // data fech for top 9 trending of week end

  // data fech for top 9 trending of month
  const [topNineTreandingMonth, setTopNineTreandingMonth] = useState([]);
  const treandingMonth = `https://api.themoviedb.org/3/movie/top_rated?sort_by=vote_average.desc&api_key=${apiKey}`;
  // data fech for top 9 trending of week topNineTreandingWeek
  useEffect(() => {
    fetch(treandingMonth)
      .then((response) => response.json())
      .then((data) => {
        // Handle the API response data here
        const top9MonthMovies = data.results.slice(0, 9); // Get the top 9 movies by vote_average
        setTopNineTreandingMonth(top9MonthMovies);
        // console.log(top9MonthMovies);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const [activeTab, setActiveTab] = useState("day"); // Default to 'day' tab

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    // <div classNameName="pr-2 text-3xl font-bold uppercase">Top 9</div>
    <section className="mb-5">
      <div className="grid grid-cols-6 gap-4 head">
        <div className="col-start-1 col-end-3 start">
          <h2 className="text-3xl font-bold uppercase title">
            <i className="bi "></i>Top9
          </h2>
        </div>
        <div className="col-span-4 col-end-7 end">
          <div className="grid grid-flow-col grid-cols-12 tabs" data-tabs>
            <span
              className={`tab rounded-md ${
                activeTab === "day" ? "active" : ""
              } items-center col-span-3  border ${
                activeTab === "day" ? "border-[#00acc1]" : "border-[#666666]"
              } px-1 mx-1 hover:border-[#00acc1] inline-block cursor-pointer w-[auto]`}
              onClick={() => handleTabClick("day")}
              data-name="day"
            >
              Day
            </span>
            <span
              className={`tab rounded-md ${
                activeTab === "week" ? "active" : ""
              } items-center col-span-3 border ${
                activeTab === "week" ? "border-[#00acc1]" : "border-[#666666]"
              } px-1 mx-1 hover:border-[#00acc1] inline-block cursor-pointer`}
              onClick={() => handleTabClick("week")}
              data-name="week"
            >
              Week
            </span>
            <span
              className={`tab rounded-md ${
                activeTab === "month" ? "active" : ""
              } items-center  col-span-4 border ${
                activeTab === "month" ? "border-[#00acc1]" : "border-[#666666]"
              } px-1 mx-1 hover:border-[#00acc1] inline-block cursor-pointer`}
              onClick={() => handleTabClick("month")}
              data-name="month"
            >
              Month
            </span>
          </div>
        </div>
      </div>
      <div className="body">
        <div className="body">
          {/* Render content based on activeTab */}
          {activeTab === "day" && (
            <div className="tab-content scaff top9 items" data-name="day">
              {/* day top 9 */}

              {topNineTreandingDay.map((movie) => (
                // <li key={movie.id}>{movie.title}</li>
                <a
                  className="item relative border-0 flex items-center  rounded-md bg-black hover:bg-[#00acc1] hover:text-black ml-4  my-2"
                  href="/movie/barbie-mj97x"
                >
                  <span className="absolute bg-black text-[#00acc1] border-2 border-[#00acc1] rounded-full w-8 h-8 text-center z-[2] left-[-1rem]">
                    1
                  </span>
                  <div className=" poster w-[50px]" data-tip="67775?/cachea2c7">
                    <div>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt="Barbie"
                        className=" new w-[100%] h-[100%] left-0 top-0 border-none border rounded-l-md"
                      />
                    </div>
                  </div>
                  <div className="px-4 info">
                    <div className="text-[#7b7b7b] text-sm">
                      <span>
                        {movie.media_type}
                        <span className="font-bold px-[2px]"> / </span>
                      </span>
                      <span>
                        2023 <span className="font-bold px-[2px]"> / </span>
                      </span>
                      <span>114 min </span>
                    </div>
                    <div className="name text-[#e9e9e9] text-lg overflow-hidden">
                      {movie.media_type === "movie" ? movie.title : movie.name}
                    </div>
                  </div>
                </a>
              ))}

              {/* day top 9 end */}
            </div>
          )}
          {activeTab === "week" && (
            <div className="tab-content scaff top9 items" data-name="week">
              {/* week top 9  */}
              {topNineTreandingWeek.map((movie) => (
                <a
                  className="item relative border-0 flex items-center  rounded-md bg-black hover:bg-[#00acc1] hover:text-black ml-4  my-2"
                  href="/tv/one-piece-mjxqz"
                >
                  <span className="absolute bg-black text-[#00acc1] border-2 border-[#00acc1] rounded-full w-8 h-8 text-center z-[2] left-[-1rem]">
                    1
                  </span>
                  <div className=" poster w-[50px]" data-tip="68599?/cachee590">
                    <div>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt="One Piece"
                        className=" new w-[100%] h-[100%] left-0 top-0 border-none border rounded-l-md"
                      />
                    </div>
                  </div>
                  <div className="px-4 info">
                    <div className="text-[#7b7b7b] text-sm">
                      <span>
                        {movie.media_type}{" "}
                        <span className="font-bold px-[2px]"> / </span>
                      </span>{" "}
                      <span>
                        SS 1 <span className="font-bold px-[2px]"> / </span>
                      </span>{" "}
                      <span>EP 8</span>
                    </div>
                    <div className="name text-[#e9e9e9] text-lg overflow-hidden">
                    {movie.media_type === "movie" ? movie.title : movie.name}
                    </div>
                  </div>
                </a>
              ))}

              {/* week top 9 end */}
            </div>
          )}

          {activeTab === "month" && (
            <div className="tab-content scaff top9 items" data-name="month">
              {/* month top 9  */}

              {topNineTreandingMonth.map((movie) => (
                <a
                  className="item relative border-0 flex items-center  rounded-md bg-black hover:bg-[#00acc1] hover:text-black ml-4  my-2"
                  href="/tv/one-piece-mjxqz"
                >
                  <span className="absolute bg-black text-[#00acc1] border-2 border-[#00acc1] rounded-full w-8 h-8 text-center z-[2] left-[-1rem]">
                    1
                  </span>
                  <div className=" poster w-[50px]" data-tip="68599?/cachee590">
                    <div>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt="One Piece"
                        className=" new w-[100%] h-[100%] left-0 top-0 border-none border rounded-l-md"
                      />
                    </div>
                  </div>
                  <div className="px-4 info">
                    <div className="text-[#7b7b7b] text-sm">
                      <span>
                        {movie.media_type}{" "}
                        <span className="font-bold px-[2px]"> / </span>
                      </span>{" "}
                      <span>
                        SS 1 <span className="font-bold px-[2px]"> / </span>
                      </span>{" "}
                      <span>EP 8</span>
                    </div>
                    <div className="name text-[#e9e9e9] text-lg overflow-hidden">
                      {movie.title}
                    </div>
                  </div>
                </a>
              ))}
              {/* month top 9 end */}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
