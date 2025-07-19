import React from "react";

import { FaInstagram, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { LuMapPin, LuMail, LuPhone } from "react-icons/lu";

const Footer = () => {
  return (
    <footer id="kontak" className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/src/assets/logo.png" alt="Logo" className="w-10 h-10" />
              <span className="text-xl font-bold text-white">DapurHi</span>
            </div>
            <p className="text-sm">
              Solusi makanan praktis dan lezat untuk setiap acaramu. Dari makan siang kantor hingga pesta keluarga, kami siap melayani.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/hidapur?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="hover:text-orange-500 transition-colors duration-300 transform hover:scale-110">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors duration-300 transform hover:scale-110">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors duration-300 transform hover:scale-110">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors duration-300 transform hover:scale-110">
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          <div className="md:justify-self-center">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Navigasi</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#menu" className="hover:text-orange-500 transition-colors">Menu</a></li>
              <li><a href="#katering" className="hover:text-orange-500 transition-colors">Katering</a></li>
              <li><a href="#testimoni" className="hover:text-orange-500 transition-colors">Testimoni</a></li>
              <li><a href="#tentang" className="hover:text-orange-500 transition-colors">Tentang Kami</a></li>
            </ul>
          </div>

          <div className="md:justify-self-center">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Hubungi Kami</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start">
                <LuMapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <span>Jl. Inovasi No. 123, Kota Pendidikan, Indonesia</span>
              </li>
              <li className="flex items-center">
                <LuMail className="w-5 h-5 mr-3 flex-shrink-0" />
                <a href="mailto:kontak@dapurhi.com" className="hover:text-orange-500 transition-colors">kontak@dapurhi.com</a>
              </li>
              <li className="flex items-center">
                <LuPhone className="w-5 h-5 mr-3 flex-shrink-0" />
                <a href="tel:+6281234567890" className="hover:text-orange-500 transition-colors">+62 812 3456 7890</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Jam Operasional</h3>
            <div className="mt-4 space-y-2">
              <p>Senin - Jumat: 09:00 - 21:00</p>
              <p>Sabtu - Minggu: 09:00 - 20:00</p>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm">
          <p>© {new Date().getFullYear()} DapurHi. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;