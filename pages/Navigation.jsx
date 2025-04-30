"use client";
import { Button } from "@/components/ui/button";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import { useThemeStore } from "@/stores/themeStore";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Head from "next/head";
import React, { useState } from "react";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = useThemeStore((state) => state.theme);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <header
        className={`fixed w-full z-50 ${theme} bg-[var(--bg)] bg-opacity-80 backdrop-blur-md font-body`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <button onClick={scrollToTop} className="cursor-pointer">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold font-head text-[var(--text)]"
            >
              Medi<span className="text-[var(--primary)]">Flow</span>
            </motion.div>
          </button>
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-6">
            {["Features", "Pricing", "Testimonials", "About"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[var(--text)] hover:text-[var(--primary)] transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                {item}
              </motion.a>
            ))}
            <ThemeSwitcher />
            {/* <Button
              variant="outline"
              className="border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--accent)] hover:bg-opacity-30"
            >
              Log In
            </Button> */}
            <Button className="bg-[var(--primary)] text-white hover:opacity-80">
              Log In
            </Button>
          </nav>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[var(--text)]"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden bg-[var(--bg)] border-t border-[var(--accent)]"
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
                  className="text-[var(--text)] hover:text-[var(--primary)] py-2 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <ThemeSwitcher />
              <div className="flex flex-col gap-2 pt-2">
                {/* <Button
                  variant="outline"
                  className="text-[var(--primary)] border-[var(--primary)] hover:bg-[var(--accent)] hover:bg-opacity-20 w-full"
                >
                  Log In
                </Button> */}

                <Button className="bg-[var(--primary)] text-white hover:opacity-80 w-full">
                  Log In
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
