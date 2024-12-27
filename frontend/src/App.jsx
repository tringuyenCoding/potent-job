import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import Jobs from "./components/Jobs";
import Browse from "./components/Browse";
import Profile from "./components/Profile";
import JobDescription from "./components/JobDescription";
import Companies from "./components/admin/Companies";
import CompanyCreate from "./components/admin/CompanyCreate";
import CompanySetup from "./components/admin/CompanySetup";
import AdminJobs from "./components/admin/AdminJobs";
import { AdminJobCreate } from "./components/admin/AdminJobCreate";
import JobApplicants from "./components/admin/JobApplicants";

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
  {
    path: "/admin/companies",
    element: <Companies />,
  },
  {
    path: "/admin/company/create",
    element: <CompanyCreate />,
  },
  {
    path: "/admin/company/:id",
    element: <CompanySetup />,
  },
  {
    path: "/admin/jobs",
    element: <AdminJobs />,
  },
  {
    path: "/admin/job/create",
    element: <AdminJobCreate />,
  },
  {
    path: "/admin/jobs/:id/applicants",
    element: <JobApplicants />,
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
