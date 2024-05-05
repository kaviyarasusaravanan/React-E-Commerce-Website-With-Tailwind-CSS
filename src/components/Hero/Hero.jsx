import React from 'react';
import Slider from "react-slick";
import image1 from '../../assets/website/hero-smartphone1.png';
import image2 from '../../assets/website/hero-headphone2.png';
import image3 from '../../assets/website/hero-Smartwatch3.png';
import Button from '../shared/Button';


const HeroData = [
    {
        id: 1,
        img: image1,
        subtitle: "Ready to Call",
        title: "Apple ",
        title2: "IPhone",
    },
    {
        id: 2,
        img: image2,
        subtitle: "Ultra Sound ",
        title: "Boat",
        title2: "HeadPhones",
    },
    {
        id: 3,
        img: image3,
        subtitle: "Nalla Nerom Thaan",
        title: "Sony",
        title2: "Watches",

    }

]
const Hero = ({ handleOrderPopup }) => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: "false",
        pauseOnFocus: "true",
    };
    return (

        <div className='container' id='hero' >

            <div className='overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] flex justify-center
             items-center hero-bg-color'>
                <div className=' container pb-8 sm:pb-0'>
                    {/* Hero Section */}
                    <Slider {...settings}>
                        {HeroData.map((data) => (
                            <div key={data.id}>
                                <div className='grid grid-cols-1 sm:grid-cols-2'>
                                    <div className='flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm-pt-0 text-center 
                                    sm:text-left py-10 order-2  sm:order-1 relative z-10 min-h[550px] sm:min-h-[650px]'>
                                        <h1
                                            data-aos="zoom-out"
                                            data-aos-duration="500"
                                            data-aos-once="true"
                                            className='text-2xl  sm:text-6xl lg:text-2xl font-bold'>{data.subtitle}
                                        </h1>
                                        <h1
                                            data-aos="zoom-out"
                                            data-aos-duration="500"
                                            data-aos-once="true"
                                            className='text-5xl sm:text-6xl lg-text-7xl font-bold'>{data.title}
                                        </h1>
                                        <h2
                                            data-aos="zoom-out"
                                            data-aos-duration="500"
                                            data-aos-once="true"
                                            className='text-5xl uppercase font-bold text-white dark:text-white/5
                                        sm:text-[80px] md:text-[100px] lg:text-[150px]'>{data.title2}
                                        </h2>
                                        <div 
                                        data-aos="fade-up"
                                        data-aos-offset="0"
                                        data-aos-duration="500"
                                        data-aos-delay="300"
                                        
                                        >
                                            <Button
                                                text="Shop By Catogory"
                                                bgColor="bg-primary"
                                                textColor="text-white"
                                                handler={handleOrderPopup}
                                            />
                                        </div>
                                    </div>
                                    {/* image section */}
                                    <div className='order-1 sm:order-2 '>
                                        <div 
                                            data-aos="zoom-in"
                                            data-aos-once="true"
                                            className='relative z-10'
                                            
                                        >
                                            <img
                                                src={data.img}
                                                alt=""
                                                className={` w-[300px] h-[300px]  sm:h-[450px] md:h-[500px] lg:h-[500px]
                                                 lg:w-[500px]   mx-auto drop-shadow-[-8px_4px_6px_rgba (0,0,0,.4)]
                                                 object-contain relative z-40 `}
                                            />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                        {/* text section */}
                        {/* image section */}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Hero
