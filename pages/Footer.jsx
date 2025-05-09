import { useThemeStore } from "@/stores/themeStore";
import React from "react";

const Footer = () => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <footer
      className={`py-16 bg-[var(--bg-light)] font-body text-[var(--text-dark)] border-t border-[var(--border-color)]`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-3xl font-bold mb-4 text-[var(--text)]">
              Medi<span className="text-[var(--primary)]">Flow</span>
            </h3>
            <p className="text-lg text-[var(--text-light)] opacity-80">
              AI-powered front office solution for modern healthcare providers.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Product</h4>
            <ul className="space-y-3 text-[var(--text-light)] opacity-80">
              <li>
                <a
                  href="#features"
                  className="transition-all duration-300 hover:text-[var(--primary)]"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="transition-all duration-300 hover:text-[var(--primary)]"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#integrations"
                  className="transition-all duration-300 hover:text-[var(--primary)]"
                >
                  Integrations
                </a>
              </li>
              <li>
                <a
                  href="#updates"
                  className="transition-all duration-300 hover:text-[var(--primary)]"
                >
                  Updates
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-3 text-[var(--text-light)] opacity-80">
              <li>
                <a
                  href="#documentation"
                  className="transition-all duration-300 hover:text-[var(--primary)]"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#support"
                  className="transition-all duration-300 hover:text-[var(--primary)]"
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  href="#casestudies"
                  className="transition-all duration-300 hover:text-[var(--primary)]"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="transition-all duration-300 hover:text-[var(--primary)]"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-[var(--text-light)] opacity-80">
              <li>
                <a
                  href="mailto:hello@mediflow.ai"
                  className="hover:text-[var(--primary)]"
                >
                  hello@mediflow.ai
                </a>
              </li>
              <li>
                <a
                  href="tel:+18001234567"
                  className="hover:text-[var(--primary)]"
                >
                  +1 (800) 123-4567
                </a>
              </li>
              <li>
                <span>123 Healthcare Drive, San Francisco, CA 94107</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-[var(--border-color)] text-center text-[var(--text-light)] opacity-60">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} MediFlow AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
