import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const routes = createBrowserRouter([
  {
    path: "/login",
    element: "login Page",
  },
  {
    path: "/",
    element: <App />,
  },
]);

export default routes;
