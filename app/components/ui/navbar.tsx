"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";
import { useEffect, useState } from "react";

interface NavbarClassName {
  className?: string;
}

const links = [
  {
    name: "Home",
    href: "/#home",
  },
  {
    name: "Definition",
    href: "/#definition",
  },
  {
    name: "Canva",
    href: "/#canva",
  },
  {
    name: "Scratch",
    href: "/#scratch",
  },
];

const Navbar: React.FC<NavbarClassName> = ({ className }) => {
  return (
    <>
      <NavbarMobile />
      <NavbarDesktop />
    </>
  );
};

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("home");

  useEffect(() => {
    setCurrentUrl(window.location.pathname + window.location.hash);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (href: string) => {
    setCurrentUrl(href);
    setIsOpen(false);
  };

  const menuVariants = {
    open: {
      y: 0,
      height: "auto",
      transition: {
        duration: 0.5,
      },
    },
    closed: {
      y: -500,
      height: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <nav className="z-20 fixed top-0 left-0 right-0 max-w-full h-fit block md:hidden bg-neutral-950 border-b border-gray-100">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <button
          onClick={toggleMenu}
          type="button"
          className="z-20 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <motion.div
          className="relative w-full md:block md:w-auto z-10"
          id="navbar-default"
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {links.map((link) => (
              <Link key={link.name} href={link.href} target="_blank">
                <button
                  onClick={() => handleLinkClick(link.name)}
                  className={clsx("block py-2 px-3 rounded md:p-0", {
                    "bg-blue-700 text-white md:bg-transparent md:text-blue-700":
                      currentUrl === link.name,
                    "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent":
                      currentUrl !== link.name,
                  })}
                >
                  {link.name}
                </button>
              </Link>
            ))}
          </ul>
          <div className="absolute w-full h-[150%]" onClick={toggleMenu}></div>
        </motion.div>
      </div>
    </nav>
  );
};

const NavbarDesktop = () => {
  const [currentUrl, setCurrentUrl] = useState("home");

  useEffect(() => {
    setCurrentUrl(window.location.pathname + window.location.hash);
  }, []);

  const handleLinkClick = (href: string) => {
    setCurrentUrl(href);
  };

  return (
    <nav className="bg-black/80 fixed top-0 left-0 right-0 w-full hidden md:block border-b border-white z-20">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="#">
          <Image
            src="/logo.png"
            className="h-16 w-16"
            alt="Musta hr Logo"
            width={50}
            height={50}
          />
        </Link>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            {links.map((link) => (
              <Link key={link.name} href={link.href}>
                <button
                  onClick={() => handleLinkClick(link.name)}
                  className={clsx(
                    "flex grow items-center justify-center rounded-md p-3 text-sm font-medium hover:text-blue-600 md:flex-none md:justify-start md:p-3",
                    {
                      "bg-blue-700 text-white md:bg-transparent md:text-blue-700 md:bg-white md:rounded":
                        currentUrl === link.name,
                      "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent":
                        currentUrl !== link.name,
                    }
                  )}
                >
                  {link.name}
                </button>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
