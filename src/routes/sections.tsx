import React, { lazy } from "react";
import { Outlet, useRoutes } from "react-router-dom";

import DashboardLayout from "../layouts/main";
import LoadingComponent from "@/components/loading/Loading";

export const IndexPage = lazy(() => import("../pages"));
export const About = lazy(() => import("../pages/about"));
export const Achievements = lazy(() => import("../pages/achievements"));
export const Contact = lazy(() => import("../pages/contact"));
export const Career = lazy(() => import("../pages/career"));
export const Blog = lazy(() => import("../pages/blog"));
export const Post = lazy(() => import("../pages/blog/post"));
export const AdminBlogList = lazy(() => import("../pages/admin/blog"));
export const CreateBlogPost = lazy(() => import("../pages/admin/blog/create"));
export const EditBlogPost = lazy(() => import("../pages/admin/blog/edit"));
// export const TestBlogPost = lazy(() => import("../pages/admin/blog/test"));
import AdminAuth from "../components/auth/AdminAuth";
export const Events = lazy(() => import("../pages/events"));
export const Projects = lazy(() => import("../pages/projects"));
export const Products = lazy(() => import("../pages/products"));
export const Services = lazy(() => import("../pages/services"));
export const Team = lazy(() => import("../pages/team"));
export const PrivacyPolicy = lazy(() => import("../pages/legal/privacy-policy"));
export const TermsOfUse = lazy(() => import("../pages/legal/terms-of-use"));
export const CookiePolicy = lazy(() => import("../pages/legal/cookie-policy"));

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
        { path: "careers", element: <Career /> },
        { path: "blog", element: <Blog /> },
        { path: "blog/:slug", element: <Post /> },
        { path: "privacy-policy", element: <PrivacyPolicy /> },
        { path: "terms-of-use", element: <TermsOfUse /> },
        { path: "cookie-policy", element: <CookiePolicy /> },
        {
          path: "admin/blog",
          element: (
            <AdminAuth>
              <AdminBlogList />
            </AdminAuth>
          ),
        },
        {
          path: "admin/blog/create",
          element: (
            <AdminAuth>
              <CreateBlogPost />
            </AdminAuth>
          ),
        },
        {
          path: "admin/blog/edit/:id",
          element: (
            <AdminAuth>
              <EditBlogPost />
            </AdminAuth>
          ),
        },
        // { path: "admin/blog/test", element: <AdminAuth><TestBlogPost /></AdminAuth> },
      ],
    },
  ]);

  return routes;
}
