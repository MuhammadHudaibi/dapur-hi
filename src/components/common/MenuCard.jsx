import React, { useState } from "react";

const MenuCard = ({ image, title, price, description }) => {
  const placeholderImage = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    title
  )}&color=F28524`;
  const [imgSrc, setImgSrc] = useState(image || placeholderImage);

  return (
    <div className="transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer">
      <img
        src={imgSrc}
        alt={`Hidangan ${title}`}
        className="w-full h-48 object-cover rounded-xl shadow-md"
        loading="lazy"
        onError={() => setImgSrc(placeholderImage)}
      />
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="mt-1 text-base text-gray-600">{price}</p>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default MenuCard;