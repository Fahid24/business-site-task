import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import CompanyName from './CompanyName';
import Introduction from './Introduction';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Introduction />
            <CompanyName />
            <Products />
        </div>
    );
};

export default Home;