// components/ServiceCard.js
import React from 'react';

const ServiceCard = ({ icon, title, description, number }) => {
  return (
    <div className="flex flex-col justify-between w-full p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="flex items-center justify-between">
        <div className="text-orange-500 text-4xl">{icon}</div>
        <div className="text-gray-300 text-3xl font-bold">{number}</div>
      </div>
      <h2 className="mt-4 text-xl font-semibold text-gray-800">{title}</h2>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
