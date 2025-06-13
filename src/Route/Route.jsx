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
import AddFood from "../Pages/AddFood";

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
      {
        path: "/add-food",
        element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
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