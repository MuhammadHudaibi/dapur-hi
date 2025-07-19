import React from "react";

const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-6 py-4 shadow-sm bg-white">
      <div className="flex items-center space-x-2">
        <img
          src="https://res.cloudinary.com/dh8gmlzth/image/upload/w_auto,f_auto/logo_imqkxa.png"
          alt="Logo"
          className="w-12 h-12"
        />
        <span className="text-xl font-bold">DapurHi</span>
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
          href="https://wa.me/6285155029406?text=Halo%20DapurHi%2C%20saya%20tertarik%20untuk%20memesan%20catering.%20Bisa%20minta%20informasi%20lebih%20lanjut%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-500 text-white font-semibold text-sm px-5 py-2 rounded-full shadow hover:bg-orange-600 transition"
        >
          Pesan Sekarang
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
