import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function banner() {
  return (
    <div className="relative p-0 m-0">
      {/* slider */}
      <Swiper spaceBetween={1} slidesPerView={1} className=" slider">
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
                      <a href="##" className="px-8 text-xl font-bold watchnow bg-[#00acc1] py-3 border-non rounded-3xl text-black">
                        <i className="bi bi-play-circle-fill"></i> Watch Now
                      </a>
                      <div className="px-8 py-3 text-xl font-bold dropup" data-id="55007">
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
      </Swiper>
      {/* end slider */}

      {/* banner+ */}
      
      <Swiper
        spaceBetween={1}
        slidesPerView={4}
        className="absolute bottom-[30vh] banner "
      >
        {[1, 2, 3, 4, 5,6,7,8,9].map((index) => (
          <SwiperSlide key={index}>
            <div className="relative w-[380px] h-[250px] border-none rounded-2xl">
              <img
                src="https://image.tmdb.org/t/p/original/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg"
                className="w-[380px] h-[250px] border-none rounded-2xl"
                alt={`Slide ${index}`}
              />
              <div className="absolute bottom-0 pb-6 pl-10 text-white">
                <div className="text-xl font-bold uppercase header">loki</div>
                <div className="genre text-[#00acc1] text-sm">Comedy</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div>
          D
        </div>
      </Swiper>
    </div>
  );
}
