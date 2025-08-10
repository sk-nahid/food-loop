import React from 'react';
import HeroSlider from '../Components/HomeComponents/HeroSlider';
import FeaturedFood from '../Components/HomeComponents/FeaturedFood';
import WhyDonate from '../Components/HomeComponents/WhyDonate';
import Blogs from '../Components/HomeComponents/Blogs';
import { Link } from 'react-router';
import ImpactStats from '../Components/HomeComponents/ImpactStats';
import FaqSection from '../Components/HomeComponents/FaqSection';
import ImageCollageCarousel from '../Components/HomeComponents/ImageCollageCarousel';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto px-4 py-10 '>

            <div>
                <HeroSlider></HeroSlider>
            </div>



            <div>
                <div className="w-full mx-auto my-8 px-4">
                    <div className="bg-white shadow-md border border-gray-200 rounded-xl py-4 px-6 text-center">
                        <h2 className="text-2xl font-bold text-gray-800">🍽️ Featured Foods</h2>
                    </div>
                </div>
                <FeaturedFood></FeaturedFood>
                <div className='flex mt-8 '>
                  <Link className='btn btn-primary  mx-auto' to='/available-foods'>All Available Food</Link> 
                </div>
            </div>
            <div>
                <div className="w-full mx-auto my-8 px-4">
                    <div className="bg-white shadow-md border border-gray-200 rounded-xl py-4 px-6 text-center">
                        <h2 className="text-2xl font-bold text-gray-800">♻️ WHY Donate?</h2>
                    </div>
                </div>
                <WhyDonate></WhyDonate>
            </div>
            <div>
                <div className="bg-white shadow-md border border-gray-200 rounded-xl py-4 px-6 text-center">
                    <h2 className="text-2xl font-bold text-gray-800">📝 Our Blogs</h2>
                </div>
                <Blogs></Blogs>
            </div>
            <div>
                <div className="bg-white shadow-md border border-gray-200 rounded-xl py-4 px-6 text-center">
                    <h2 className="text-2xl font-bold text-gray-800">📊 Impact Status</h2>
                </div>
                <ImpactStats></ImpactStats>
            </div>
            <div>
                <div className="bg-white shadow-md border border-gray-200 rounded-xl py-4 px-6 text-center">
                    <h2 className="text-2xl font-bold text-gray-800">❓ Frequently Asked Questions </h2>
                </div>
                <FaqSection></FaqSection>
            </div>
            <div>
                <div className="bg-white shadow-md border border-gray-200 rounded-xl py-4 px-6 text-center">
                    <h2 className="text-2xl font-bold text-gray-800">🖼️ Food Donation Highlights</h2>
                </div>
                <ImageCollageCarousel></ImageCollageCarousel>

                
            </div>
        </div>
    );
};

export default Home;