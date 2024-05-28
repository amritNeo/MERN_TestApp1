import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FaUser } from "react-icons/fa";
import { Link, Outlet, useNavigate } from 'react-router-dom';

const AdminPanel = () => {
    const user = useSelector(state => state.user?.user)

    return (
        <div className='min-h-[calc(100vh-120px)] bg-slate-400 flex'>
            <aside className='bg-red-300 min-h-full w-full max-w-60 shadow-rose-800'>
                <div className='h-32 bg-red-700  flex justify-center items-center flex-col'>
                    <div className='text-5xl cursor-pointer relative'>
                        {
                            user?.data?.photo ? (
                                <img src={user.data.photo} className='w20 h-20 rounded-full' alt={user?.data.name} />
                            ) : (<FaUser />)
                        }
                    </div>
                    <p className=' text-lg font-semibold capitalize'> {user?.data?.name}</p>
                    <p className=' text-lg font-semibold capitalize'> {user?.data?.role}</p>
                </div>

                    <div>
                        <nav className='grid'>
                            <Link to={"all-users"} className='p-2 cursor-pointer hover:bg-slate-500'>All Users</Link>
                            <Link to={"products"} className='p-2 cursor-pointer hover:bg-slate-500'>Products</Link>
                        </nav>
                    </div>

            </aside>
            <main className='w-full h-full p-4'>
                <Outlet></Outlet>
            </main>
        </div>
    )
}

export default AdminPanel
