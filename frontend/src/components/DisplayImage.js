import React, { useEffect } from 'react'
import { IoIosCloseCircle } from "react-icons/io";

const DisplayImage = ({ imgUrl, onClose }) => {
    useEffect(() => {
        console.log('imgUrl', imgUrl)
    }, []);
    return (
        <div className='fixed bottom-0 top-0 left-0 right-0 flex justify-center items-center'>
            <div className='bg-white shadow-lg rounded max-w-5xl mx-auto p-4'>
                <button className='w-fit ml-auto  text-2xl hover:text-red-600 cursor-pointer' onClick={onClose}>
                    <IoIosCloseCircle />
                </button>
                <div className='flex justify-center max-w-3xl items-center p-4 max-h-lvh'>
                    <img src={imgUrl} className='w-full h-full' />
                </div>
            </div>

        </div>

    )
}

export default DisplayImage
