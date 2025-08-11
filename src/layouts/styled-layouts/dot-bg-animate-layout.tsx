import { HeroHighlight } from "../../components/ui/hero-highlight";

export function DotBackgroundAnimateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HeroHighlight>{children}</HeroHighlight>;
}
