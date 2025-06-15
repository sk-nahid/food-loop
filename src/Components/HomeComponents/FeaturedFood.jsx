import React, { useEffect, useState } from 'react';
import FoodCards from './FoodCards';
import { useQuery } from '@tanstack/react-query';
import getQuery from '../../TanStack/Query';
import Loading from "../../Components/Loading"

const FeaturedFood = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['featuredFoods'],
        queryFn: () => getQuery()
    })

    if (isLoading) {
        return <Loading></Loading>
    }
    

    
    return (
        <div className='grid md:grid-cols-3 gap-4'>
            {
                data.map(food => <FoodCards food={food}></FoodCards>)
            }

        </div>

    );
};

export default FeaturedFood;