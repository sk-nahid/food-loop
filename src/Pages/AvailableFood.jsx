import React, { useEffect, useState } from 'react';
import FoodCards from '../Components/HomeComponents/FoodCards';

const AvailableFood = () => {
    const [availableFoods, setAvailableFoods] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/food')
            .then(res => res.json())
            .then(data => setAvailableFoods(data))
    }, [])
    return (
        <div className='max-w-7xl mx-auto px-4 py-10'>
            <div className="w-full mx-auto my-8 px-4">
                <div className="bg-white shadow-md border border-gray-200 rounded-xl py-4 px-6 text-center">
                    <h2 className="text-2xl font-bold text-gray-800">🍽️ Available Foods</h2>
                </div>
            </div>
            <div className='grid md:grid-cols-3 gap-4 py-8'>
                {
                    availableFoods.map(food => <FoodCards food={food}></FoodCards>)
                }
            </div>
        </div>
    );
};

export default AvailableFood;