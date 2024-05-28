import React, { useState } from 'react'
import ROLE from '../common/role'
import { IoIosCloseCircle } from "react-icons/io";
import summaryAPI from '../common';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChangeUserRole = ({ name, email, onClose, userId,callfunc }) => {

    const [userRole, setUserRole] = useState("")

    const handleOnChangeSelect = (e) => {
        console.log(e.target);
        setUserRole(e.target.value)
    }

    const updateUserRole = async () => {
        const apiResponse =  await fetch(summaryAPI.updateUser.url, {
            method: summaryAPI.updateUser.method,
            credentials:'include',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify({
                role : userRole,
                userId: userId
            })
        })
        //convert the response 
        const resp =  await apiResponse.json();
        console.log("updateUserRole",resp)

        if(resp.success){
            toast.success(resp.message)
            onClose()
            callfunc()
        }
    }   

    return (
        <div className='fixed top-0 bottom-0 left-0 
    right-0 w-full h-full z-10 flex justify-between  items-center bg-black bg-opacity-50'>
            <div className='mx-auto bg-gray-400 shadow-sm w-full max-w-sm p-5'>
                <button className='ml-auto block' onClick={onClose}>
                    <IoIosCloseCircle />

                </button>
                <p className='pb-4 '>Change User Role</p>

                <p className=' '>Name : {name}</p>
                <p className=' '>Email : {email}</p>
                <div className='flex items-center justify-between'>
                    <p className=' '>Role</p>
                    <select className='border px-4 py-1' value={userRole} onChange={handleOnChangeSelect}>
                        {
                            Object.values(ROLE).map(el => {
                                return (
                                    <option value={el} key={el}>{el}</option>
                                )
                            })
                        }

                    </select>
                </div>
                <button onClick={updateUserRole}
                 className='w-fit mx-auto block border py-1 px-4 rounded-full bg-red-500 text-white'>Change Role</button>
            </div>

        </div>
    )
}

export default ChangeUserRole
