import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/login/page";
import Error from "./pages/error/page";
import Signup from "./pages/signup/page";
import Home from "./pages/home/page";
import MyPhotos from "./pages/myphotos/page";
import Profile from "./pages/profile/page";
import Post from "./pages/post/page";
import ProtectRoutes from "./components/protectedRoutes";

export const router = createBrowserRouter([
  {
    element: <ProtectRoutes />,
    children: [
      { path: "/", element: <Home />, errorElement: <Error /> },
      {
        path: "myphotos",
        element: <MyPhotos />,
        errorElement: <Error />,
      },
      {
        path: "profile",
        element: <Profile />,
        errorElement: <Error />,
      },
      {
        path: "/post",
        element: <Post />,
        errorElement: <Error />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
]);

export default router;
