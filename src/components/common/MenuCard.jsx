import React from "react";

const MenuCard = ({ image, title, price }) => {
  return (
    <div>
      <img
        src={image}
        alt={`Hidangan ${title}`}
        className="w-full h-48 object-cover rounded-xl shadow-md"
        loading="lazy"
      />
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="mt-1 text-base text-gray-600">{price}</p>
      </div>
    </div>
  );
};

export default MenuCard;