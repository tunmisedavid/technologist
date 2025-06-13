import { useState } from "react";
import { Outlet } from "react-router-dom";
import HeaderComponent from "./components/Header";
import Socials from "./components/Social";

function App() {
  return (
    <div>
      <HeaderComponent />
      <Outlet />
      <Socials />
    </div>
  );
}

export default App;
