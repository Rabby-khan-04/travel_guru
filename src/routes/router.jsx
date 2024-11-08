import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home/Home";
import Booking from "../page/Booking/Booking";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
import AuthRoot from "./AuthRoot";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "booking",
        element: <Booking />,
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
