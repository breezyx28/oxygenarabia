import React, { lazy } from "react";
import { Outlet, useRoutes } from "react-router-dom";

import DashboardLayout from "../layouts/main";
import LoadingComponent from "@/components/loading/Loading";

export const IndexPage = lazy(() => import("../pages"));
export const About = lazy(() => import("../pages/about"));
export const Achievements = lazy(() => import("../pages/achievements"));
export const Contact = lazy(() => import("../pages/contact"));
export const Events = lazy(() => import("../pages/events"));
export const Projects = lazy(() => import("../pages/projects"));
export const Products = lazy(() => import("../pages/products"));
export const Services = lazy(() => import("../pages/services"));
export const Team = lazy(() => import("../pages/team"));

// ----------------------------------------------------------------------

export default function Router() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          {loading && <LoadingComponent />}
          <Outlet />
        </DashboardLayout>
      ),
      children: [
        { element: <IndexPage />, index: true },
        { path: "about", element: <About /> },
        { path: "achievements", element: <Achievements /> },
        { path: "contact", element: <Contact /> },
        { path: "events", element: <Events /> },
        { path: "projects", element: <Projects /> },
        { path: "products/:product", element: <Products /> },
        { path: "services", element: <Services /> },
        { path: "team", element: <Team /> },
      ],
    },
  ]);

  return routes;
}
