import React from 'react'
import Heading from '../shared/Heading';
import iphone from '../../assets/website/iphone.jpg';
import watch from '../../assets/website/watch.jpg';
import gadgets from '../../assets/website/gadgets.jpg';



const BlogsData = [
    {


        title: "How to Choose Perfect Smart Watch",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus esse soluta consectetur",
        image: watch,
        published: "jan 20 2024 by kavi",
        aosDelay:"0"
    },

    {

        title: "How to Choose Perfect Gadgets",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus esse soluta consectetur",
        image: gadgets,
        published: "jan 20 2024 by kavi",
        aosDelay:"200"
    },

    {

        title: "How to Choose perfect Android Mobiles",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus esse soluta consectetur",
        image: iphone,
        published: "jan 20 2024 by kavi",
        aosDelay:"400"
    },

];


const Blogs = () => {
    return (
        <div className='my-12' id='blogs'>
            <div className="container">
                {/* Header Section */}
                <Heading title="Recent News" subtitle={"Explore Our Blogs"}
                />
                {/* blog section */}
                <div className='grid grid-cols-1 gap-6 gap-y-8 sm:grid-cols-2 md:grid-cols-3 sm:gap-4 md:gap-7'>
                    {/* Blog Card */}
                    {
                        BlogsData.map((data) => (
                            <div
                            data-aos="fade-up"
                            data-aos-delay={data.aosDelay}
                            key={data.title} className='bg-white dark:bg-gray-900'>
                                {/* image section */}
                                <div className='rounded-2xl overflow-hidden mb-2'>
                                    < img src={data.image} 
                                    alt=""
                                    className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500'
                                    />
                                </div>
                                {/* Content Section */}

                                <div className='space-y-2'>
                                    <p className='text-xs text-gray-500'>{data.published}</p>
                                    <p className='font-bold line-clamp-1 '>{data.title}</p>
                                    <p className='line-clamp-2 text-gray-600 dark:text-gray-4   00'>{data.subtitle}</p>
                                </div>
                            </div>

                        ))

                    }

                </div>
            </div>
        </div >
    )
}

export default Blogs
