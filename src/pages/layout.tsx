import UpperNav from "../components/UpperNav";
import "./globals.css";
import Footer from "./sections/Footer";
import React, { Suspense } from "react";
import Loading from "./loading";

export const metadata = {
  title: "Oxygen Technology Co.",
  description:
    "Oxygen Technology Co., Ltd., a company engaged in information technology and telecommunications services (ICT) Industry.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body dir="ltr" className="overflow-x-hidden bg-gradient max-w-[1800px]">
        <Suspense fallback={<Loading />}>
          <UpperNav />
          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
