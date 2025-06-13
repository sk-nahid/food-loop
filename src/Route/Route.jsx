import {
  createBrowserRouter
} from "react-router";
import Root from "../LayOuts/Root";
import Home from "../Pages/Home";
import FoodDetails from "../Pages/FoodDetails";
import AvailableFood from "../Pages/AvailableFood";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "../Pages/PrivateRoute";

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
        element:<PrivateRoute> <FoodDetails></FoodDetails></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:3000/food/${params.id}`)
      },

      //authentication
      {
        path: "/login",
        Component: Login
      },
      {
        path: '/register',
        Component: Register
      }
    ]
  },
]);