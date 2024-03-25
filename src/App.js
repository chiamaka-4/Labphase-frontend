import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./screens/Home";
import AboutUs from "./screens/AboutUs";
import Contact from "./screens/Contact";
import Gallery from "./screens/Gallery";
import SignUpScreen from "./screens/SignUpScreen";
import LoginScreen from "./screens/LoginScreen";
import Videos from "./screens/Videos";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/about",
        element: <AboutUs />,
      },

      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/signup",
        element: <SignUpScreen />,
      },
      {
        path: "/login",
        element: <LoginScreen />,
      },

      {
        path: "/videos",
        element: <Videos />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
