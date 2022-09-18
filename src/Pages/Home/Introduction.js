import React from 'react';
import logo from '../../Images/B-logo.png'

const Introduction = () => {
    return (
        <div className='flex flex-col items-center gap-7 p-10'>
            <img className='w-20' src={logo} alt="" />
            <h1 className='text-7xl text-center font-bold'>
                Everything teams need to <br /> manage social media channels
            </h1>
            <p className='text-center text-3xl'>
                Build scalable and collaborative workflows to schedule content, deliver <br /> customer support via a social inbox, measure performance, and monitor <br /> brand health and competitors.

            </p>
        </div>
    );
};

export default Introduction;