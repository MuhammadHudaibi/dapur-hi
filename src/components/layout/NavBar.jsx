import React from "react";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-sm bg-white">
      <div className="flex items-center space-x-2">
        <img src="/src/assets/logo.png" alt="Logo" className="w-15 h-15" />
        <span className="text-lg font-semibold text-gray-900">DapurHi</span>
      </div>

      <div className="flex  gap-3">
        <ul className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-800">
        
          <li>
            <a href="#menu" className="hover:text-orange-500">
              Menu
            </a>
          </li>
          <li>
            <a href="#katering" className="hover:text-orange-500">
              Katering
            </a>
          </li>
          <li>
            <a href="#testimoni" className="hover:text-orange-500">
              Testimoni
            </a>
          </li>
          <li>
            <a href="#tentang" className="hover:text-orange-500">
              Tentang Kami
            </a>
          </li>
          <li>
            <a href="#kontak" className="hover:text-orange-500">
              Kontak
            </a>
          </li>
        </ul>
        <a
          href="#pesan"
          className="bg-orange-500 text-white font-semibold text-sm px-5 py-2 rounded-full shadow hover:bg-orange-600 transition"
        >
          Pesan Sekarang
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
