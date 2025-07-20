import React from "react";
import MenuCard from "../common/MenuCard.jsx";
import { menuItems } from "../../data/menuData.js";
import useAnimateOnScroll from "../../hooks/useAnimateOnScroll.js";

const MenuSection = () => {
  const sectionRef = useAnimateOnScroll();

  return (
    <section
      id="menu"
      ref={sectionRef}
      className="fade-in-section py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-poppins">
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
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
