import React from 'react'
import { FaCarSide, FaHeadphonesAlt, FaWallet, FaCheckCircle } from "react-icons/fa";

const ServiceData = [
    {
        id: 1,
        icon: <FaCarSide className='text:4xl md:text-5xl text-primary' />,
        title: "Free Shipping",
        description: "FREE Shipping On All Order",

    },

    {
        id: 2,
        icon: <FaCheckCircle className='text:4xl md:text-5xl text-primary' />,
        title: "Save Money",
        description: "30 Days Money Back",

    },
    {
        id: 3,
        icon: <FaWallet className='text:4xl md:text-5xl text-primary' />,
        title: "Secure Payment",
        description: "All Payment Secure",

    },
    {
        id: 4,
        icon: <FaHeadphonesAlt className='text:4xl md:text-5xl text-primary' />,
        title: "Online Support 24/7",
        description: "Technical Support 24/7",

    },
];

const Services = () => {
    return (
        <div>
            <div className='container my-14 md:my-20'>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
                    {ServiceData.map((data) => (
                        <div className='flex flex-col items-start gap-4 sm:flex-row'>

                            {data.icon}

                            <div>
                                <h1 className=' text-md font-bold sm:text-xl '>{data.title}</h1>
                                <h1 className='text-gray-400'>{data.description}</h1>
                            </div>

                        </div>



                    ))
                    }
                </div>


            </div>
        </div>
    )
}

export default Services;
