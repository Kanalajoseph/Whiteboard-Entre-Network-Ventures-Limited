import { createBrowserRouter, Navigate } from "react-router-dom";
import SiteLayout from "../layout/SiteLayout";
import ProtectedRoute from "../components/ProtectedRoute";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import ServiceDetail from "../pages/ServiceDetail/ServiceDetail";
import Team from "../pages/Team/Team";
import Clients from "../pages/Clients/Clients";
import Contact from "../pages/Contact/Contact";
import Cars from "../pages/Cars/Cars";
import CarDetails from "../pages/Cars/CarDetails";
import Properties from "../pages/Properties/Properties";
import PropertyDetails from "../pages/Properties/PropertyDetails";
import Loans from "../pages/Loans/Loans";

// Admin
import AdminLogin from "../pages/Admin/AdminLogin";
import AdminLayout from "../pages/Admin/AdminLayout";
import AdminDashboard from "../pages/Admin/AdminDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SiteLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "services/:slug", element: <ServiceDetail /> },
      { path: "team", element: <Team /> },
      { path: "clients", element: <Clients /> },
      { path: "contact", element: <Contact /> },
      { path: "cars", element: <Cars /> },
      { path: "cars/:id", element: <CarDetails /> },
      { path: "properties", element: <Properties /> },
      { path: "properties/:id", element: <PropertyDetails /> },
      { path: "loans", element: <Loans /> },
    ],
  },
  {
    path: "/admin",
    children: [
      { index: true, element: <Navigate to="/admin/dashboard" replace /> },
      { path: "login", element: <AdminLogin /> },
      {
        path: "",
        element: (
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        ),
        children: [
          { path: "dashboard", element: <AdminDashboard /> },
          { path: "cars", element: <div className="text-center py-16"><h2 className="text-2xl font-bold">Cars Management - Coming Soon</h2></div> },
          { path: "properties", element: <div className="text-center py-16"><h2 className="text-2xl font-bold">Properties Management - Coming Soon</h2></div> },
          { path: "loans", element: <div className="text-center py-16"><h2 className="text-2xl font-bold">Loan Applications - Coming Soon</h2></div> },
          { path: "enquiries", element: <div className="text-center py-16"><h2 className="text-2xl font-bold">Enquiries - Coming Soon</h2></div> },
        ],
      },
    ],
  },
]);
