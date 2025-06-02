import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Landing from "./pages/Landing.jsx";
import Blog from "./pages/Blog.jsx";
import Works from "./pages/Works.jsx";
import Skills from "./pages/Skills.jsx";
import Contact from "./pages/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/technologist/",
    element: <App />,
    children: [
      {
        path: "/technologist/",
        element: <Landing />,
      },
      {
        path: "/technologist/Blog",
        element: <Blog />,
      },
      {
        path: "/technologist/Works",
        element: <Works />,
      },
      {
        path: "/technologist/Skills",
        element: <Skills />,
      },
      {
        path: "/technologist/Contact",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
