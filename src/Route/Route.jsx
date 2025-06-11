import {
  createBrowserRouter
} from "react-router";
import Root from "../LayOuts/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
  },
]);