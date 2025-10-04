import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface AdminNavProps {
  children: React.ReactNode;
}

const AdminNav = ({ children }: AdminNavProps) => {
  const location = useLocation();

  const navItems = [
    { path: "/admin/blog", label: "Blog Posts" },
    { path: "/admin/blog/create", label: "Create Post" },
    { path: "/admin/blog/test", label: "Test API" },
  ];

  return (
    <>
      <nav className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-8">Admin Panel</h2>
        <div className="space-y-2">
          {navItems.map((item) => (
            <Button
              key={item.path}
              asChild
              variant={location.pathname === item.path ? "default" : "ghost"}
              size="sm"
              className="w-full justify-start"
            >
              <Link to={item.path}>{item.label}</Link>
            </Button>
          ))}
        </div>
        <div className="absolute bottom-6 left-6 right-6">
          <Button
            variant="outline"
            size="sm"
            className="w-full"
            onClick={() => {
              localStorage.removeItem("admin_auth");
              window.location.reload();
            }}
          >
            Logout
          </Button>
        </div>
      </nav>
      <div className="ml-64">
        {children}
      </div>
    </>
  );
};

export default AdminNav;