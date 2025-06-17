import React, { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';
import Swal from 'sweetalert2';
import { Link } from 'react-router';
import useAxios from '../Hooks/useAxios';

const MyFoods = () => {
    const [myFood, setMyFood] = useState([]);
    const { user } = useAuth()
    const axios = useAxios()
   
    const loadFoodData = () => {
        axios.get(`my-food?email=${user.email}`).then(res => setMyFood(res.data))
        console.log(user.email)
    }
    useEffect(() => {
        loadFoodData()
    }, [])


    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://food-loop-server.vercel.app/food/${id}`)
            .then(res => {

                if (res.data.deletedCount) {
                    loadFoodData()
                    Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });


                }
            })
            .catch(error => console.log(error))
                
            }
        });

        

    }


    return (
        <div className="overflow-x-auto max-w-7xl mx-auto">
            <table className="table table-zebra text-center ">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Food Name</th>
                        <th>Expire Date</th>
                        <th>Status</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        myFood.map((food, index) => <tr key={index}>
                            <th>{index + 1}</th>
                            <td>{food.foodName}</td>
                            <td>{food.expiredDate}</td>
                            <td className=''>{food.foodStatus === "available" ? <span className='bg-green-300 text-gray-800 px-1 rounded-full'>{food.foodStatus}</span> : <span className='bg-red-300 text-gray-800 px-1 rounded-full'>{food.foodStatus}</span>} </td>
                            <td>
                                <div>
                                    <Link to={`/update-food/${food._id}`} className='btn btn-primary mx-4'>Update</Link>
                                    <button onClick={() => handleDelete(food._id)} className='btn btn-error'>Delete</button>
                                </div>
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyFoods;