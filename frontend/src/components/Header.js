import React, { useState } from 'react'
import Logo from './Logo'
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import summaryAPI from '../common';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setUserDetails } from '../store/userSlice';

const Header = () => {

    const user = useSelector(state => state.user?.user)
    //console.log("user data",user)
    const navigate = useNavigate()
    const [adminPopup, setAdminPopup] = useState(false)
    const dispatch = useDispatch()

    const handleLogout = async () => {
        const goLogout = await fetch(summaryAPI.logout.url, {
            method: summaryAPI.logout.method,
            credentials: 'include'
        })

        const data = await goLogout.json()
        if (data.success) {
            toast.success(data.message)
            dispatch(setUserDetails(null))
            navigate('/login')
        }
        if (data.error) {
            toast.error(data.message)
        }
    }

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
                    <div className='relative group flex justify-center'>
                        <div className='text-2xl cursor-pointer relative flex justify-center' onClick={()=> setAdminPopup(prev => !prev)}>
                            {
                                user?.data?.photo ? (
                                    <img src={user.data.photo} className='w-10 h-10 rounded-full' alt={user?.data.name} />
                                ) : (<FaUser />)
                            }
                        </div>
                        {
                            adminPopup &&  <div className='absolute bg-white bottom-0 top-11 h-fit p-4 '>
                                <nav>
                                    <Link to={"admin-panel"} className='whitespace-nowrap hover:bg-slate-100 p-2' onClick={()=> setAdminPopup(prev => !prev)}>Admin Panel</Link>
                                </nav>
                            </div>
                        }

                    </div>


                    <div className='text-3xl cursor-pointer relative'>
                        <span> <CiShoppingCart /></span>
                        <div className='bg-red-400 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-2'>
                            <p className='text-xs'>0</p>
                        </div>
                    </div>

                    <div>
                        {
                            user?.data?._id ? (
                                <button onClick={handleLogout} className='px-3 py-1 rounded-full bg-red-700 text-yellow-200 hover:bg-red-400'>Logout</button>
                            ) : (<Link to={"/login"}>
                                <button className='px-3 py-1 rounded-full bg-red-700 text-yellow-200 hover:bg-red-400'>Login</button>
                            </Link>)
                        }


                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header
