import React from 'react'
import Logo from './Logo'
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header className='h-16 shadow-md bg-white'>
            <div className='h-full container mx-auto flex items-center px-4 justify-between'>
                <div className='cursor-pointer'>
                    <Link to={"/"}>
                        <Logo w={90} h={50} />
                    </Link>
                </div>

                <div className='flex items-center w-full justify-between max-w-sm  pl-2'>
                    <input type="text" placeholder='search product here...' className='w-full outline-none'></input>
                    <div className='text-lg w-14 h-8 flex items-center justify-center rounded-e-full  bg-red-500'><CiSearch /></div>
                </div>

                <div className='flex items-center gap-4'>
                    <div className='text-3xl cursor-pointer'>
                        <CiShoppingCart />
                    </div>
                    <div className='text-2xl cursor-pointer relative'>
                        <span>     <FaUser /></span>
                        <div className='bg-red-400 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-2'>
                            <p className='text-xs'>0</p>
                        </div>
                    </div>

                    <div>
                        <Link to={"/login"}>
                            <button className='px-3 py-1 rounded-full bg-red-700 text-yellow-200 hover:bg-red-400'>Login</button>
                        </Link>

                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header
