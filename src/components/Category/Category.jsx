import React from 'react';
import Button from '../shared/Button';
import image1 from '../../assets/website/category-hearphone1.png';
import image2 from '../../assets/website/category-trimmer2.png';
import image3 from '../../assets/website/shirt1.png';
import image4 from '../../assets/website/shirt2.png';


const Category = () => {
    return (
        <div className='py-8' id='shop'>
            <div className='container'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    <div className=' py-10 pl-5 bg-gradient-to-br from-black/90  to-black/70 text-white 
                    rounded-3xl  h-[320px] flex items-end relative overflow-hidden'>
                        <div>

                            <div className='mb-4'>
                                <p className='text-gray-400 mb-[2px] font-bold'>Enjoy</p>
                                <p className='font-semibold  text-2xl mb-[2px]'>With</p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-20 '>Earphone</p>
                                <Button
                                    text="Browse"
                                    textColor="text-white"
                                    bgColor="bg-primary"
                                />
                            </div>
                        </div>

                        <img src={image1} alt=""
                            className='absolute  w-[120px] h-[320px]  -rotate-45 right-0 bottom-0 '
                        />


                    </div>

                    {/* second img */}
                    <div className=' py-10  pl-5 bg-gradient-to-br from-brandBlue  to-brandBlue/90 text-white 
                    rounded-3xl  h-[320px] flex items-end   relative overflow-hidden'>
                        <div>

                            <div className='mb-4'>
                                <p className='text-white mb-[2px]'>Enjoy</p>
                                <p className='text-white  text-2xl font-semibold mb-[2px]'>With</p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Trimmer</p>
                                <Button
                                    text="Browse"
                                    textColor="text-brandBlue"
                                    bgColor="bg-white"
                                />
                            </div>
                        </div>

                        <img src={image2} alt=""
                            className='absolute  w-[160px] h-[300px] right-0 lg:top-[40px]'
                        />

                    </div>
                    {/* third img */}
                    <div className='sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-primary  to-primary/90 text-white 
                    rounded-3xl  h-[320px] flex items-end   relative overflow-hidden'>
                        <div>

                            <div className='mb-4 pl-8'>
                                <p className='text-white font-bold mb-[2px]'>Enjoy</p>
                                <p className='text-white  text-2xl font-semibold mb-[2px]'>With</p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Trimmer</p>
                                <Button
                                    text="Browse"
                                    textColor="text-primary"
                                    bgColor="bg-white"
                                />
                            </div>
                        </div>


                        <img src={image3} alt=""
                            className='absolute  w-[360px] top-1/2 -translate-y-1/2 right-0'
                        />
                        <img src={image4} alt=""
                            className='absolute  w-[260px] right-0 top-1/3 translate-y-1/4'
                        />

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Category
