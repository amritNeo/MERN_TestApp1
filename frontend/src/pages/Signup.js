import React, { useState } from 'react'
import loginIcon from '../assest/signin.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import imageToBase64 from '../helper/ImageToBase64';
import summaryAPI from '../common';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [data, setData] = useState({
        photo:"",
        name:"",
        email: "",
        password: "",
        confirmPassword:""
    })
    const navigate = useNavigate();

    const handleOnChange = (e) => {
        const { name, value } = e.target
        setData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault(); //avoid page refresh

        //check if password and confirm password is same
        if(data.password === data.confirmPassword){

            //do the api call
            const apiResponse =  await fetch(summaryAPI.signup.url, {
                method: summaryAPI.signup.method,
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify(data)
            })
            //convert the response 
            const resp =  await apiResponse.json();
            console.log(resp);
            if(resp.success){
                //on success show toast and navigate to login page
                toast.success(resp.message)
                navigate('/login')
            }
            if(resp.error){
                toast.error(resp.message)
            }
        }else{
            toast.error("check password and confirm password");
        }


    }

    const handleUploadPic = async (e) => {
        const file = e.target.files[0];
        console.log(file);

        const imgPic = await imageToBase64(file);
        console.log(imgPic);

        setData((prev)=>{
            return{
                ...prev,
                photo : imgPic
            }
        })
    }

    return (
        <section id="signup">
            <div className='mx-auto container px-4'>
                <div className='bg-slate-400 p-2  py-5 w-full max-w-md mx-auto '>
                    <div className='w-20 h-20  mx-auto relative overflow-hidden rounded-full'>
                        <div>
                        <img src={data?.photo || loginIcon} alt='login icon' />
                        </div>
                        <form>
                            <label>
                            <div className='text-xs bg-opacity-80 pb-4 pt-2 cursor-pointer   text-center bg-slate-200 absolute bottom-0 w-full'>
                            Upload Photo
                        </div>
                                <input type='file' className='hidden' onChange={handleUploadPic}/>
                            </label>
                        </form>
                        
                    </div>

                    <form onSubmit={handleSubmit} className='pt-0 flex flex-col gap-2'>
                    <div className=''>
                            <label>Name : </label>
                            <div className='bg-slate-100 p-2'>
                                <input type='text'
                                    onChange={handleOnChange}
                                    name='name'
                                    required
                                    value={data.name}
                                    placeholder='Add your name'
                                    className='w-full h-full outline-none bg-transparent' />
                            </div>
                        </div>
                        <div className=''>
                            <label>Email : </label>
                            <div className='bg-slate-100 p-2'>
                                <input type='email'
                                    onChange={handleOnChange}
                                    name='email'
                                    required
                                    value={data.email}
                                    placeholder='add proper email address'
                                    className='w-full h-full outline-none bg-transparent' />
                            </div>
                        </div>
                        <div>
                            <label>Password : </label>
                            <div className='bg-slate-100 p-2 flex'>
                                <input type={showPassword ? "text" : "password"}
                                    placeholder='add password'
                                    name='password'
                                    required
                                    value={data.password}
                                    onChange={handleOnChange}
                                    className='w-full h-full outline-none bg-transparent' />
                                <div className='cursor-pointer' onClick={() => setShowPassword((prev) => !prev)}>
                                    <span>
                                        {
                                            showPassword ? (<FaEyeSlash />) : (<FaEye />)
                                        }
                                    </span>
                                </div>

                            </div>
                        </div>
                        <div>
                            <label>Confirm Password : </label>
                            <div className='bg-slate-100 p-2 flex'>
                                <input type={showConfirmPassword ? "text" : "password"}
                                    placeholder='confirm password'
                                    name='confirmPassword'
                                    value={data.confirmPassword}
                                    onChange={handleOnChange}
                                    className='w-full h-full outline-none bg-transparent' />
                                <div className='cursor-pointer' onClick={() => setShowConfirmPassword((prev) => !prev)}>
                                    <span>
                                        {
                                            showConfirmPassword ? (<FaEyeSlash />) : (<FaEye />)
                                        }
                                    </span>
                                </div>

                            </div>
                        </div>
                       
                        <div className='flex justify-center'>
                            <button type='submit'
                                className='cursor-pointer bg-red-700 text-yellow-400 w-full max-w-[150px] px-10 py-2 my-5 rounded-full hover:scale-110'> Sign Up</button>
                        </div>


                    </form>
                    <div className=''>
                        <p className=''>
                                    Already have account? 
                                    <Link to={'/login'} className='text-sm  hover:underline hover:text-red-500'>
                                        Login
                        </Link>
                        </p>
                       
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signup
