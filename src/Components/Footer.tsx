// src/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="text-center sm:text-left">
          <p className="text-sm">&copy; 2024 Brave SparKids. All rights reserved.</p>
        </div>

        {/* Center Section */}
        <div className="my-2 sm:my-0">
          <a
            href="#"
            className="text-gray-400 hover:text-white mx-2"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white mx-2"
          >
            Terms of Service
          </a>
        </div>

        {/* Right Section */}
        <div className="text-center sm:text-right">
          <p className="text-sm">
            Follow us:
            <a href="#" className="text-gray-400 hover:text-white mx-2">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-white mx-2">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white mx-2">LinkedIn</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
