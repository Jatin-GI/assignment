"use client";
import Navigation from "@/pages/Navigation";
import Hero from "@/pages/Hero";
import Features from "@/pages/Features";
import Testimonials from "@/pages/Testimonials";
import Pricing from "@/pages/Pricing";
import About from "@/pages/About";
import Values from "@/pages/Values";
import Footer from "@/pages/Footer";
import { useThemeStore } from "@/stores/themeStore";

export default function Home() {
  const theme = useThemeStore((state) => state.theme);
  return (
    <div className={`"min-h-screen bg-theme text-theme ${theme}`}>
      <Navigation />
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <About />
      {/* <Values /> */}
      <Footer />
    </div>
  );
}
