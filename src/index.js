import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import RegisterPage from "./Page/registerPage";
import HomePage from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registerPage" element={<RegisterPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
