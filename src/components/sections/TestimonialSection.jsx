import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";


const testimonials = [
  {
    image: "https://res.cloudinary.com/dh8gmlzth/image/upload/w_auto,f_auto/testi1_qyukx0.jpg",
    name: "Aulia Putri",
    title: "Pelayanan Cepat dan Ramah",
    quote:
      "Saya sangat terkesan dengan kecepatan pengiriman dan keramahan staf CateringKu. Makanannya selalu datang tepat waktu dan dalam kondisi sempurna.",
  },
  {
    image: "https://res.cloudinary.com/dh8gmlzth/image/upload/w_auto,f_auto/testi2_ymq3hc.jpg",
    name: "Budi Santoso",
    title: "Rasa Makanannya Juara!",
    quote:
      "Menu ayam bakar madunya benar-benar luar biasa. Bumbunya meresap sempurna dan rasanya otentik. Pasti akan pesan lagi untuk acara selanjutnya!",
  },
  {
    image: "https://res.cloudinary.com/dh8gmlzth/image/upload/w_auto,f_auto/testi3_lntpf8.jpg",
    name: "Citra Lestari",
    title: "Sangat Fleksibel dan Membantu",
    quote:
      "Tim DapurHi sangat membantu dalam menyesuaikan menu dengan budget kami. Prosesnya mudah dan hasilnya memuaskan semua tamu undangan.",
  },
];

const TestimonialSection = () => {
  return (
    <>
      <style>{`
        .testimonial-slider .swiper-pagination-progressbar {
          top: auto;
          bottom: 0;
          height: 3px;
          background: #e5e7eb; /* Warna dasar progress bar (abu-abu muda) */
        }
        .testimonial-slider .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
          background: #1f2937; /* Warna progress bar aktif (hitam/abu tua) */
          height: 3px;
        }
        .testimonial-slider .swiper-slide {
          padding-bottom: 2rem; /* Beri ruang di bawah untuk progress bar */
        }
      `}</style>

      <section id="testimoni" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Apa Kata Mereka
            </h2>
          </div>

          <Swiper
            className="testimonial-slider"
            modules={[Autoplay, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              type: "progressbar",
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                  <div className="md:w-3/5 text-center md:text-left">
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">{testimonial.name}</p>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {testimonial.title}
                    </h3>
                    <p className="mt-4 text-base text-gray-600">
                      {testimonial.quote}
                    </p>
                  </div>
                  <div className="md:w-2/5 flex justify-center">
                    <div className="w-64 h-64 rounded-2xl overflow-hidden bg-orange-200 shadow-lg">
                      <img
                        src={testimonial.image}
                        alt={`Testimoni dari ${testimonial.name}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default TestimonialSection;