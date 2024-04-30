import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
//47-1 Project Setup With React Router, Tailwind And Daisy UI
//47-2 (Recap) Set Nested Route And Navbar For CareerHub

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Components/Home/Home";
import Root from "./Components/Root/Root.jsx";
import Applied from "./Components/Applied/Applied.jsx";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Hello world!</div>,
    // element: <Root></Root>,
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      // {
      //   path: "/jobs",
      //   // element: <></>,
      // },
      {
        path: "/applied",
        element: <Applied></Applied>,
      },
      {
        path: "/blogs",
        element: <></>,
      },
      {
        path: "/statistics",
        element: <></>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

//9min
