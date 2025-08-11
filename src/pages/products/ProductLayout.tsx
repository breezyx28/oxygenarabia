import ProductHero from "./ProductHero";

// export const metadata = {
//   title: "Oxygen Technology Co.",
//   description:
//     "Oxygen Technology Co., Ltd., a company engaged in information technology and telecommunications services (ICT) Industry.",
// };

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto w-auto h-auto">
      <ProductHero />
      {children}
    </main>
  );
}
