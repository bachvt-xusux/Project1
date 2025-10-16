import React from 'react';
import Logo from '../../assets/download.jpeg';
import { FaCartShopping } from 'react-icons/fa6';
import DarkMode from '../Navbar/DarkMode.jsx';

const Navbar = () => {
    return (
        <>
            <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
                <div className="container py-3 sm:py-0">
                    <div className="flex justify-between items-center">
                        <div>
                            <a href="#" className="flex items-center gap-2 text-2xl sm:text-3xl font-bold">
                                <img src={Logo} alt="FOOD FAST"
                                     className="w-10" /> FOOD
                            </a>
                        </div>

                        <div className="flex items-center gap-4">
                            <div>
                                <DarkMode />
                            </div>
                            <ul className="hidden sm:flex sm:gap-4">
                                <li>
                                    <a href="#" className="inline-block
                                    py-4 px-4 hover:text-amber-950">Home</a>
                                </li>
                                <li>
                                    <a href="#" className="inline-block
                                    py-4 px-4 hover:text-amber-950">About</a>
                                </li>
                                <li>
                                    <a href="#" className="inline-block
                                    py-4 px-4 hover:text-amber-950">Contact</a>
                                </li>
                            </ul>
                            <button className="bg-gradient-to-r from-primary to-secondary
                            text-black px-4 py-1 rounded-full hover:scale-105 duration-300 flex items-center gap-2">
                                Order
                                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Navbar;