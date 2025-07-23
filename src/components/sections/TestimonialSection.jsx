import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { testimonials } from "../../data/testimonialData.js";
import useAnimateOnScroll from "../../hooks/useAnimateOnScroll.js";

const TestimonialSection = () => {
  const sectionRef = useAnimateOnScroll();

  return (
    <>
      <style>{`
        .testimonial-slider .swiper-pagination-progressbar {
          top: auto;
          bottom: 0;
          height: 3px;
          background: #e5e7eb;
        }
        .testimonial-slider .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
          background: #f97316;
          height: 3px;
        }
        .testimonial-slider .swiper-slide {
          padding-bottom: 2rem;
        }
      `}</style>

      <section
        id="testimoni"
        ref={sectionRef}
        className="fade-in-section py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-poppins">
              Apa Kata Pelanggan Kami
            </h2>
          </div>

          {testimonials && testimonials.length > 0 ? (
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
                  <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
                    <div className="md:w-3/5 text-center md:text-left">
                      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                        {testimonial.name}
                      </p>
                      <h3 className="text-2xl font-bold text-gray-900 font-poppins">
                        “{testimonial.title}”
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
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-500">
                Jadilah yang pertama memberikan testimoni!
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default TestimonialSection;
