import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./Layout/Root";
import About from "./Pages/About/About";
import Resume from "./Pages/Resume/Resume";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Contact from "./Pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { index: true, element: <About></About>},
      { path: "/resume", element:  <Resume></Resume>},
      { path: "/portfolio", element: <Portfolio></Portfolio> },
      { path: "/contact", element: <Contact></Contact> },
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
