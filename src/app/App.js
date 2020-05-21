import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePageContainer from "./routes/home/HomePageContainer";

import "bootstrap/dist/css/bootstrap-grid.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <Route exact path="/" component={HomePageContainer} />
    </Router>
  );
}

export default App;
