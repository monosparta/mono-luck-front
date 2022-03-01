import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./page/index/index";
import Luckpage from "./page/luck/luck";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Luck" element={<Luckpage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
