import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import Jobs from "./components/Jobs";
import Browse from "./components/Browse";
import Profile from "./components/Profile";
import JobDescription from "./components/JobDescription";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Signin",
    element: <Signin />,
  },
  {
    path: "/Signup",
    element: <Signup />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path: "/job/description/:id",
    element: <JobDescription />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
