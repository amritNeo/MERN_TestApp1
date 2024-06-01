import React, { useState } from 'react'
import { IoIosCloseCircle } from "react-icons/io";
import productCategory from '../helper/productCategory';
import { FaCloudUploadAlt } from "react-icons/fa";
import uploadImage from '../helper/uploadImage';
import DisplayImage from './DisplayImage';
import { MdDelete } from "react-icons/md";


const UploadProducts = ({
    onClose
}) => {
    const [data, setData] = useState({
        productName: "",
        brandName: "",
        category: "",
        productImage: [],
        description: "",
        price: "",
        sellingPrice: ""
    })
    const [openfullScreenimage, setOpenfullScreenimage] = useState(false)
    const [fullScreenImage, setFullScreenImage] = useState("")
    const [uploadProductImageInput, setUploadProductImageInput] = useState("")

    const handleOnChange = (e) => {
        const { name, value } = e.target
        setData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    const handleUpload = async (e) => {
        const file = e.target.files[0]
        console.log("file: ", file)
        setUploadProductImageInput(file.name)

        const uploadImaheClundanary = await uploadImage(file);
        console.log("uploadImaheClundanary", uploadImaheClundanary.url)

        setData((prev) => {
            return {
                ...prev,
                productImage: [...prev.productImage, uploadImaheClundanary.url]
            }
        })

    }
    const deletePhoto = async (el, index) => {
        console.log("image index", index)
        const newProductImage = [...data.productImage];
        newProductImage.splice(index, 1)
        setData((prev) => {
            return {
                ...prev,
                productImage: [...newProductImage]
            }
        })
    }
    return (
        <div className='fixed w-full h-full bg-black opacity-80 top-0 left-0 right-0 bottom-0 flex justify-center items-center'>
            <div className='bg-white p-4 w-full max-w-2xl h-full max-h-[80%] overflow-hidden'>

                <div className='flex justify-center items-center'>
                    <h2 className='font-bold text-lg'>UploadProducts</h2>
                    <button className='w-fit ml-auto' onClick={onClose}>
                        <IoIosCloseCircle />
                    </button>
                </div>
                <form className='grid p-4 gap-1 overflow-y-scroll pb-20'>
                    <label htmlFor='productName'>Product Name : </label>
                    <input type='text' id='productName' placeholder='enter product name'
                        value={data.productName} onChange={handleOnChange} name="productName" className='p-2 bg-slate-100 border rounded' />

                    <label htmlFor='productName mt-3'>Brand Name : </label>
                    <input type='text' id='brandName' placeholder='enter brand name'
                        value={data.brandName} onChange={handleOnChange} name="brandName" className='p-2 bg-slate-100 border rounded' />

                    <label htmlFor='productName mt-3'>Category : </label>
                    <select value={data.category} className='p-2 bg-slate-100 brder rounded'>
                        {
                            productCategory.map((el, index) => {
                                return (
                                    <option value={el.value} key={el.value + index}>{el.label}</option>
                                )
                            })
                        }
                    </select>

                    <label htmlFor='productName mt-3'>Product Image : </label>
                    <div className='p-2 bg-slate-100 border rounded h-32 w-full flex justify-center items-center cursor-pointer'>
                        <label htmlFor='uploadImageInput'>
                            <div className='text-slate-500 flex flex-col justify-center items-center'>
                                <span className='text-2xl'> <FaCloudUploadAlt /></span>
                                <p className='text-sm mt-2'>Upload Product Image</p>
                                <input type='file' id="uploadImageInput" className='hidden' onChange={handleUpload} />
                            </div>
                        </label>

                    </div>
                    <div>
                        {
                            data?.productImage[0] ? (
                                <div className='flex items-center gap-2'>{
                                    data.productImage.map((el, index) => {
                                        return (
                                            <div className='relative group '>

                                                <img src={el} alt="show uplaoded files" width={60} height={60} className='bg-slate-100 cursor-pointer border' onClick={() => {
                                                    console.log(el)
                                                    setFullScreenImage(el)
                                                    setOpenfullScreenimage(true)
                                                }} />
                                                <div className='cursor-pointer absolute bottom-0 right-0 p-1 text-white bg-red-600 rounded-full hidden group-hover:block' onClick={() => deletePhoto(el, index)}> <MdDelete /></div>
                                            </div>

                                        )
                                    })
                                }
                                </div>
                            ) : (
                                <p className='text-red-600 text-xs'>*Please ppload product image</p>
                            )
                        }
                    </div>


                    <label htmlFor='price mt-3'>Price Image : </label>
                    <input type='number' id='price' placeholder='enter price'
                        value={data.price} onChange={handleOnChange} name="price" className='p-2 bg-slate-100 border rounded' />

                    <label htmlFor='sellingPrice mt-3'>Selling Price  : </label>
                    <input type='number' id='sellingPrice' placeholder='enter sellingPrice'
                        value={data.sellingPrice} onChange={handleOnChange} name="sellingPrice" className='p-2 bg-slate-100 border rounded' />

                    <label htmlFor='sellingPrice mt-3'>Description : </label>
                    <textarea className='' rows={3}></textarea>


                    <button className='px-2 py-2 bg-red-600 text-white mb-2 hover:bg-red-700 rounded-full'>Upload Product</button>
                </form>


            </div>

            {/**display image full screee */}
            {
                openfullScreenimage && (<DisplayImage onClose={() => setOpenfullScreenimage(false)} imgUrl={fullScreenImage} />)
            }

        </div>
    )
}

export default UploadProducts
