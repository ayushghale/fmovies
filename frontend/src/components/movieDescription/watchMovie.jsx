import React from "react";

export default function WatchMovie() {
  const imageUrl =
    "https://static.bunnycdn.ru/i/cache/images/1/12/1229f9ae00c455c709d48e662e51984d.jpg";
  return (
    <div id="player-wrapper" className="no-player">
      <div className="absolute bg-center bg-no-repeat bg-cover "
      style={{ backgroundImage: `url(${imageUrl})` }}>
      </div>
      <div className="container watch-page">
          <div className="player-main">
            <div id="player">
              <div className="btn-watchnow">
                <i className="bi bi-play-circle-fill"></i>
              </div>
            </div>
          </div>
          <section id="controls" >
            <div className="c-items">
              <div
                className="item auto-play"
                
              >
                <i className="bi bi-check-circle-fill"></i> Auto Play
              </div>
              <div
                className="item auto-next"
                
              >
                <i className="bi bi-check-circle-fill"></i> Auto Next
              </div>
              <div
                className="item auto-skip"
               
              >
                <i className="bi bi-check-circle-fill"></i> Auto Skip
              </div>
              <div
                className="skiptime dropdown"
               
                title="Please help us by contributing time to skip the intro, outro. HOW TO: Click to an input field, then seek the video to the correct position, the time will automatic filled to the field, then submit the form. HOW IT WORKS: The system will automatic skip the video from [BEGIN] to [END]."
              >
                <div
                  className="item"
                  
                >
                  <i className="bi bi-flag-fill"></i> Add skip time
                </div>
                <div className="dropdown-menu noclose">
                  <div className="input">
                    <div className="block intro">
                      <div className="line"><i></i></div>
                      <div className="group begin">
                        <label>Intro begin</label>
                        <input
                          type="text"
                          name="intro_begin"
                          className="form-control form-control-sm"
                          placeholder="00:00:00"
                          autocomplete="off"
                        />
                      </div>
                      <div className="group end">
                        <label>Intro end</label>
                        <input
                          type="text"
                          name="intro_end"
                          className="form-control form-control-sm"
                          placeholder="00:00:00"
                          autocomplete="off"
                        />
                      </div>
                    </div>
                    <div className="block outro">
                      <div className="line"><i></i></div>
                      <div className="group begin">
                        <label>Outro begin</label>
                        <input
                          type="text"
                          name="outro_begin"
                          className="form-control form-control-sm"
                          placeholder="00:00:00"
                          autocomplete="off"
                        />
                      </div>
                      <div className="group end">
                        <label>Outro end</label>
                        <input
                          type="text"
                          name="outro_end"
                          className="form-control form-control-sm"
                          placeholder="00:00:00"
                          autocomplete="off"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="submit">
                    <button
                      className="mt-2 btn btn-sm btn-primary w-100"
                      type="button"
                    >
                      Contribute
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="dropdown user-bookmark"
                data-id="69190"
                data-fetch="true"
              >
                <div
                  className="item"
                  data-toggle="dropdown"
                  data-placeholder="false"
                  data-add='<i className="bi bi-bookmark"></i> <span>Add bookmark</span>'
                  data-edit='<i className="bi bi-bookmark-check"></i> <span>Edit bookmark</span>'
                ></div>
                <div className="dropdown-menu folders"></div>
              </div>
              <div className="item light">
                <i className="bi bi-lightbulb"></i> <span>Light</span>
              </div>
              <div
                className="item sharing"
                data-toggle="collapse"
                data-target="#share-box"
              >
                <i className="bi bi-share-fill"></i> <span>Sharing</span>
              </div>
              <div className="item" data-toggle="modal" data-target="#report">
                <i className="bi bi-exclamation-diamond"></i>
                <span>Report</span>
              </div>
            </div>
          </section>
        </div>
    </div>
  );
}
