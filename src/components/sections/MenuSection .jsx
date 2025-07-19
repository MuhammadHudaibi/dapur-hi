import React from "react";
import MenuCard from "../common/MenuCard.jsx";

const menuItems = [
  {
    image:
      "https://i2.wp.com/resepkoki.id/wp-content/uploads/2017/07/Resep-Ayam-geprek-jogja.jpg?fit=2322%2C2167&ssl=1",
    title: "Nasi Ayam Geprek",
    price: "Rp 15.000",
  },
  {
    image:
      "https://tse1.mm.bing.net/th/id/OIP.BB9MH4hSjjaxUira3xqLKAHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
    title: "Mie Goreng Spesial",
    price: "Rp 12.000",
  },
  {
    image:
      "https://tse2.mm.bing.net/th/id/OIP.G1YKM1zhSZJnhaieTVzEOwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
    title: "Ayam Bakar Madu",
    price: "Rp 18.000",
  },
  {
    image:
      "https://www.rumahmesin.com/wp-content/uploads/2017/03/resep-sate-ayam-madura-mencicipi-makanan-asli-indonesia-yang-mendunia.jpg",
    title: "Sate Ayam",
    price: "Rp 10.000",
  },
  {
    image:
      "https://www.kitchensanctuary.com/wp-content/uploads/2020/07/Nasi-Goreng-square-FS-57.jpg",
    title: "Nasi Goreng Seafood",
    price: "Rp 16.000",
  },
  {
    image:
      "https://asset.kompas.com/crops/-EW4dZIFD3U055K4qtHqSgUg_hM=/92x67:892x600/1200x800/data/photo/2023/08/23/64e59deb79bfb.jpg",
    title: "Es Teh Manis",
    price: "Rp 3.000",
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Menu Kami
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Jelajahi hidangan lezat kami, yang disiapkan dengan bahan-bahan
            segar dan diantarkan langsung ke depan pintu Anda.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12">
          {menuItems.map((item) => (
            <MenuCard
              key={item.title}
              image={item.image}
              title={item.title}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
