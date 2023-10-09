import "./index.css";
import Home from "./pages/home";
import MovieDesc from "./pages/movieDesc";
import Test from "./pages/test";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";

// fontawesome

function App() {
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {[1, 2, 3, 4, 5].map((index) => (
          <SwiperSlide key={index}>
            <div className="relative w-[100%] h-[100vh] border-none rounded-2xl">
              <img
                src="https://image.tmdb.org/t/p/original/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg"
                className="w-[100%] h-[83vh] border-none rounded-2xl"
                alt={`Slide ${index}`}
              />
              <div className="container absolute flex pb-{80px} pl-10 text-white bottom-[250px]">
                <div className="slide-wrapper mb-[13rem]">
                  <div className="info">
                    <div className="start ">
                      <h2 className="text-[5rem] font-extrabold uppercase name">
                        Loki
                      </h2>
                      <div className="flex gap-6 meta">
                        <span className="px-2 quality bg-[#00acc1] border-non rounded-2xl ">
                          HD
                        </span>{" "}
                        <span className="px-3 border rounded-2xl rating">
                          TV-14
                        </span>
                        <span>
                          <i className="bi bi-star-fill"></i> 8.2
                        </span>
                        <span>2021</span> <span>52 min</span>
                        <span className="flex gap-6 genres">
                          <a href="/genre/adventure">Adventure</a>
                          <a href="/genre/action">Action</a>
                          <a href="/genre/fantasy">Fantasy</a>
                        </span>
                      </div>
                      <div className="desc end">
                        The mercurial villain Loki resumes his role as the God
                        of Mischief in a new series that takes place after the
                        events of “Avengers: Endgame.”
                      </div>
                    </div>
                  </div>
                  <div className="pt-5 actions">
                    <div className="flex flex-row start gap-9">
                      <a
                        href="##"
                        className="px-8 text-xl font-bold watchnow bg-[#00acc1] py-3 border-non rounded-3xl text-black"
                      >
                        <i className="bi bi-play-circle-fill"></i> Watch Now
                      </a>
                      <div
                        className="px-8 py-3 text-xl font-bold dropup"
                        data-id="55007"
                      >
                        <button className="">
                          <i className="bi bi-bookmark"></i> Bookmark
                        </button>
                        <div className="dropdown-menu"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div
          className="swiper-pagination"
          style={{
            position: "absolute",
            top: "65vh",
            right: "0",
            width: "10vh",
            height: "50px",
          }}
        >
          <div className="text-white bg-gray-600 swiper-button-prev">
            
          </div>
          <div className="swiper-button-next">
            <i className="bi bi-chevron-right"></i>
          </div>
        </div>
        ...
      </Swiper>
    </>
    // <div className="">
    //   {/* <Home/> */}
    //   {/* <MovieDesc/> */}
    //   <Test/>
    // </div>
  );
}

export default App;
