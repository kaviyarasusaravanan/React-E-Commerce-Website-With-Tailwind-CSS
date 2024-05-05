import React from 'react';



const Banner = ({ data }) => {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12 '>
      <div className="container">
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-white 
         rounded-3xl items-center'  style={{ backgroundColor: data.bgColor }}>
          {/* first col */}
          <div className='p-6 sm:p-8'>
            <p
              data-aos="slide-right"
              className='text-sm'>{data.discount}</p>
            <h1
              data-aos="zoom-out"
              className='uppercase text-4xl lg:text-7xl font-bold '>
              {" "}
              {data.title}
            </h1>
            <p data-aos="fade-up" className='text-sm'>{data.date}</p>
          </div>

          {/* second col */}
          <div
            data-aos="zoom-in"
            className="h-full flex items-center">
            <img src={data.image} alt="" className='scale-125 w-[250px] md:w-[340px] h-[350px] object-contain  
            mx-auto drop-shadow-2px'
            />
          </div>
          {/* third col */}
          <div className='flex flex-col gap-4 p-4 sm:p-8'>
            <h2 data-aos="zoom-out" className='text-xl font-bold'>{data.title2}</h2>
            <h1 data-aos="fade-up" className='font-bold text-3xl sm:text-5xl'>{data.title3}</h1>
            <p data-aos="fade-up" className='text-sm tracking-wide leading-5 '>{data.title4}</p>
            <div data-aos="fade-up" data-aos-offset="0">
              <button
                className='bg-white py-2 px-6 rounded-full' style={{ color: data.bgColor }}>
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Banner;
