import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./page/index/index";
import Luckpage from "./page/luck/luck";
import Complete from "./page/complete/complete";
import Inquiry from "./page/inquiry/inquiry";
import Notyetopen from "./page/notyetopen/notyetopen";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Luck" element={<Luckpage />} />
        <Route path="/Complete" element={<Complete />} />
        <Route path="/Inquiry" element={<Inquiry />} />
        <Route path="/Notyetopen" element={<Notyetopen />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
