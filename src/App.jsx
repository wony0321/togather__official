import { createBrowserRouter, RouterProvider, Navigate } from "react-router";
import RootLayout from "@/layouts/RootLayout";
import AdminLayout from "@/layouts/AdminLayout";
import PrivateRoute from "@/router/PrivateRoute";

import Home from "@/pages/Home/Home";

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
      // 과거 개별 페이지 경로는 원페이지 내 해당 섹션으로 리다이렉트
      { path: "service", element: <Navigate to="/#service" replace /> },
      { path: "pricing", element: <Navigate to="/#pricing" replace /> },
      { path: "guide", element: <Navigate to="/#guide" replace /> },
      { path: "team", element: <Navigate to="/#team" replace /> },
      { path: "contact", element: <Navigate to="/#contact" replace /> },
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
