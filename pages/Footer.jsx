import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                Medi<span className="text-[#63559a]">Flow</span>
              </h3>
              <p className="text-gray-400">
                AI-powered front office solution for modern healthcare
                providers.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#features" className="hover:text-[#63559a]">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-[#63559a]">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#63559a]">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#63559a]">
                    Updates
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-[#63559a]">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#63559a]">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#63559a]">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#63559a]">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>hello@mediflow.ai</li>
                <li>+1 (800) 123-4567</li>
                <li>123 Healthcare Drive, San Francisco, CA 94107</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} MediFlow AI. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
