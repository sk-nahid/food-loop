import React from 'react';
import { useLoaderData } from 'react-router';



const FoodDetails = () => {
    const food = useLoaderData()
    console.log(food)
    return (
        <div className="max-w-3xl mx-auto p-4">
      <div className="bg-base-100 shadow-xl rounded-2xl overflow-hidden">
        <img
          src={food.foodImage}
          alt={food.foodName}
          className="w-full h-64 object-cover"
        />

        <div className="p-6 space-y-4">
          <h2 className="text-2xl font-bold text-primary">{food.foodName}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="font-semibold">Quantity:</p>
              <p>{food.foodQuantity}</p>
            </div>
            <div>
              <p className="font-semibold">Pickup Location:</p>
              <p>{food.pickupLocation}</p>
            </div>
            <div>
              <p className="font-semibold">Expires On:</p>
              <p>{food.expiredDate}</p>
            </div>
            <div>
              <p className="font-semibold">Status:</p>
              <span
                className={`badge ${
                  food.foodStatus === "available"
                    ? "badge-success"
                    : "badge-error"
                }`}
              >
                {food.foodStatus}
              </span>
            </div>
          </div>

          {food.additionalNotes && (
            <div>
              <p className="font-semibold">Notes:</p>
              <p>{food.additionalNotes}</p>
            </div>
          )}

          <div className="flex items-center mt-4 gap-4 border-t pt-4">
            <img
              src={food.donorImage}
              alt={food.donorName}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">{food.donorName}</p>
              <p className="text-sm text-gray-500">{food.donorEmail}</p>
            </div>
          </div>

          <div className="mt-6">
            <button className="btn btn-primary w-full">Request This Food</button>
          </div>
        </div>
      </div>
    </div>

    );
};

export default FoodDetails;