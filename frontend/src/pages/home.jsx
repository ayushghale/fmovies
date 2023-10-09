import React, { Component, useState, useEffect } from "react";
import Header from "./include/header";
import Footer from "./include/footer";

import Recommended from "../components/home/RecommendedMovie";
import LatestMovies from "../components/home/LatestMovies";
import LatestTvShows from "../components/home/LatestTvShows";
import Trend from "../components/home/Trend";

import Banner from "../components/home/baner";

function Home() {
  return (
    <div>
      <div className="bg-gray-900 header ">
        <Header />
      </div>
      <div>
        <Banner />
      </div>
      <div className="grid grid-flow-col grid-cols-12 mt-5 body">
        <div className="grid col-span-10 md:col-span-10 lg:col-span-9">
          <div className="mb-12">
            <Recommended />
          </div>
          <div className="mb-12">
            <LatestMovies />
          </div>
          <div className="mb-12">
            <LatestTvShows />
          </div>
        </div>
        <div className="hidden col-span-3 pl-8 trend lg:inline">
          <Trend />
        </div>
      </div>
      {/* <Test /> */}
    </div>
  );
}

export default Home;

function Test() {
  // https://api.themoviedb.org/3/discover/movie

  const apiKey = "25557d80eb22a3a4103c3f753f66b70e"; // Replace with your TMDb API key

  const [topNineTreandingMonth, setTopNineTreandingMonth] = useState([]);
  const treandingMonth = `https://api.themoviedb.org/3/movie/top_rated?sort_by=vote_average.desc&api_key=${apiKey}`;
  // data fech for top 9 trending of week topNineTreandingWeek
  useEffect(() => {
    fetch(treandingMonth)
      .then((response) => response.json())
      .then((data) => {
        // Handle the API response data here
        // console.log(data);
        const top9MonthMovies = data.results.slice(0, 9); // Get the top 9 movies by vote_average
        setTopNineTreandingMonth(top9MonthMovies);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Upcoming Movies</h1>
      <ul>
        {topNineTreandingMonth.map((movie) => (
          <li key={movie.id}>
            {/* {movie.title} */}
            <DisplayMovieID movieId={movie.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function DisplayMovieID({ movieId }) {
  const apiKey = "25557d80eb22a3a4103c3f753f66b70e"; // Replace with your TMDb API key
  const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`;

  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    fetch(movieDetailsUrl)
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });
  }, [movieDetailsUrl]);

  return (
    <div className="p-4 my-4 border rounded">
      {movieDetails ? (
        <>
          <h1 className="mb-2 text-2xl font-bold">{movieDetails.title}</h1>
          <p className="mb-1">Adult: {movieDetails.adult ? "Yes" : "No"}</p>
          <p className="mb-1">Backdrop Path: {movieDetails.backdrop_path}</p>
          <p className="mb-1">Budget: {movieDetails.overview}</p>
          <p className="mb-1">
            Vote Average: {movieDetails.vote_average.toFixed(1)}{" "}
          </p>
          <p className="mb-1">
            Genres: {movieDetails.genres.map((genre) => genre.name).join(", ")}
          </p>
          <p className="mb-1">
            production_countries:{" "}
            {movieDetails.production_countries
              .map((production_countries) => production_countries.name)
              .join(", ")}
          </p>
          <p className="mb-1">
            spoken_languages:{" "}
            {movieDetails.spoken_languages
              .map((genre) => genre.english_name)
              .join(", ")}
          </p>
          {/* Add more fields as needed */}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
