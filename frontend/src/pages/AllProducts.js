import React, { useState } from 'react'
import UploadProducts from '../components/UploadProducts'

const AllProducts = () => {

  const [openUploadProductPopup, setpenUploadProductPopup] = useState(false)

  return (
    <div>
      <div className='bg-white py-4 flex justify-between items-center'>
        <h2 className='font-bold text-lg'>All products</h2>
        <buttton className="cursor-pointer rounded-full py-2 px-4 bg-slate-800 text-yellow-50" onClick={()=> setpenUploadProductPopup(prev => !prev)}>Upload</buttton>
      </div>

      {openUploadProductPopup && <UploadProducts onClose={()=> setpenUploadProductPopup(false)}/>}
      
    </div>
  )
}

export default AllProducts
