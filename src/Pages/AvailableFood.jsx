import React, { useEffect, useState } from 'react';
import FoodCards from '../Components/HomeComponents/FoodCards';
import Loading from '../Components/Loading';


const AvailableFood = () => {
    const [availableFoods, setAvailableFoods] = useState([])
    const [toggleLayout, setToggleLayout] = useState(false)
    const [searchTerm, setSearchTerm] = useState([])
    const [loading, setLoading] = useState(true)
    

    useEffect(() => {
        fetch(`https://food-loop-server.vercel.app/food?search=${searchTerm}`)
            .then(res => res.json())
            .then(data => {
                
                setAvailableFoods(data)
                setLoading(false)
            })
    }, [searchTerm])

    if (loading)  return Loading
    
    
    return (
        <div className='max-w-7xl mx-auto px-4 py-10'>
            <div className="w-full mx-auto my-8 px-4">
                <div className="bg-white shadow-md border border-gray-200 rounded-xl py-4 px-6 text-center">
                    <h2 className="text-2xl font-bold text-gray-800">🍽️ Available Foods</h2>
                </div>
            </div>
            <div className='flex justify-between items-center'>

                <div>
                    <label className="label">
                        <span className="label-text">Search</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Search food"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className="input input-bordered w-full max-w-md mb-4"
                    />


                </div>

                <div className='hidden md:block' >
                    <button onClick={() => setToggleLayout(!toggleLayout)} className='btn btn-primary'>Change LayOut</button>
                </div>
            </div>
            <div className={`grid ${toggleLayout ? 'md:grid-cols-2' : "md:grid-cols-3"}  gap-4 py-8`}>
                {
                    availableFoods.map(food => <FoodCards key={food._id} food={food}></FoodCards>)
                }
            </div>
        </div>
    );
};

export default AvailableFood;