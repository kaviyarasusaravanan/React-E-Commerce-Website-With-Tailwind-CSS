import React from 'react';
import Button from '../shared/Button';
import image1 from '../../assets/website/category2-smarttv.png';
import image2 from '../../assets/website/category2-footwear.png';
import image3 from '../../assets/website/category2-shoes.png';    


const Category = () => {
    return (
        <div className='py-8'>
            <div className='container'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* 1st col */}
                    <div className='sm:col-span-2 py-10 pl-5 bg-gradient-to-br  text-white from-gray-900 to-gray-400 
                    rounded-3xl  h-[320px] flex items-end relative overflow-hidden'>
                        <div>

                            <div className='mb-4'>
                                <p className='text-white font-bold mb-[2px]'>Enjoy</p>
                                <p className='text-white  text-2xl font-semibold mb-[2px]'>With</p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>LED TV</p>
                                <Button
                                    text="Browse"
                                    textColor="text-primary"
                                    bgColor="bg-white"
                                />
                            </div>
                        </div>

                        <img src={image1} alt=""
                            className='absolute  w-[360px] h-[300px] right-0 -bottom-4 '
                        />

                    </div>
                    {/* second col */}
                    <div className=' py-10 pl-5 bg-gradient-to-br from-brandGreen/90  to-brandGreen/90 text-white 
                    rounded-3xl  h-[320px] flex items-start   relative overflow-hidden'>
                        <div>

                            <div className='mb-4'>
                                <p className='text-white font-bold mb-[2px]'>Enjoy</p>
                                <p className='text-white font-semibold  text-2xl mb-[2px]'>Stylish</p>
                                <p className='text-4xl xl:text-xl-7xl font-bold opacity-40 mb-2'>FOOTWEAR</p>
                                <Button
                                    text="Browse"
                                    textColor="text-brandGreen"
                                    bgColor="bg-white"
                                />
                            </div>
                        </div>


                        {/* <img src={image2} alt=""
                                className='absolute  w-[200px] h-[300px]   bottom-10 -right-10'
                            /> */}

                        <img src={image3} alt=""
                            className='absolute  w-[200px]   bottom-8 right-0 -rotate-45 '
                        />


                    </div>

                    {/* third col */}
                    <div className=' py-10 pl-4 bg-gradient-to-br from-brandYellow  to-brandYellow/90 text-white 
                    rounded-3xl  h-[320px] flex items-start   relative overflow-hidden'>
                        <div>

                            <div className='mb-4 '>
                                <p className='text-white font-bold mb-[2px]'>With</p>
                                <p className='text-white  text-2xl font-semibold mb-[2px]'>Enjoy</p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-4'>Trimmer</p>
                                <Button
                                    text="Browse"
                                    textColor="text-brandBlue"
                                    bgColor="bg-white"
                                />
                            </div>
                        </div>

                        <img src={image2} alt=""
                            className='absolute  w-[200px]  right-0 top-10'
                        />

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Category
