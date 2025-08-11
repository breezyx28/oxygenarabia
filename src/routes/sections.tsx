import { lazy, Suspense } from "react";
import { Outlet, useRoutes } from "react-router-dom";

import DashboardLayout from "../layouts/main";

export const IndexPage = lazy(() => import("../pages"));
export const About = lazy(() => import("../pages/about"));
export const Achievements = lazy(() => import("../pages/achievements"));
export const Contact = lazy(() => import("../pages/contact"));
export const Events = lazy(() => import("../pages/events"));
export const History = lazy(() => import("../pages/history"));
export const Products = lazy(() => import("../pages/products"));
export const Services = lazy(() => import("../pages/services"));
export const Team = lazy(() => import("../pages/team"));

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <IndexPage />, index: true },
        { path: "about", element: <About /> },
        { path: "achievements", element: <Achievements /> },
        { path: "contact", element: <Contact /> },
        { path: "events", element: <Events /> },
        { path: "history", element: <History /> },
        { path: "products/:product", element: <Products /> },
        { path: "services", element: <Services /> },
        { path: "team", element: <Team /> },
      ],
    },
  ]);

  return routes;
}
