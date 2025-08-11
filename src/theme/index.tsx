import React from "react";

import { useTranslation } from "react-i18next";
// import LangCacheProvider from "./cacheProvider";

// ----------------------------------------------------------------------

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { i18n } = useTranslation();
  //   const dir = i18n.dir();

  document.documentElement.dir = i18n.dir();

  return <>{children}</>;
  //   return <LangCacheProvider>{children}</LangCacheProvider>;
}
