import React, { useState } from "react";
import MenuCard from "../common/MenuCard.jsx";
import { menuItems } from "../../data/menuData.js";
import useAnimateOnScroll from "../../hooks/useAnimateOnScroll.js";

const MenuSection = () => {
  const sectionRef = useAnimateOnScroll();
  const [filter, setFilter] = useState("main");

  const filteredItems = menuItems.filter((item) =>
    filter === "main" ? item.isMainMenu : !item.isMainMenu
  );

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

        <div className="mb-10 flex justify-start">
          <div className="inline-flex rounded-lg shadow-sm">
            <button
              onClick={() => setFilter("main")}
              className={`
                px-4 py-2 text-sm font-medium border border-gray-200 rounded-l-lg 
                transition-colors duration-200
                ${
                  filter === "main"
                    ? "bg-orange-500 text-white"
                    : "bg-white text-gray-800 hover:bg-gray-50"
                }
              `}
            >
              Menu Utama
            </button>
            <button
              onClick={() => setFilter("side")}
              className={`
                px-4 py-2 text-sm font-medium border-t border-b border-r border-gray-200 rounded-r-lg 
                transition-colors duration-200
                ${
                  filter === "side"
                    ? "bg-orange-500 text-white"
                    : "bg-white text-gray-800 hover:bg-gray-50"
                }
              `}
            >
              Menu Tambahan
            </button>
          </div>
        </div>

        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12">
            {filteredItems.map((item) => (
              <MenuCard
                key={item.title}
                image={item.image}
                title={item.title}
                price={item.price}
                description={item.description}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-500">Menu belum tersedia.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;