import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import useAuth from '../Hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';



const FoodDetails = () => {
  const food = useLoaderData()
  const { user } = useAuth()
  const [isOpen, setIsOpen] = useState(false);
  const { _id, foodName, foodImage, pickupLocation, expiredDate, donorName, donorEmail, } = food


  const hanldeRequest = e => {
    e.preventDefault()
    const form = e.target;
    const formData = new FormData(form);
    const objForm = Object.fromEntries(formData)

    //add request
    axios.post('http://localhost:3000/request-food', objForm)
      .then(res => {
        if (res.data.insertedId) {
          
          Swal.fire({
            title: "Request Added",
            icon: "success",
            draggable: true
          });
          setIsOpen(false)
        }
      })
      .catch(error => {
        console.log(error)
      })
    const status= {foodStatus:'requested'}
    //update status
    axios.patch(`http://localhost:3000/food/${_id}`, status)
      .then(res => {
      })
    .catch(error=> console.log(error))
  }


  const currentDate = new Date().toISOString().split("T")[0]; // YYYY-MM-DD


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
                className={`badge ${food.foodStatus === "available"
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
            <button className="btn btn-primary w-full" onClick={() => setIsOpen(true)}>Request This Food</button>
          </div>
          <div>
            {isOpen && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-base-100 rounded-xl p-6 w-[90%] md:w-[50%] shadow-lg relative">
                  {/* request form */}
                  <div className="max-w-full mx-auto p-6 bg-base-100 rounded-xl shadow-md mt-10">
                    <h2 className="text-2xl font-bold text-center mb-6 text-primary">Request Food</h2>

                    <form onSubmit={hanldeRequest} className="space-y-4">

                      <div>
                        <label className="label">
                          <span className="label-text">Food Name</span>
                        </label>
                        <input type="text" value={foodName} readOnly name='requestedFoodName' className="input input-bordered w-full bg-base-200" />
                      </div>

                      <div>
                        <label className="label">
                          <span className="label-text">Food Image</span>
                        </label>

                        <img src={foodImage} alt={foodName} name className="rounded-lg w-32 h-auto" />
                        <input type="text" value={foodImage} readOnly name='requestedFoodImage' className="input input-bordered w-full bg-base-200 hidden" />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="label">
                            <span className="label-text">Food ID</span>
                          </label>
                          <input type="text" value={_id} name='requestedFoodId' readOnly className="input input-bordered w-full bg-base-200" />
                        </div>

                        <div>
                          <label className="label">
                            <span className="label-text">Pickup Location</span>
                          </label>
                          <input type="text" value={pickupLocation} name='requestedFoodPickup' readOnly className="input input-bordered w-full bg-base-200" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="label">
                            <span className="label-text">Expire Date</span>
                          </label>
                          <input type="text" value={expiredDate} name='requestedFoodExpire' readOnly className="input input-bordered w-full bg-base-200" />
                        </div>

                        <div>
                          <label className="label">
                            <span className="label-text">Request Date</span>
                          </label>
                          <input type="text" value={currentDate} name='RequestTime' readOnly className="input input-bordered w-full bg-base-200" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="label">
                            <span className="label-text">Donator Name</span>
                          </label>
                          <input type="text" value={donorName} name='donorName' readOnly className="input input-bordered w-full bg-base-200" />
                        </div>

                        <div>
                          <label className="label">
                            <span className="label-text">Donator Email</span>
                          </label>
                          <input type="text" value={donorEmail} name='donorEmail' readOnly className="input input-bordered w-full bg-base-200" />
                        </div>
                      </div>

                      <div>
                        <label className="label">
                          <span className="label-text">Your Email</span>
                        </label>
                        <input type="text" value={user.email} name='email' readOnly className="input input-bordered w-full bg-base-200" />
                      </div>

                      <div>
                        <label className="label">
                          <span className="label-text">Additional Notes</span>
                        </label>
                        <textarea
                          name='additionalNote'
                          className="textarea textarea-bordered w-full"
                          placeholder="Write your message or request notes here..."
                        ></textarea>
                      </div>

                      <div className="mt-6">
                        <input className='btn btn-primary w-full' type="submit" value="Request This food" />
                      </div>
                    </form>
                  </div>


                  <div className="flex justify-end">
                    <button className="btn btn-sm btn-error" onClick={() => setIsOpen(false)}>
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>

  );
};

export default FoodDetails;