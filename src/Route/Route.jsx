import {
  createBrowserRouter
} from "react-router";
import Root from "../LayOuts/Root";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        Component: Home,
      }
    ]
  },
]);