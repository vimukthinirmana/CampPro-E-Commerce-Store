import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import { FaUser } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
// import { BsCartFill } from "react-icons/bs";
import { HiOutlineShoppingCart } from "react-icons/hi2";

function Header() {

    const[showManu,setShowMenu] = useState(false);
    const handleShowMenu = ()=> {
        setShowMenu(preve => !preve)
    }

  return (
    <header className='fixed shadow-md w-full h-12 px-2 md:px-4 z-50'>
        {/* desktop */}
        <div className='flex items-center h-full justify-between'>
            <Link to={""}>
            <div className='items-center justify-centerh-10'>
                <p className='text-black font-sans font-bold h-full'>CampPro</p>
            </div>
            </Link>

            <div className='flex items-center gap-4 md:gap-7'>
                <nav className='flex gap-4 md:gap-6 text-base md:text-lg'>
                    <Link to={""}>Home</Link>
                    <Link to={"product"}>Product</Link>
                    <Link to={"about"}>About</Link>
                    <Link to={"contact"}>Contact</Link>
                </nav>

                <div className='text-2xl text-gray-400 relative'>
                    <HiOutlineShoppingCart />
                    <div className='absolute -top-1 -right-0 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center'>0</div>
                </div>

                <div className=' text-gray-400 bg-gray-100  rounded-full '>
                    <div className='text-2xl cursor-pointer' onClick={handleShowMenu}>
                    <FaUserCircle />
                    </div>

                    {( showManu && <div className='absolute right-2 bg-white py-2 px-2 shadow drop-shadow-md'>
                        <p className='whitespace-nowrap cursor-pointer'>New Product</p>
                        <p className='whitespace-nowrap cursor-pointer'>Login</p>
                        </div>
                    )}

                    
                
                </div>
            </div>

        </div>

{/* 41 */}

        {/* mobile */}

    </header>
  )
}

export default Header;