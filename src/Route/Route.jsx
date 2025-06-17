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
import RequestedFood from "../Pages/RequestedFood";
import useAuth from "../Hooks/useAuth";
import MyFoods from "../Pages/MyFoods";
import UpdateFood from "../Pages/UpdateFood";


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
        loader: ({params})=> fetch(`https://food-loop-server.vercel.app/food/${params.id}`)
      },
      {
        path: "/add-food",
        element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
      },
      {
        path: "/requested-foods",
        element: <PrivateRoute><RequestedFood></RequestedFood></PrivateRoute>,
        
      },
      {
        path: "/my-foods",
        element: <PrivateRoute><MyFoods></MyFoods></PrivateRoute>
      },
      {
        path: "/update-food/:id",
        element: <PrivateRoute><UpdateFood></UpdateFood></PrivateRoute>,
        loader: ({params})=> fetch(`https://food-loop-server.vercel.app/food/${params.id}`)
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