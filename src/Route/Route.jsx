import {
  createBrowserRouter
} from "react-router";
import Root from "../LayOuts/Root";
import Home from "../Pages/Home";
import FoodDetails from "../Pages/FoodDetails";
import AvailableFood from "../Pages/AvailableFood";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/available-foods",
        Component: AvailableFood
      },
      {
        path: '/food/:id',
        element: <FoodDetails></FoodDetails>,
        loader: ({params})=> fetch(`http://localhost:3000/food/${params.id}`)
      }
    ]
  },
]);