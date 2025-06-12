import React from 'react';
import { Link } from 'react-router';

const FoodCards = ({ food }) => {
  const {
    _id,
    foodName,
    foodImage,
    foodQuantity,
    pickupLocation,
    expiredDate,
    additionalNotes,
    donor,
    foodStatus
  } = food;

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300">
      <figure>
        <img src={foodImage} alt={foodName} className="h-44 w-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-primary">{foodName}</h2>
        <p className="text-sm text-gray-500">Pickup: {pickupLocation}</p>
        <p className="text-sm text-gray-500">Expires: {expiredDate}</p>

        <div className="flex justify-between items-center mt-4">
          <span className={`badge ${foodStatus === "available" ? "badge-success" : "badge-error"} capitalize`}>
            {foodStatus}
          </span>
          <Link to={`/food/${_id}`}><button className="btn btn-sm btn-outline btn-primary">View More</button></Link>
        </div>
      </div>
    </div>
  );

};

export default FoodCards;