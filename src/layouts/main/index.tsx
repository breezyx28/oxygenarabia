import { Suspense } from "react";
import Footer from "./Footer";
import Loading from "../../pages/loading";
import UpperNav from "./UpperNav";

// ----------------------------------------------------------------------

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <UpperNav />
        {children}
        <Footer />
      </Suspense>
    </>
  );
}
