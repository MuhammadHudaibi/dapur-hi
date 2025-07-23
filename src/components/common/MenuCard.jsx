import React, { useState } from "react";

const MenuCard = ({ image, title, price, description }) => {
  const placeholderImage = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    title
  )}&color=F28524`;
  const [imgSrc, setImgSrc] = useState(image || placeholderImage);

  return (
    <div className="transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer rounded-2xl overflow-hidden bg-white shadow-md">
      <img
        src={imgSrc}
        alt={`Hidangan ${title}`}
        className="w-full h-48 object-cover"
        loading="lazy"
        onError={() => setImgSrc(placeholderImage)}
      />
      <div className="p-4 rounded-b-2xl">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">{title}</h3>
        <p className="mt-1 text-base text-gray-600">{price}</p>
        <p className="mt-1 text-sm text-gray-500 line-clamp-3">{description}</p>
      </div>
    </div>
  );
};

export default MenuCard;
