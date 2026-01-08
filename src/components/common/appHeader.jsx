"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "./button";
import IconifyClient from "./IconifyClient";
import IconArrowCircleUpright from "../vectors/arrowCircleUpright";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="rounded-full px-6 py-5 glass-xl fixed start-0 end-0 top-5 z-30 mx-5 my-2 flex justify-between items-center">
        <div className="w-full flex justify-between align-middle items-center">
          <Image src="/logo.svg" alt="Logo" width={40} height={40} />
          <nav className="items-center hidden lg:flex">
            <ul>
              <li className="inline-block mx-4 cursor-pointer">Features</li>
              <li className="inline-block mx-4 cursor-pointer">Community</li>
              <li className="inline-block mx-4 cursor-pointer">Integration</li>
              <li className="inline-block mx-4 cursor-pointer">Pricing</li>
              <li className="inline-block mx-4 cursor-pointer">Contact</li>
            </ul>
          </nav>
          <Button text="Book Now" icon={<IconArrowCircleUpright size={24} />} />
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-neutral-800 transition-colors"
            aria-label="Toggle menu"
          >
            <Image src="/hamburger.svg" alt="Menu" width={24} height={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="fixed top-40 left-5 right-5 z-40 bg-neutral-900 rounded-2xl glass-xl border border-neutral-700 lg:hidden">
          <nav className="px-6 py-4">
            <ul className="space-y-4">
              <li
                className="cursor-pointer hover:text-brand-300 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </li>
              <li
                className="cursor-pointer hover:text-brand-300 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Community
              </li>
              <li
                className="cursor-pointer hover:text-brand-300 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Integration
              </li>
              <li
                className="cursor-pointer hover:text-brand-300 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </li>
              <li
                className="cursor-pointer hover:text-brand-300 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </li>
            </ul>
          </nav>
          <div className="flex justify-center pb-6">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-neutral-700 transition-colors border border-neutral-600"
              aria-label="Close menu"
            >
              <IconifyClient
                icon="mdi:close"
                className="text-neutral-300 hover:text-white"
              />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
