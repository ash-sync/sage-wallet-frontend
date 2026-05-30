import App from "@/App";
import About from "@/pages/About";
import Home from "@/pages/Home";
import Login from "@/pages/Authentication/Login";
import Register from "@/pages/Authentication/Register";

import { createBrowserRouter } from "react-router";
import Verify from "@/pages/Verify";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        Component: Home,
        index: true,
      },
      {
        Component: About,
        path: "about",
      },
    ],
  },
  {
    Component: Login,
    path: "/login",
  },
  {
    Component: Register,
    path: "/register",
  },
  {
    Component: Verify,
    path: "/verify",
  },
]);

export default router;
