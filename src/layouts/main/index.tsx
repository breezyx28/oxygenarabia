import Footer from "./Footer";
import UpperNav from "./UpperNav";

// ----------------------------------------------------------------------

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-[calc(100vw-17px)] mx-auto flex flex-col items-center overflow-x-hidden">
      <div className="max-w-[1800px] w-full overflow-x-hidden">
        <UpperNav />
        {children}
        <Footer />
      </div>
    </div>
  );
}
