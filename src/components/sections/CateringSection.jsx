import React from "react";
import FeatureCard from "../common/FeatureCard.jsx";
import { LuClock, LuUsers, LuTruck } from "react-icons/lu";

const features = [
  {
    icon: LuTruck,
    title: "Pengiriman Tepat Waktu",
    description:
      "Kami menjamin pengiriman makanan tepat waktu sesuai jadwal acara Anda.",
  },
  {
    icon: LuClock,
    title: "Menu Fleksibel",
    description:
      "Pilih menu sesuai selera dan anggaran Anda. Kami siap membantu menyesuaikan paket terbaik.",
  },
  {
    icon: LuUsers,
    title: "Porsi Sesuai Jaminan",
    description:
      "Porsi makanan dijamin cukup dan memuaskan.",
  },
];

const CateringSection = () => {
  return (
    <section id="katering" className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-800">
            Promosi Paket Catering
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden mb-24">
          <img
            src="https://res.cloudinary.com/dh8gmlzth/image/upload/v1752931294/catering_ay5j64.jpg"
            alt="Promosi paket katering nasi box DapurHi"
            className="w-full md:w-1/2 h-64 md:h-auto object-cover"
            loading="lazy"
          />
          <div className="p-8 flex-1">
            <h3 className="text-xl font-bold text-gray-900">
              Paket Catering Mulai dari 15rb
            </h3>
            <p className="mt-2 text-gray-600">
              Harga terjangkau untuk semua acara kampus. Nikmati hidangan lezat
              dengan harga mulai dari 15rb per orang. Cocok untuk acara kecil
              hingga besar.
            </p>
            <a
              href="https://wa.me/6285155029406?text=Halo%20DapurHi%2C%20saya%20tertarik%20untuk%20memesan%20catering.%20Bisa%20minta%20informasi%20lebih%20lanjut%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-orange-500 text-white font-semibold text-sm px-5 py-2 rounded-full shadow hover:bg-orange-600 transition"
            >
              Pesan Sekarang
            </a>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-lg font-semibold text-orange-500">
            Mengapa Memilih DapurHi?
          </h3>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            Layanan Catering Terbaik di Bandung
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Kami menyediakan layanan catering yang handal dan berkualitas untuk
            memenuhi kebutuhan acara kampus Anda.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <div className="mt-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Siap Mengadakan Acara?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Jangan biarkan urusan konsumsi merepotkan. Biarkan kami yang
            mengurusnya!
          </p>
          <a
            href="#kontak"
            className="inline-block mt-6 bg-orange-500 text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:bg-orange-600 transition-transform transform hover:scale-105"
          >
            Hubungi Kami Sekarang
          </a>
        </div>
      </div>
    </section>
  );
};

export default CateringSection;
