import React from "react";

// Import Swiper styles
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";


export default function TrendSlider() {
  return (
    <>
      <div>
        <div className="flex w-full First ">
          {/* SLIDER  */}
          <div className="sliders w-[95%]">
            <Swiper
              spaceBetween={20}
              slidesPerView={4}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: "#button-next-slide",
                prevEl: "#button-prev-slide",
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Navigation, Autoplay]}
              className="slider"
              style={{ width: "100%", height: "220px" }}
              loop={true}
            >
              <div
                className="swiper-wrapper"
                style={{
                  width: "50% !important",
                  height: "220px",
                }}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
                  <SwiperSlide
                    key={index}
                    className=""
                    style={{
                      width: "25%",
                      height: "230px",
                    }}
                  >
                    <div className="relative border-none rounded-2xl">
                      <img
                        src="https://image.tmdb.org/t/p/original/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg"
                        className="w-[100%] h-[100%] border-none rounded-2xl"
                        alt={`Slide ${index}`}
                      />
                      <div className="absolute bottom-0 pb-6 pl-10 text-white">
                        <div className="text-xl font-bold uppercase header">
                          loki
                        </div>
                        <div className="genre text-[#00acc1] text-sm">
                          Comedy
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
          {/* SLIDER BUTTON  */}
          <div className="sliderButtons w-[2%] text-white mx-2 justify-between flex flex-col">
            <div id="button-prev-slide" className="flex items-center justify-center my-2 text-2xl button-prev-slide bg-gray-500 hover:bg-[#18c1db] border-none rounded-2xl h-[50%] transition-all duration-300 ease-in-out">
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>
            <div id="button-next-slide" className="flex items-center justify-center my-2 text-2xl button-next-slide hover:bg-[#18c1db] border-none rounded-2xl h-[50%] transition-all duration-300 ease-in-out">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
