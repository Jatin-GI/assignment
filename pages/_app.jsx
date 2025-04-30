"use client";
import "../app/globals.css";
import { useEffect } from "react";
import { useThemeStore } from "../stores/themeStore";

function MyApp({ Component, pageProps }) {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("theme-dark", "theme-ocean", "theme-sunset");
    if (theme) root.classList.add(theme);
  }, [theme]);

  return <Component {...pageProps} />;
}

export default MyApp;
