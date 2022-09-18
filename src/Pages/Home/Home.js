import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import CompanyName from './CompanyName';
import Introduction from './Introduction';
import Package from './Package';
import Products from './Products';
import Service from './Service';
import Slider from '../../Components/Slider/Slider';
import { BsFillChatDotsFill } from 'react-icons/bs';


const Home = () => {
    return (
        <div>
            <Navbar />
            <Introduction />
            <Slider />
            <CompanyName />
            <Products />
            <Package />
            <Service />
            <div className='sticky right-0 bottom-0 flex justify-end'>
                <BsFillChatDotsFill className='w-40 text-6xl text-accent my-10' />
            </div>

        </div>
    );
};

export default Home;