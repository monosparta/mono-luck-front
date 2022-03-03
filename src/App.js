import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./page/index/index";
import Luckpage from "./page/luck/luck";
import Complete from "./page/complete/complete";
import Inquiry from "./page/inquiry/inquiry";
import Notyetopen from "./page/notyetopen/notyetopen";
import Hamburgar from "./component/hamburgar";

const Layout = (props) => {
  return (
    <>
      <Hamburgar />
      {props.children}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Layout></Layout>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Luck" element={<Luckpage />} />
        <Route path="/Complete" element={<Complete />} />
        <Route path="/Inquiry" element={<Inquiry />} />
        <Route path="/Noyetopen" element={<Notyetopen />} />
      </Routes>
    </Router>
  );
};

export default App;
