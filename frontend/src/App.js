import "./index.css";
import Home from "./pages/home";
import MovieDesc from "./pages/movieDesc";
import Test from "./pages/test";

import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    
    <div className="">
      {/* <Home/> */}
      {/* <MovieDesc/> */}
      <Test/>
    </div>
  );
}

export default App;
