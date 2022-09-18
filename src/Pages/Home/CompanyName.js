import React from 'react';
import logo1 from '../../Images/company-logo/Screenshot (121).png'
import logo2 from '../../Images/company-logo/Screenshot (116).png'
import logo3 from '../../Images/company-logo/Screenshot (117).png'
import logo4 from '../../Images/company-logo/Screenshot (118).png'
import logo5 from '../../Images/company-logo/Screenshot (119).png'
import logo6 from '../../Images/company-logo/Screenshot (120).png'


const companies = [
    {
        id: 1,
        logo: logo1
    },
    {
        id: 2,
        logo: logo2
    },
    {
        id: 3,
        logo: logo3
    },
    {
        id: 4,
        logo: logo4
    },
    {
        id: 5,
        logo: logo5
    },
    {
        id: 6,
        logo: logo6
    }
]

const CompanyName = () => {
    return (
        <div className='flex gap-5 justify-around my-40 p-10'>
            {
                companies.map(company => (
                    <div
                        key={company.id}
                    >
                        <img className='rounded-xl' src={company.logo} alt="" />

                    </div>
                ))
            }
        </div>
    );
};

export default CompanyName;