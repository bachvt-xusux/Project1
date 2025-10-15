import React from 'react';
import FooterLogo from '../../assets/website/footer.png';
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt
} from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <div className="bg-gray-100 dark:bg-gray-950 dark:text-white">
                <div className="max-w-[1200px] mx-auto">
                    <div className="grid md:grid-cols-3 py-5">
                        <div className="py-8 px-4">
                            <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold
                            text-justify sm:text-left">
                                <img src={FooterLogo} alt=""
                                     className="max-w-[50px]" />
                                FOOD
                            </h1>

                            <p>
                            </p>

                            <br />
                            <div className="flex items-center gap-3 mt-6">
                                <FaLocationArrow />
                                <p>Noida, Uttar Pradesh</p>
                            </div>
                            <div className="flex items-center gap-3 mt-3">
                                <FaMobileAlt />
                                <p>+84 973653462</p>
                            </div>


                            {/* social handles */}
                            <div>
                                <div className="flex items-center gap-3 mt-6">
                                    <a href="#">
                                        <FaInstagram className="text-3xl" />
                                    </a>
                                    <a href="#">
                                        <FaFacebook className="text-3xl" />
                                    </a>
                                    <a href="#">
                                        <FaLinkedin className="text-3xl" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-3 py-5">
                            <div>
                                <div className="py-8 px-4">
                                    <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                                        Improtant Links
                                    </h1>
                                    <ul className="flex flex-col gap-6">
                                        <li>Home</li>
                                        <li>About</li>
                                        <li>Services</li>
                                        <li>Login</li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <div className="py-8 px-4">
                                    <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                                        Links
                                    </h1>
                                    <ul className="flex flex-col gap-6">
                                        <li>Home</li>
                                        <li>About</li>
                                        <li>Services</li>
                                        <li>Login</li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <div className="py-8 px-4">
                                    <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                                        Links
                                    </h1>
                                    <ul className="flex flex-col gap-6">
                                        <li>Home</li>
                                        <li>About</li>
                                        <li>Services</li>
                                        <li>Login</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center py-10 border-t-2 border-gray-300/50">
                        <p>@cpoyright 2025 All right reserved</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;