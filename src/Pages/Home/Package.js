import React from 'react';
import { GiCheckMark } from 'react-icons/gi';
import Button from '../../Components/Share/Button/Button';



const Package = () => {
    return (
        <div className='flex justify-center items-center' >




            <div className="hero  min-h-screen text-center mx-40 ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://www.insightssuccess.com/wp-content/uploads/2022/04/Advantages-of-Social-Media-Marketing-for-Your-Business-1-1.jpg" className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div className='flex flex-col items-center gap-3'>
                        <h1 className="text-3xl  font-bold"><span className='rounded-md border-b-4 border-secondary'>Bring success</span> across social media channels</h1>
                        <div className='lg:flex gap-3 justify-center'>
                            <span className='flex'> <GiCheckMark className='mt-1' /><p> No credit card required</p></span>
                            <span className='flex'> <GiCheckMark className='mt-1' /><p> 14-day free trial</p></span>
                            <span className='flex'> <GiCheckMark className='mt-1' /><p> Cancel anytime</p></span>

                        </div>
                        <Button text="Get Started" btn='btn-md w-1/2' key={1}>Get Started</Button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Package;