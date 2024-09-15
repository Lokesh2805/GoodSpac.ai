import React from "react";
import Logo from "../assets/Logo.svg";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useState, useEffect } from "react";
function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <header
      className={`bg-white sticky transition duration-1000 z-20 mx-auto md:px-16 flex justify-between px-6 md:py-4 items-center ${
        visible ? "top-0" : ""
      }  `}
    >
      <div className="flex gap-10">
        <a href="/">
          <img
            src={Logo}
            alt="goodSpace"
            className="w-24 h-24 md:w-full md:h-full"
          />
        </a>
        <div className="lg:flex hidden lg:visible">
          <Menu as="div" className="relative inline-block text-center">
            <div>
              <MenuButton className="inline-flex w-28 justify-center gap-x-1.5 bg-inherit px-3 py-2 text-sm  text-[#626a72]">
                Company
                <ChevronDownIcon
                  aria-hidden="true"
                  className="-mr-1 h-5 w-5 text-gray-400"
                />
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-full origin-top-right bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-[#626a72] data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                    About Us
                  </a>
                </MenuItem>
                <hr class="h-px bg-gray-200 border-0"></hr>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-[#626a72] data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                    Our Team
                  </a>
                </MenuItem>
                <hr class="h-px bg-gray-200 border-0"></hr>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-[#626a72] data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                    Careers
                  </a>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
          <div className="inline-flex  justify-center bg-inherit px-3 py-2 text-sm  text-[#626a72]">
            Pricing
          </div>
        </div>
      </div>
      <div className="lg:flex gap-3 hidden lg:visible">
        <button className=" bg-transparent hover:bg-[#297bca] text-sm text-[#297bca]  hover:text-white py-3 px-6 border border-[#297bca] hover:border-transparent rounded">
          Book Demo
        </button>
        <button className="bg-transparent hover:bg-[#297bca] text-sm text-[#297bca] hover:text-white py-3 px-6 border border-[#297bca] hover:border-transparent rounded">
          Login/ Signup
        </button>
        <button className="flex justify-center items-center gap-1 bg-[#297bca]  text-white py-3 px-6 border border-[#297bca] hover:bg-white hover:text-[#297bca] rounded text-sm">
          Looking for a job?
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </button>
      </div>
      <a href="#" className="lg:hidden text-sm text-[#237bca]">
        Looking for work?
      </a>
    </header>
  );
}

export default Header;
