"use client";
import Navigation from "@/pages/Navigation";
import Hero from "@/pages/Hero";
import Features from "@/pages/Features";
import Testimonials from "@/pages/Testimonials";
import Pricing from "@/pages/Pricing";
import About from "@/pages/About";
import Values from "@/pages/Values";
import Footer from "@/pages/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#01052f] text-white">
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
