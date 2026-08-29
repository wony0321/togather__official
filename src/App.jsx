import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "@/layouts/RootLayout";
import AdminLayout from "@/layouts/AdminLayout";
import PrivateRoute from "@/router/PrivateRoute";

import Home from "@/pages/Home/Home";
import Service from "@/pages/Service/Service";
import Pricing from "@/pages/Pricing/Pricing";
import Team from "@/pages/Team/Team";
import Contact from "@/pages/Contact/Contact";

import AdminLogin from "@/pages/admin/Login";
import Dashboard from "@/pages/admin/Dashboard";
import Inquiries from "@/pages/admin/Inquiries";
import Clients from "@/pages/admin/Clients";
import TeamManage from "@/pages/admin/TeamManage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "service", element: <Service /> },
      { path: "pricing", element: <Pricing /> },
      { path: "team", element: <Team /> },
      { path: "contact", element: <Contact /> },
    ],
  },
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
  {
    path: "/admin",
    element: (
      <PrivateRoute>
        <AdminLayout />
      </PrivateRoute>
    ),
    children: [
      { index: true, element: <Dashboard /> },
      { path: "inquiries", element: <Inquiries /> },
      { path: "clients", element: <Clients /> },
      { path: "team", element: <TeamManage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
