
import { IoMdSearch } from 'react-icons/io';
import { FaCaretDown, FaCartShopping } from 'react-icons/fa6';
import DarkMode from './DarkMode';
import { Link } from 'react-scroll';

const MenuLinks = [
    {
        id: 1,
        name: "Home",
        link: "hero",
    },
    {
        id: 2,
        name: "Shop",
        link: "shop",
    },
    {
        id: 3,
        name: "About",
        link: "about",
    },
    {
        id: 4,
        name: "Blogs",
        link: "blogs",
    },

]

const DropdownLinks = [{
    id: 1,
    name: "Trending Products",
    link: "/#"
},
{
    id: 2,
    name: "Best Selling",
    link: "/#"
},
{
    id: 3,
    name: "Top Rated",
    link: "/#"
}
]



const Navbar = ({ handleOrderPopup }) => {

    return (
        <div className='bg-white dark:bg-gray-900
         dark:text-white duration-200 z-40 w-full fixed top-0'>
            <div className='py-4'>
                <div className='container flex justify-between items-center'>
                    {/* logos and link sections */}

                    <div className='flex items-center gap-4'>

                        <a href="#"
                            className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl' >
                            Eshop
                        </a>


                        {/* menu items */}
                        <div className='hidden lg:block'>
                            <ul className='flex items-center gap-4 '>
                                {
                                    MenuLinks.map((data, index) => (
                                        <li key={index}>
                                            <Link to={data.link}
                                                smooth={true}
                                                duration={500}
                                                className='inline-block px-4 font-semibold
                                             text-gray-500 hover:text-black dark:hover:text-white duration-200'>
                                                {data.name}</Link>
                                        </li>
                                    ))
                                }
                                {/* Dropdown */}
                                <li className='relative  cursor-pointer group '>
                                    <a href="/#" className='flex items-center text-gray-500 font-semibold
                                      hover:text-black gap-[4px]
                                     dark:hover:text-white duration-200 py-2'>
                                        Quick Links
                                        <span>
                                            <FaCaretDown className='group-hover:rotate-180 duration-200' />
                                        </span>

                                    </a>

                                    {/* this is DropDown Links */}
                                    <div className='absolute hidden group-hover:block  z-[9999] bg-white p-4 
                                    rounded-md w-[200px] shadow-md dark:bg-gray-900 dark:text-white'>
                                        <ul className='space-y-2'>
                                            {
                                                DropdownLinks.map((data, index) => (
                                                    <li key={index}>
                                                        <a href={data.link} className='text-gray-500
                                                         dark:hover:text-white duration-400 hover:bg-primary/20 p-2  w-full inline-block  font-semobold rounded-md '>
                                                            {data.name}
                                                        </a>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>

                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Navbar right  sections */}

                    <div className='flex justify-between items-center gap-4'>
                        {/* search bar section */}
                        <div className='relative group hidden
                        sm:block'>
                            <input
                                type="text"
                                placeholder='Search'
                                className='search-bar'
                            />
                            <IoMdSearch className='text-xl text-gray-600 group-hover:text-primary
                             duration-200 dark:text-gray-400 absolute
                              top-1/2 -translate-y-1/2 right-3'
                            />
                        </div>
                        {/* order-button-section */}
                        <button className='relative p-3' onClick={handleOrderPopup}>
                            <FaCartShopping className='cart-icon text-xl text-gray-600 dark:text-gray-400' />
                            <div className='w-4 h-4 bg-red-500 text-white absolute top-0 right-0 rounded-full flex items-center justify-center '>3</div>
                        </button>


                        {/* dark mode section */}
                        <div>
                            <DarkMode />
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Navbar
