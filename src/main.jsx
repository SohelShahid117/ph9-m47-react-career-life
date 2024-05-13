import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
//47-1 Project Setup With React Router, Tailwind And Daisy UI
//47-2 (Recap) Set Nested Route And Navbar For CareerHub

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Components/Home/Home";
import Root from "./Components/Root/Root.jsx";
import Applied from "./Components/Applied/Applied.jsx";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";
import JobDetails from "./Components/JobDetails/JobDetails.jsx";
import { HelmetProvider } from "react-helmet-async";
// import loader from from "react-router-dom";

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
        loader: () => fetch("jobsss.json"), //warning:don't load all data in future
      },
      {
        path: "/blogs",
        element: <></>,
      },
      {
        path: "/statistics",
        element: <></>,
      },
      {
        path: "/job/:id",
        element: <JobDetails></JobDetails>,
        // loader: fetch("jobsss.json"),
        loader: () => fetch("jobsss.json"), ////warning:don't load all data in future
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);

//9min
