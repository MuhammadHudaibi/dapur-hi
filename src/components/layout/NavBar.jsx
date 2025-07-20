import React, { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import { siteConfig } from "../../data/siteConfig";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#menu", text: "Menu" },
    { href: "#katering", text: "Katering" },
    { href: "#testimoni", text: "Testimoni" },
    { href: "#tentang", text: "Tentang Kami" },
    { href: "#kontak", text: "Kontak" },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-6 py-4 shadow-sm bg-white/80 backdrop-blur-md">
      <a href="#" className="flex items-center space-x-2">
        <img
          src={siteConfig.logoUrl}
          alt={`Logo ${siteConfig.companyName}`}
          className="w-12 h-12"
        />
        <span className="text-xl font-bold">{siteConfig.companyName}</span>
      </a>

      <div className="hidden md:flex items-center gap-3">
        <ul className="flex items-center space-x-6 text-sm font-medium text-gray-800">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-orange-500 transition-colors"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-500 text-white font-semibold text-sm px-5 py-2.5 rounded-full shadow hover:bg-orange-600 transition"
        >
          Pesan Sekarang
        </a>
      </div>

      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <LuX size={28} /> : <LuMenu size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center py-8">
          <ul className="flex flex-col items-center space-y-6 text-base font-medium text-gray-800">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="hover:text-orange-500 transition-colors"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 bg-orange-500 text-white font-semibold text-sm px-8 py-3 rounded-full shadow hover:bg-orange-600 transition"
          >
            Pesan Sekarang
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
