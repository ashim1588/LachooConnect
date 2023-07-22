import "./styles.css";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import SignUp from "./componants/SignUp/SignUp";
import PrivateRoute from "./routes/PrivateRoutes";

import Layout from "./componants/Layout/Layout";
import FeedPage from "./componants/Pages/FeedPage";
import HomePage from "./componants/Pages/HomePage";
import FindPage from "./componants/Pages/FindPage";
import UserPage from "./componants/Pages/UserPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: "/home",
          element: (
            <PrivateRoute>
              <HomePage></HomePage>
            </PrivateRoute>
          ),
        },
        {
          path: "/feed",
          element: (
            <PrivateRoute>
              <FeedPage></FeedPage>
            </PrivateRoute>
          ),
        },
        {
          path: "/findalumni",
          element: (
            <PrivateRoute>
              <FindPage></FindPage>
            </PrivateRoute>
          ),
        },
        {
          path: "/profile",
          element: (
            <PrivateRoute>
              <UserPage></UserPage>
            </PrivateRoute>
          ),
        },
        {
          path: "login",
          element: <Login></Login>,
        },
        {
          path: "signup",
          element: <SignUp></SignUp>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

