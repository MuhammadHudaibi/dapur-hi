import React from "react";

const FeatureCard = ({ icon, title, description }) => {
  const IconComponent = icon;

  return (
    <div className="flex flex-col items-start p-6 bg-white border border-gray-200 rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
      <IconComponent className="w-8 h-8 text-orange-500 mb-4" />
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-1 text-base text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
