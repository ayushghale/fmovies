export default function movieDetails() {
  return (
    <aside className="mr-5 main">
      <section id="w-info" className="flex">
        <div className="overflow-hidden poster">
          <img
            itemprop="image"
            className="overflow-hidden bg-cover border-non rounded-xl"
            src="https://static.bunnycdn.ru/i/cache/images/1/12/1229f9ae00c455c709d48e662e51984d.jpg"
            alt="Gen V"
          />
        </div>
        <div className="relative ml-8 info">
          <div className="absolute rating-box right-0 top-0 bg-[#0f0f0f] p-4 border-non rounded-lg flex flex-col text-center">
            <div className="flex gap-3 stars">
              
              <span className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#f5c518]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </span>
              <span className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#f5c518]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </span>
              <span className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#f5c518]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </span>
              <span className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#f5c518]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </span><span className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </span>
            </div>
            <div className="score live-label">
              <span>
                <b itemprop="ratingValue">7.76</b> of
                <b itemprop="bestRating">10</b> (
                <span itemprop="reviewCount">
                  {/* <span itemprop="reviewCount" style="display: none"> */}
                  17
                </span>
                17 reviews)
              </span>
            </div>
          </div>
          <h1
            itemprop="name"
            className="name text-[#dedede] font-semibold text-4xl w-[80%] mb-3"
          >
            Gen V
          </h1>
          <div className="meta text-[#dedede] my-4">
            <span className="px-2 text-l font-semibold border-non text-black rounded-3xl quality bg-[#00acc1]">
              HD
            </span>
            <span className="px-2 ml-4 font-semibold border text-l rating rounded-3xl">
              ?
            </span>
            <span className="ml-4">
              <i className="bi bi-star-fill"></i> ..
            </span>
            <span className="ml-4 year">2023</span> <span></span>
          </div>
          <div className="mb-4 font-light description cts-wrapper">
            From the world of &quot;The Boys&quot; comes &quot;Gen V,&quot;
            which explores the first generation of superheroes to know that
            their super powers are from Compound V. These heroes put their
            physical and moral boundaries to the test competing for the...
          </div>
          <div className="leading-7 detail">
            <div className="flex">
              <div className="w-[120px] shrink-0">Type:</div>
              <span className="text-white hover:text-[#00acc1] hover:duration-1000">
                {" "}
                <a href="tv">TV</a>{" "}
              </span>
            </div>
            <div className="flex">
              <div className="w-[120px] shrink-0">Country:</div>
              <span className="text-white hover:text-[#00acc1] hover:duration-1000">
                <a
                  href="/country/united-states"
                  title="United States Movies, TV-Shows"
                >
                  United States
                </a>
              </span>
            </div>
            <div className="flex">
              <div className="w-[120px] shrink-0">Genre:</div>
              <span className="text-white hover:text-[#00acc1] hover:duration-1000">
                <a href="/genre/comedy" title="Comedy Movies, TV-Shows">
                  Comedy
                </a>
                ,
                <a href="/genre/adventure" title="Adventure Movies, TV-Shows">
                  Adventure
                </a>
                ,
                <a href="/genre/action" title="Action Movies, TV-Shows">
                  Action
                </a>
              </span>
            </div>
            <div className="flex">
              <div className="w-[120px] shrink-0">Release:</div>
              <span itemprop="dateCreated">Sep 29, 2023</span>
            </div>
            <div className="flex">
              <div className="w-[120px] shrink-0">Director:</div>
              <span> N/A </span>
            </div>
            <div className="flex">
              <div className="w-[120px] shrink-0">Production:</div>
              <span>
                <a
                  href="/production/amazon-studios"
                  className="text-white hover:text-[#00acc1] hover:duration-1000"
                >
                  Amazon Studios
                </a>
                ,
                <a
                  href="/production/original-film"
                  className="text-white hover:text-[#00acc1] hover:duration-1000"
                >
                  Original Film
                </a>
                ,
                <a
                  href="/production/kripke-enterprises"
                  className="text-white hover:text-[#00acc1] hover:duration-1000"
                >
                  Kripke Enterprises
                </a>
              </span>
            </div>
            <div className="flex">
              <div className="w-[120px] shrink-0">Cast:</div>
              <span>
                <a
                  href="/star/jaz-sinclair"
                  className="text-white hover:text-[#00acc1] hover:duration-1000"
                >
                  Jaz Sinclair
                </a>
                ,
                <a
                  href="/star/lizze-broadway"
                  className="text-white hover:text-[#00acc1] hover:duration-1000"
                >
                  Lizze Broadway
                </a>
                ,
                <a
                  href="/star/chance-perdomo"
                  className="text-white hover:text-[#00acc1] hover:duration-1000"
                >
                  Chance Perdomo
                </a>
              </span>
            </div>
            <div className=" tags">
              <div className="w-[120px] shrink-0">Tags:</div>
              <span className="flex">
                <h2>gen v download free</h2>,<h2>gen v full episodes online</h2>
                ,<h2>gen v free online</h2>,<h2>gen v series download</h2>,
                <h2>gen v free stream</h2>,<h2>free watch gen v</h2>
              </span>
            </div>
          </div>
        </div>
      </section>
    </aside>
  );
}
