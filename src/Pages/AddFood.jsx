import React from 'react';
import useAuth from '../Hooks/useAuth';

// {
//   "_id": "684a93fef190afaec1c2d063",
//   "foodName": "Leftover Sandwiches",
//   "foodImage": "https://i.ibb.co/xhKDBZG/sandwich.jpg",
//   "foodQuantity": "6 sandwiches",
//   "pickupLocation": "Banani, Dhaka",
//   "expiredDate": "2025-06-11",
//   "additionalNotes": "Stored in fridge. Best before evening.",
//   "donorImage": "https://i.ibb.co/7WfwnpZ/user3.jpg",
//   "donorName": "Nafis Rahman",
//   "donorEmail": "nafis@example.com",
//   "foodStatus": "available"
// }

const AddFood = () => {
    const {user}= useAuth()

    const handleAddFood = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const ObjForm = Object.fromEntries(formData);

        const status = 'available'
        const newFood ={status,...ObjForm}
        console.log(newFood)
    }
    return (
        <div className="max-w-3xl mx-auto p-6 bg-base-100 shadow-xl rounded-2xl mt-10">
            <h2 className="text-2xl font-bold text-center text-primary mb-6">Add New Food</h2>

            <form onSubmit={handleAddFood} className="space-y-4">
                <div>
                    <label className="label">
                        <span className="label-text">Food Name</span>
                    </label>
                    <input type="text" placeholder="e.g. Leftover Sandwiches" name='foodName' className="input input-bordered w-full" />
                </div>

                <div>
                    <label className="label">
                        <span className="label-text">Food Image URL</span>
                    </label>
                    <input type="text" placeholder="https://image-link.jpg" name='foodImage' className="input input-bordered w-full" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="label">
                            <span className="label-text">Food Quantity</span>
                        </label>
                        <input type="text" placeholder="e.g. 6 sandwiches" name='foodQuantity' className="input input-bordered w-full" />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Pickup Location</span>
                        </label>
                        <input type="text" placeholder="e.g. Banani, Dhaka" name='pickupLocation' className="input input-bordered w-full" />
                    </div>
                </div>

                <div>
                    <label className="label">
                        <span className="label-text">Expired Date/Time</span>
                    </label>
                    <input type="date" name='expiredDate' className="input input-bordered w-full" />
                </div>

                <div>
                    <label className="label">
                        <span className="label-text">Additional Notes</span>
                    </label>
                    <textarea className="textarea textarea-bordered w-full" name='additionalNotes' placeholder="Stored in fridge. Best before evening."></textarea>
                </div>

                {/* Donor Info (logged-in user) */}
                <div>
                    <label className="label">
                        <span className="label-text"> Name</span>
                    </label>
                    <input  type="text" placeholder={user.displayName} value={user.displayName} name='donorName' className="input input-bordered w-full" />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input  type="text" value={user.photoURL} name='donorImage' className="input input-bordered w-full" />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input  type="text" value={user.email} name='donorEmail' className="input input-bordered w-full" />
                </div>
                <input className='btn btn-primary w-full' type="submit" value="Add Food" />
            </form>
        </div>
    );
};

export default AddFood;