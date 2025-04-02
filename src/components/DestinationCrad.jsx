import React from "react";


const DestinationCard = ({ destination }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={destination.image}
        alt={destination.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold">{destination.name}</h2>
        <p className="text-gray-600">{destination.location}</p>
        <p className="mt-2 text-gray-800">{destination.description}</p>
        <p className="mt-2 font-semibold">{destination.price}</p>
      </div>
    </div>
  );
};

export default DestinationCard;
