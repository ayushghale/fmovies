import React, { Component } from "react";

class footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <div class="container">
            <div class="head">
              <div class="start"></div>
              <div class="end">
                <div class="logo">
                  <img
                    src="https://s3.bunnycdn.ru/assets/sites/fmovies/logo.png"
                    alt="FMovies"
                  />
                </div>
              </div>
            </div>
            <div class="body">
              <div class="start">
                <span>Links: </span>
                <ul>
                  <li>
                    <a href="movie">
                      Movies <i class="bi bi-arrow-right-square-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a href="tv">
                      TV-Shows <i class="bi bi-arrow-right-square-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a href="az-list">
                      A-Z List <i class="bi bi-arrow-right-square-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a href="updated">
                      Recently Updated
                      <i class="bi bi-arrow-right-square-fill"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="end">
                <ul>
                  <li>
                    <a href="##" >
                      Request <i class="bi bi-arrow-right-square-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a href="contact">
                      Contact <i class="bi bi-arrow-right-square-fill"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="abs">
              <div>
                FMovies is top of free streaming website, where to watch movies
                online free without registration required. With a big database
                and great features, we're confident FMovies is the best free
                movies online website in the space that you can't simply miss!
              </div>
              <div class="bottom-text">
                This site does not store any files on our server, we only linked
                to the media which is hosted on 3rd party services.
              </div>
              <div class="text-muted small">
                Links:
                
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default footer;
