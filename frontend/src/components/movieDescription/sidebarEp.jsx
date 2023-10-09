export default function sidarEp() {
  return (
    <aside className="sidebar w-[100%]  bg-[#0f0f0f] rounded-2xl  flex flex-col justify-between">
      <div className="">
        {/* dropdown */}
        <div className="flex justify-center head">
          <div className="relative dropdown">
            <button className="cursor-pointer btn dropdown-toggle w-[100%] text-[#ababab] font-semibold p-5 min-w-[230px]">
              <i className="bi bi-file-play-fill"></i>
              <span className="season-view"> Season 1 </span>
            </button>
            <div className="hidden overflow-auto dropdown-menu max-h-[200px] bg-[#181818] left-0 right-0 border-non rounded-lg mt-0 absolute top-[100%] z-1000">
              <a
                className="block dropdown-item season-item w-[100%] px-4 py-3"
                href="##"
              >
                Season 1
              </a>
            </div>
          </div>
        </div>
        {/* dropdown end */}

        <div className="relative flex-grow body">
          <ul className="top-0 bottom-0 left-0 p-0 m-0 overflow-auto list-none episodes">
            {/* <ul className="episodes" style="display: block" data-season="1"> */}
            <li className="active text-black bg-[#00acc1] px-2 py-2">
              <a href="/tv/gen-v-4wrjk/1-1">
                <span className="num">Episode 1:</span> <span>Episode 1</span>
              </a>
            </li>
            <li className="px-2 py-2 ">
              <a href="/tv/gen-v-4wrjk/1-1">
                <span className="num">Episode 2:</span> <span>Episode 2</span>
              </a>
            </li>
            <li className="px-2 py-2 ">
              <a href="/tv/gen-v-4wrjk/1-1">
                <span className="num">Episode 3:</span> <span>Episode 3</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="p-2 border-t border-[#ababab] foot ">
        <div className="flex items-center justify-between go2ep">
          <span>Go to episode</span>
          <form
            className="flex border-non rounded-3xl d-flex bg-[#00acc1]  "
            autocomplete="off"
          >
            <input
              type="text"
              className="w-[50px] text-center border-non focus:outline-none rounded-l-3xl "
              value={1}
            />
            <button
              className="btn btn-primary h-[30px] px-3 w-[45px]"
              type="submit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white rotate-180 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </aside>
  );
}
