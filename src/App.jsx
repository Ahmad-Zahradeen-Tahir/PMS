import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import RootLayout from "./Layout/RootLayout";
import ErrorPage from "./Pages//Error/ErrorPage";
import AuthPage from "./Pages/Auth/AuthPage";
import ForgotPassword from "./Pages/Forgot Password/ForgotPassword";
import "./App.css";
import NewPassword from "./Pages/New Password/NewPassword";
import Setup from "./Pages/Setup/Setup";
import Properties from "./Pages/Properties/Properties";
import Tenants from "./Pages/Tenants/Tenants";
import Payments from "./Pages/Payments/Payments";
import Maintenance from "./Pages/Maintenance/Maintenance";
import Settings from "./Pages/Settings/Settings";
import Home from "./Pages/Home/Home";
import HomeLayout from "./Layout/HomeLayout";

const router = createBrowserRouter([
  {
    path: "",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Home /> },
      { path: "auth", element: <AuthPage /> },
      { path: "auth/newpasskey", element: <ForgotPassword /> },
      { path: "auth/newpasskey/newpassword", element: <NewPassword /> },
      { path: "auth/setup", element: <Setup /> },
    ],
  },
  {
    path: "pms",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "properties", element: <Properties /> },
      { path: "tenants", element: <Tenants /> },
      { path: "payments", element: <Payments /> },
      { path: "maintenance", element: <Maintenance /> },
      { path: "settings", element: <Settings /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
