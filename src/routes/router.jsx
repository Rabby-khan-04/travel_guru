import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home/Home";
import Booking from "../page/Booking/Booking";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
import AuthRoot from "./AuthRoot";
import Root from "./Root";
import axios from "axios";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: async () => {
      const res = await axios.get("/destinations.json");
      return res.data;
    },

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "booking/:destinationId",
        element: <Booking />,
        loader: () => axios.get("/destinations.json"),
      },
    ],
  },
  {
    path: "/",
    element: <AuthRoot />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
