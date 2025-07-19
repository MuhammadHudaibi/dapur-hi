import React from "react";
import FeatureCard from "../common/FeatureCard.jsx";

import {
  LuLeaf,
  LuClock,
  LuUsers,
  LuChefHat,
  LuTruck,
  LuWallet,
} from "react-icons/lu";

const ourValues = [
  {
    icon: LuLeaf,
    title: "Kualitas Bahan",
    description:
      "Kami hanya menggunakan bahan-bahan segar dan berkualitas tinggi untuk setiap hidangan.",
  },
  {
    icon: LuClock,
    title: "Ketepatan Waktu",
    description:
      "Kami selalu berusaha untuk mengirimkan pesanan tepat waktu, sesuai dengan jadwal yang disepakati.",
  },
  {
    icon: LuUsers,
    title: "Kepuasan Pelanggan",
    description:
      "Kepuasan pelanggan adalah prioritas utama kami. Kami selalu siap menerima masukan dan meningkatkan layanan kami.",
  },
];

const whyChooseUs = [
  {
    icon: LuChefHat,
    title: "Koki Berpengalaman",
    description:
      "Tim koki kami memiliki pengalaman bertahun-tahun dalam menyajikan hidangan lezat dan berkualitas.",
  },
  {
    icon: LuTruck,
    title: "Pengiriman Cepat",
    description:
      "Kami memiliki sistem pengiriman yang efisien untuk memastikan makanan sampai dengan cepat dan segar.",
  },
  {
    icon: LuWallet,
    title: "Harga Terjangkau",
    description:
      "Kami menawarkan harga yang kompetitif tanpa mengorbankan kualitas makanan dan layanan.",
  },
];

const AboutSection = () => {
  return (
    <section id="tentang" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-20">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Tentang Kami
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            DapurHi adalah bisnis keluarga yang berdedikasi untuk menyediakan
            makanan lezat dan layanan katering yang andal di sekitar Telkom
            University. Kami percaya bahwa makanan yang baik adalah kunci
            kebahagiaan, dan kami berusaha untuk menghadirkan pengalaman kuliner
            yang tak terlupakan bagi setiap pelanggan.
          </p>
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
            Nilai-Nilai Kami
          </h3>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {ourValues.map((value) => (
              <FeatureCard
                key={value.title}
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
            Mengapa Memilih Kami?
          </h3>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((reason) => (
              <FeatureCard
                key={reason.title}
                icon={reason.icon}
                title={reason.title}
                description={reason.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
