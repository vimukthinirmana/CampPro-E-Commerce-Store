import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { FaUser } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { GiCampingTent } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import { toast } from "react-hot-toast";

function Header() {

    const [showManu, setShowMenu] = useState(false);
    const userData = useSelector((state) => state.user);
    const dispatch = useDispatch();

    console.log(userData)

    const handleShowMenu = () => {
        setShowMenu(preve => !preve)
    }

    const handleLogout = () => {
        dispatch(logoutRedux());
        toast("Logout successfully");
    };

    const cartItemNumber = useSelector((state) => state.product.cartItem)

    return (
        <header className='fixed shadow-md w-full h-12 px-2 md:px-4 z-50 bg-white'>
            {/* desktop */}
            <div className='flex items-center h-full justify-between'>
                <Link to={""}>
                    <div className='flex items-center justify-center h-10 select-none'>
                        <GiCampingTent className='h-full w-auto' />
                        <p className='text-black font-sans font-bold ml-2 '>| CampPro</p>
                    </div>
                </Link>

                <div className='flex items-center gap-4 md:gap-7'>
                    <nav className='flex gap-4 md:gap-6 text-base md:text-lg'>
                        <Link to={""}>Home</Link>
                        <Link to={"product/667e90db27f5019997752d41"}>Product</Link>
                        <Link to={"about"}>About</Link>
                        <Link to={"contact"}>Contact</Link>
                    </nav>

                    <div className='text-2xl text-gray-400 relative'>
                        <Link to={"cart"}>
                            <HiOutlineShoppingCart />
                            <div className='absolute -top-1 -right-0 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center'>
                                {cartItemNumber.length}
                            </div>
                        </Link>
                    </div>

                    <div className=' text-gray-400 bg-gray-100  rounded-full' onClick={handleShowMenu}>
                        <div className='text-2xl cursor-pointer w-8 h-8 rounded-full overflow-hidden drop-shadow-md' >
                            {userData.image ? (
                                <img src={userData.image} className="h-full w-full" />
                            ) : (
                                <FaUserCircle className='w-full h-full' />
                            )}

                        </div>

                        {(showManu && <div className='absolute right-2 bg-white py-2 px-2 shadow drop-shadow-md flex flex-col'>
                            {/* <Link to={'admindashboard'} className='whitespace-nowrap cursor-pointer'>Admin Dashboard</Link>
                        <Link to={'userdashboard'} className='whitespace-nowrap cursor-pointer'>User Dashboard</Link> */}

                            {userData.email === process.env.REACT_APP_ADMIN_EMAIL && (
                                <Link
                                    to={"newProduct"}
                                    className="whitespace-nowrap cursor-pointer px-2"
                                >
                                    New product
                                </Link>
                            )}


                            {/* <Link to={'login'} className='whitespace-nowrap cursor-pointer'>Login</Link> */}
                            {userData.image ? (
                                <Link
                                    to={"login"}
                                    className="cursor-pointer text-white px-2 bg-blue-500"
                                    onClick={handleLogout}
                                >
                                    Logout ({userData.firstName}){" "}
                                </Link>
                            ) : (
                                <Link
                                    to={"login"}
                                    className="whitespace-nowrap cursor-pointer px-2"
                                >
                                    Login
                                </Link>
                            )}

                            <nav className="text-base md:text-lg flex flex-col md:hidden">
                                <Link to={""} className="px-2 py-1">
                                    Home
                                </Link>
                                <Link
                                    to={"product/667e90db27f5019997752d41"}
                                    className="px-2 py-1"
                                >
                                    Product
                                </Link>
                                <Link to={"about"} className="px-2 py-1">
                                    About
                                </Link>
                                <Link to={"contact"} className="px-2 py-1">
                                    Contact
                                </Link>
                            </nav>

                        </div>
                        )}



                    </div>
                </div>

            </div>



            {/* mobile */}

        </header>
    );
}

export default Header;