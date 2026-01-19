import { createBrowserRouter } from "react-router-dom";
import SiteLayout from "../layout/SiteLayout";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import ServiceDetail from "../pages/ServiceDetail/ServiceDetail";
import Team from "../pages/Team/Team";
import Clients from "../pages/Clients/Clients";
import Contact from "../pages/Contact/Contact";

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
    ],
  },
]);
