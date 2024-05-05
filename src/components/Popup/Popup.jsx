import React from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import Button from '../shared/Button';




const Popup = ({ orderPopup, handleOrderPopup }) => {
    return (
        <>
            {orderPopup && (
                <div>
                    <div className='h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm'>
                        <div className='w-[300px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        p-4 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 rounded-md'>
                            {/* Header Section */}
                            <div className='flex justify-between items-center'>
                                <h1>Order Now</h1>
                                <div>
                                    <IoCloseSharp
                                        onClick={handleOrderPopup}
                                        className='text-xl cursor-pointer'
                                    />
                                </div>
                            </div>
                            {/* Form Section */}
                            <div className='mt-2'>
                                <input type="text" placeholder='Name' className='form-input'/>
                                <input type="text" placeholder='email' className='form-input' />
                                <input type="text" placeholder='Address' className='form-input'  />
                                <div className='flex justify-center'>
                                <Button  
                                    text="Order Now" 
                                    bgColor="bg-primary"
                                    textColor="text-white"
                                    />
                                </div>

                            </div>


                        </div>

                    </div>

                </div>
            )}
        </>
    );

};

export default Popup



{/* <div>
<div className='w-[300px] h-[200px]  absolute right-96 top-96 bg-gray-950
      rounded-2xl cart-box  flex items-center justify-center'>
    <div className='flex flex-col '>
        <div className='flex justify-between pb-2'>
            <p>Order Now</p>
            <IoCloseSharp onClick={handleOrderPopup} className='close-icon' />

        </div>

        <div className='bg-gray-950 flex flex-col'>

            <input type="text" className=' border border-slate-500 focus:bg-gray-600 h-[35px]  mb-4 rounded-2xl bg-gray-600 p-2' placeholder='Name' />
            <input type="text" className=' border border-slate-500 focus:bg-gray-600 h-[35px]  mb-4 rounded-2xl bg-gray-600 p-2' placeholder='Email' />
            <input type="text" className=' border border-slate-500 focus:bg-gray-600 h-[35px]  mb-4 rounded-2xl bg-gray-600 p-2' placeholder='Address' />


        </div>
    </div>
</div>

</div> */}