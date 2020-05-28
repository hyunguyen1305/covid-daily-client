import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePageContainer from "./routes/home/HomePageContainer";

import "bootstrap/dist/css/bootstrap-grid.min.css";
import "./App.css";

function App() {
  return (
    <main>
      <Router>
        <Route exact path="/" component={HomePageContainer} />
      </Router>
      <footer
        style={{
          margin: "2rem 0 0 0 ",
          backgroundColor: "#3f3f44",
          textAlign: "center",
          padding: "2rem",
          color: "white",
          fontSize: "1.5rem",
        }}
      >
        <p>
          Special thanks:{" "}
          <a
            href="https://www.worldometers.info/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.worldometers.info
          </a>{" "}
          for all the data.
        </p>
        <div>
          This page all purpose for My demo Web Crawler. If you would like to
          complain or remove anything please contact via Email:{" "}
          <span>
            <a href="_blank">huy.nguyenngoc1305@gmail.com</a>
          </span>
        </div>
      </footer>
    </main>
  );
}

export default App;
