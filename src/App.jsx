import { useState } from "react";
import { HashRouter as Router, Route, Routes} from "react-router-dom";

// import "./App.css";
import HeaderComponent from "./Header";
import Landing from "./Landing";
import Works from "./works";
import Blog from "./blog";
import Contact from "./Contact";
import Socials from "./Social";
import Skills from "./Skills";

function App() {
  return (
    <div>
      {/* // <HashRouter> */}
      {/* // <Router basename="technologist"> */}
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/Blog" element={<Blog />}></Route>
          <Route path="/works" element={<Works />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Skills" element={<Skills />}></Route>
        </Routes>
        <Socials />
      {/* // </Router> */}
      {/* // </HashRouter> */}
    </div> 
  );
}

export default App;
