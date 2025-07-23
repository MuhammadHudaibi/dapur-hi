import React from "react";

const HeroSection = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="relative max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-lg">
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dh8gmlzth/image/upload/f_auto,q_auto:eco,w_1000/hero-bg_x9so8b.jpg"
            alt="Hidangan lezat dari DapurHi"
            className="w-full h-full object-cover"
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>

        <div className="relative flex flex-col items-center justify-center h-[500px] text-center text-white px-4 sm:px-6 md:px-12">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-normal tracking-tight font-poppins">
            DapurHi: Solusi Makanan <br className="hidden sm:block" /> Praktis dan Lezat
          </h1>

          <p className="mt-4 max-w-2xl text-sm sm:text-base md:text-lg text-gray-200">
            Nikmati hidangan berkualitas tinggi, disiapkan dengan bahan segar
            dan cita rasa autentik, langsung ke pintu Anda. Kami melayani
            berbagai acara, mulai dari makan siang kantor hingga pesta keluarga.
          </p>

          <a
            href="#menu"
            className="mt-8 bg-transparent border-2 border-orange-500 text-white font-semibold text-sm sm:text-base px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-md hover:bg-orange-500 hover:border-orange-500 transition-colors duration-300"
          >
            Lihat Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;