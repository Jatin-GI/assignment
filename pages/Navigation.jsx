"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Head from "next/head";
import React, { useState } from "react";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <Head>
        <title>MediFlow AI | Healthcare Front Office Solution</title>
        <meta
          name="description"
          content="AI-powered front office solution for healthcare providers"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="fixed w-full z-50 bg-[#01052f] bg-opacity-80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-2xl font-bold text-white">
                Medi<span className="text-[#63559a]">Flow</span>
              </span>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {["Features", "Pricing", "Testimonials", "About"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-[#63559a] transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                {item}
              </motion.a>
            ))}
            <Button
              variant="outline"
              className="text-black hover:scale-105 transition-all cursor-pointer border-white hover:bg-white hover:bg-opacity-10"
            >
              Log In
            </Button>
            <Button className="bg-[#63559a] hover:bg-opacity-80  hover:scale-105 transition-all cursor-pointer">
              Get Started
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden bg-[#01052f] border-t border-gray-800"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {[
                "Features",
                "Pricing",
                "Testimonials",
                "About",
                "FAQ",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white hover:text-[#63559a] py-2 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-2">
                <Button
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:bg-opacity-10 w-full"
                >
                  Log In
                </Button>
                <Button className="bg-[#63559a] hover:bg-opacity-80 w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </header>
    </>
  );
};

export default Navigation;
