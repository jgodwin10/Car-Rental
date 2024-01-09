import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Models from "./Pages/Models"
import Testimonials from "./Pages/Testimonials";


const router = createBrowserRouter([
   
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/models",
        element: <Models />
      },
      {
        path: "/testimonials",
        element: <Testimonials />
      }
    ]


  }


]);

export default router