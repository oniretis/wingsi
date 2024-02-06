"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.section
      className="relative overflow-hidden bg-neutral-100"
      initial={{ opacity: 0 }} // Initial opacity set to 0
      animate={{ opacity: 1 }} // Animate opacity to 1 when the component mounts
    >
      <section className="relative  overflow-hidden">
        <nav>
          <div className="container mx-auto px-4 md:px-12">
            <div className="flex h-24 items-center">
              <Link className="inline-block" href="/">
                <h2 className="font-extrabold text-lg text-orange-500">
                  Wingsi
                </h2>
              </Link>
              <button
                className="lg:hidden navbar-burger py-1 ml-auto"
                onClick={toggleMenu}
              >
                <svg
                  width="44"
                  height="16"
                  viewBox="0 0 44 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="44" height="2" rx="1" fill="black" />
                  <rect y="14" width="44" height="2" rx="1" fill="black" />
                </svg>
              </button>
              <div
                className={`${
                  isMenuOpen ? "block" : "hidden"
                } lg:flex ml-auto mr-12 items-center font-extrabold text-sm`}
              >
                <Link
                  className="inline-block font-medium hover:text-orange-500 mr-10"
                  href="/#aboutus"
                >
                  About Us
                </Link>

                <Link
                  className="inline-block font-medium hover:text-orange-500 mr-10"
                  href="/#work"
                >
                  Our Work
                </Link>
                <Link
                  className="inline-block font-medium hover:text-orange-500"
                  href="/#blog"
                >
                  Updates
                </Link>
              </div>
              <Link
                className="group hidden lg:inline-flex py-4 px-8 items-center justify-center leading-none font-medium text-white bg-orange-500 hover:text-orange-500 border border-white rounded-lg hover:bg-white hover:border hover:border-orange-500 transition duration-200"
                href="/#contact"
              >
                <span className="mr-2">Contact</span>
                <span className="group-hover:rotate-45 transform transition duration-100">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 1L1 9"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 8.33571V1H1.66429"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </nav>

        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-md z-50`}
        >
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-50"></div>
          <nav className="relative flex flex-col py-6 px-10 w-full h-full bg-white overflow-y-auto">
            <div className="flex mb-auto items-center">
              <a className="inline-block mr-auto" href="/">
                <h2 className="font-extrabold text-lg text-orange-500">
                  Wingsi
                </h2>
              </a>
              <a className="navbar-close" href="#" onClick={closeMenu}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6M6 6L18 18"
                    stroke="#111827"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
            <div className="py-12 mb-auto">
              <ul className="flex-col">
                <li className="mb-6">
                  <Link className="inline-block text-black" href="/#aboutus">
                    About Us
                  </Link>
                </li>

                <li className="mb-6">
                  <Link className="inline-block text-black" href="/#work">
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link className="inline-block text-black" href="/#blog">
                    Updates
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <Link
                className="block mb-3 px-4 py-4 text-center font-medium text-black hover:text-white border border-black hover:bg-black rounded-full transition duration-200"
                href="/#contact"
              >
                Contact
              </Link>
              {/* <a
              className="block px-4 py-4 text-center font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200"
              href="#"
            >
              Sign in
            </a> */}
            </div>
          </nav>
        </div>
      </section>
    </motion.section>
  );
};

export default NavBar;
