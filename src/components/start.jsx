import React, { Component } from "react";
import { Link } from "react-router-dom";

class Start extends Component {
  state = {};
  render() {
    return (
      <div className="start-bg">
        <main className="container-entry">
          <h1>
            <span className="landing">
              <p class="inactive" style={{ fontSize: 45 }}>
                movierama
              </p>
              <p>Explore our movie collection!</p>
            </span>
          </h1>

          <Link to="/movies">
            <div class="btn-location">
              <button
                className="btn btn-entry inactive"
                style={{ fontSize: 25 }}
              >
                enter
              </button>
            </div>
          </Link>
        </main>
      </div>
    );
  }
}

export default Start;
