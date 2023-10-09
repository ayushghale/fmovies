import Trend from "../home/Trend";
export default function sidarEp() {
  return (
    <aside className="main">
      <div className="mb-3 text-center"></div>
      {/* form to add comment */}
      <section>
        <div className="flex justify-center mb-8 text-center head w-[100%] flex-col">
          <div className="flex text-center start">
            <h2 className="title uppercase font-semibold text-4xl text-[#fff] mr-4 ">
              <i className="bi bi-file-play-fill text-[#00acc1] text-xl"></i>
              Comment
            </h2>
          </div>
        </div>
        <div className="body">
          <header id="main-nav">
            <div>
              <nav className="mb-6 border-b-2 nav ">
                <ul className="flex justify-between">
                  <li className="py-4 nav-tab ">
                    <a className=" publisher">
                      <span className="text-xl font-semibold comment-count">
                        496 Comments
                      </span>
                    </a>
                  </li>
                  <li className="py-4 text-xl font-semibold nav-tab">
                    <ul className="flex justify-between text-center">
                      <li className="nav-tab ">
                        <span className="notification-count ">1</span>
                      </li>
                      <li className=" nav-tab">Login</li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          {/* comment */}
          <section id="conversation">
            <div id="post " className="flex flex-row">
              <div className="w-[50px] h-[50px] text-4xl font-semibold border-non rounded-[30%] py-1 bg-[#9e9e9e] text-[#333232] ">
                <div className="flex justify-center text-center">G</div>
              </div>
              <div id="from" className="px-3 w-[100%]">
                <form action="nre" method="post">
                  <div>
                    <input
                      type="text"
                      className="w-full h-[70px] border-non rounded-3xl px-4 focus:outline-none"
                      placeholder="Add Comment"
                    />
                    <div className="flex mt-2">
                      <div className="font-bold uppercase ">
                        Login with
                        <div className="flex gap-1 pt-5">
                          <div className="flex justify-center w-8 h-8 py-1 text-base text-center text-white rounded-full border-non bg-slate-500">
                            F
                          </div>
                          <div className="flex justify-center w-8 h-8 py-1 text-base text-center text-white rounded-full border-non bg-slate-500">
                            F
                          </div>
                          <div className="flex justify-center w-8 h-8 py-1 text-base text-center text-white rounded-full border-non bg-slate-500">
                            F
                          </div>
                          <div className="flex justify-center w-8 h-8 py-1 text-base text-center text-white rounded-full border-non bg-slate-500">
                            F
                          </div>
                        </div>
                      </div>
                      <div className="w-full pl-4 ">
                        <p className="pb-2 font-bold uppercase">
                          OR SIGN UP WITH DISQUS
                        </p>
                        <input
                          type="text"
                          className="w-full h-[45px] border-non rounded-xl px-4 focus:outline-none"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </section>
      {/* end forma to add comment   */}

      {/* comment */}
      <section className="pt-3">
        <div className="body">
          <header id="main-nav">
            <div>
              <nav className="mb-6 nav ">
                <ul className="flex justify-between">
                  <li className="py-4 nav-tab ">
                    <a className=" publisher">
                      <span className="text-xl font-semibold comment-count">
                        496 Comments
                      </span>
                    </a>
                  </li>
                  <li className="py-4 text-xl font-semibold nav-tab">
                    <ul className="flex justify-between text-center">
                      <li className="nav-tab ">
                        <span className="notification-count ">1</span>
                      </li>
                      <li className=" nav-tab">Login</li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          {/* comment */}
          <section id="conversation">
            <div id="post " className="flex flex-row">
              <div className="w-[50px] h-[50px] text-4xl font-semibold border-non rounded-[30%] py-1 bg-[#9e9e9e] text-[#333232] ">
                <div className="flex justify-center text-center">G</div>
              </div>
              <div id="from" className="px-3 w-[100%] ">
                <div className="flex justify-between pb-2 name">
                  <div>
                    <div className="text-xl font-bold name text-[#e3e3e3]">
                      User name
                    </div>
                    <div className="text-sm font-semibold publishTime">
                      2 hour edited
                    </div>
                  </div>
                  <div className="flex text-white gap-4F">
                    <div className="text-3xl font-bold">-</div>
                    <div className="py-3 text-sm font-semibold asd">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="comment text-[#e3e3e3] pb-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  laudantium et saepe illo necessitatibus quis nulla est
                  ducimus, optio neque maxime asperiores reprehenderit laborum
                  officia cumque, mollitia voluptatem nemo officiis? Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Omnis laudantium
                  et saepe illo necessitatibus quis nulla est ducimus, optio
                  neque maxime asperiores reprehenderit laborum officia cumque,
                  mollitia voluptatem nemo officiis?
                </div>
                <div className="flex gap-5 Action">
                  <div className="flex like">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                      />
                    </svg>
                  </div>
                  <div className="unlike">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"
                      />
                    </svg>
                  </div>
                  <div className="reply">reply</div>
                  <div className="share">share</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      {/* end commment */}
    </aside>
  );
}
