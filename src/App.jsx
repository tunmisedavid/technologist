import { useState } from "react";
import { Outlet } from "react-router-dom";
import HeaderComponent from "./components/Header";

function App() {
  return (
    <div>
      <HeaderComponent />
      <Outlet />
    </div>
  );
}

export default App;
