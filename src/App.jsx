import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './Pages/Home/HomePage'
import RootLayout from "./Layout/RootLayout";
import ErrorPage from "./Pages//Error/ErrorPage";
import AuthPage from "./Pages/Auth/AuthPage";
import ForgotPassword from "./Pages/Forgot Password/ForgotPassword";
import "./App.css";
import NewPassword from "./Pages/New Password/NewPassword";
import Setup from "./Pages/Setup/Setup";

const router = createBrowserRouter([
  {path: '', element: <RootLayout/>, errorElement: <ErrorPage/>, children: [
    {path:'', element: <HomePage/>},
    {path:'properties', element: <h1>properties</h1>},
    {path:'tenants', element: <h1>tenants</h1>},
    {path:'payments', element: <h1>payments</h1>},
    {path:'maintenance', element: <h1>maintenance</h1>},
    {path:'settings', element: <h1>settings</h1>},
  ] },
  {path:'auth', element: <AuthPage/>},
  {path:'auth/newpasskey', element: <ForgotPassword/>},
  {path:'auth/newpasskey/newpassword', element: <NewPassword/> },
  {path:'auth/setup', element: <Setup/> },
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
