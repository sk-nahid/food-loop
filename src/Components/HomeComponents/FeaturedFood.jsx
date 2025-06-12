import React, { useEffect, useState } from 'react';
import FoodCards from './FoodCards';

const FeaturedFood = () => {
    const [featureFoods, setFeatureFood] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/food')
            .then(res => res.json())
            .then(data => setFeatureFood(data))
    }, [])
    console.log(featureFoods)
    return (
        <div className='grid md:grid-cols-3 gap-4'>
            {
                featureFoods.map(food => <FoodCards food={food}></FoodCards>)
            }
            
        </div>
        
    );
};

export default FeaturedFood;