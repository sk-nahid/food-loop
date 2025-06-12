import React from 'react';
import HeroSlider from '../Components/HomeComponents/HeroSlider';
import FeaturedFood from '../Components/HomeComponents/FeaturedFood';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto px-4 py-10'>

            <div>
                <HeroSlider></HeroSlider>
            </div>
            <div className="w-full mx-auto my-8 px-4">
                <div className="bg-white shadow-md border border-gray-200 rounded-xl py-4 px-6 text-center">
                    <h2 className="text-2xl font-bold text-gray-800">🍽️ Available Foods</h2>
                </div>
            </div>


            <div>
                <FeaturedFood></FeaturedFood>
                <div className='flex mt-8 '>
                    <button className='btn btn-primary  mx-auto'>All Available Food</button>
                </div>
            </div>
        </div>
    );
};

export default Home;