import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
//47-1 Project Setup With React Router, Tailwind And Daisy UI

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Components/Home/Home";
import Root from "./Components/Root/Root.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Hello world!</div>,
    // element: <Root></Root>,
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
