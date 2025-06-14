import React, { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';

const MyFoods = () => {
    const [myFood, setMyFood] = useState([]);
    const { user } = useAuth()
    console.log(user.email)
    useEffect(() => {
        fetch(`http://localhost:3000/food?email=${user.email}`)
            .then(res => res.json())
        .then(data=> setMyFood(data))
    }, [])

    console.log(myFood)

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
                        myFood.map((food,index) => <tr>
                            <th>{index+1}</th>
                            <td>{ food.foodName}</td>
                            <td>{ food.expiredDate}</td>
                            <td className=''>{food.foodStatus === "available"?<span className='bg-green-300 text-gray-800 px-1 rounded-full'>{ food.foodStatus}</span>:<span className='bg-red-300 text-gray-800 px-1 rounded-full'>{ food.foodStatus}</span> } </td>
                            <td>
                                <div>
                                    <button className='btn btn-primary mx-4'>Update</button>
                                    <button className='btn btn-error'>Delete</button>
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