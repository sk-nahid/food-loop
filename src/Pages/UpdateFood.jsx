import React from 'react';
import { useLoaderData } from 'react-router';
import useAuth from '../Hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const UpdateFood = () => {
    const food = useLoaderData()
    const { user } = useAuth()
    const id = food._id

    const handleUpdateFood = (e) => {
        e.preventDefault()

        const form = e.target;
        const formData = new FormData(form)
        const objForm = Object.fromEntries(formData)

        axios.put(`https://food-loop-server.vercel.app/food/${id}`, objForm)
            .then(res => {
                if (res.data.modifiedCount) {
                    Swal.fire({
                        title: "Food Updated Successful",
                        icon: "success",
                        draggable: true
                    });
                }
            })
            .catch(error => console.log(error))


    }

    return (
        <div className="max-w-3xl mx-auto p-6 bg-base-100 shadow-xl rounded-2xl mt-10">
            <h2 className="text-2xl font-bold text-center text-primary mb-6">Update Food</h2>

            <form onSubmit={handleUpdateFood} className="space-y-4">
                <div>
                    <label className="label">
                        <span className="label-text">Food Name</span>
                    </label>
                    <input type="text" placeholder="e.g. Leftover Sandwiches" defaultValue={food.foodName} name='foodName' className="input input-bordered w-full" />
                </div>

                <div>
                    <label className="label">
                        <span className="label-text">Food Image URL</span>
                    </label>
                    <input type="text" placeholder="https://image-link.jpg" defaultValue={food.foodImage} name='foodImage' className="input input-bordered w-full" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="label">
                            <span className="label-text">Food Quantity</span>
                        </label>
                        <input type="text" placeholder="e.g. 6 sandwiches" defaultValue={food.foodQuantity} name='foodQuantity' className="input input-bordered w-full" />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Pickup Location</span>
                        </label>
                        <input type="text" placeholder="e.g. Banani, Dhaka" defaultValue={food.pickupLocation} name='pickupLocation' className="input input-bordered w-full" />
                    </div>
                </div>

                <div>
                    <label className="label">
                        <span className="label-text">Expired Date/Time</span>
                    </label>
                    <input type="date" name='expiredDate' defaultValue={food.expiredDate} className="input input-bordered w-full" />
                </div>

                <div>
                    <label className="label">
                        <span className="label-text">Additional Notes</span>
                    </label>
                    <textarea className="textarea textarea-bordered w-full" name='additionalNotes' placeholder="Stored in fridge. Best before evening." defaultValue={food.additionalNotes}></textarea>
                </div>
                <div className='hidden'>

                    <input type="text" value={food.foodStatus} name='foodStatus' className="input input-bordered w-full" />
                </div>

                {/* Donor Info (logged-in user) */}
                <div>
                    <label className="label">
                        <span className="label-text"> Name</span>
                    </label>
                    <input type="text" placeholder={user.displayName} value={user.displayName} name='donorName' className="input input-bordered w-full" />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" value={user.photoURL} name='donorImage' className="input input-bordered w-full" />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" value={user.email} name='donorEmail' className="input input-bordered w-full" />
                </div>
                <input className='btn btn-primary w-full' type="submit" value="Update Food" />
            </form>
        </div>
    );
};

export default UpdateFood;