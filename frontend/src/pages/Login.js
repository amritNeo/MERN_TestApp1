import React, { useState } from 'react'
import loginIcon from '../assest/signin.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [data,setData]=useState({
        email:"",
        password:""
    })

    const handleOnChange = (e) =>{
        const {name, value} = e.target
        setData((prev)=>{
            return{
                ...prev,
                [name]:value
            }
        })
    }

    
    const handleSubmit = (e) =>{
       e.preventDefault(); //avoid page refresh

    }

    console.log("data loigin",data);
    return (
        <section id="login">
            <div className='mx-auto container px-4'>
                <div className='bg-slate-400 p-2  py-5 w-full max-w-md mx-auto '>
                    <div className='w-20 h-20 mx-auto'>
                        <img src={loginIcon} alt='login icon' />
                    </div>

                    <form onSubmit={handleSubmit} className='pt-0 flex flex-col gap-2'>
                        <div className=''>
                            <label>Email : </label>
                            <div className='bg-slate-100 p-2'>
                                <input type='email' 
                                onChange={handleOnChange}
                                name='email'
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
                                 value={data.password}
                                 onChange={handleOnChange}
                                 className='w-full h-full outline-none bg-transparent' />
                                <div className='cursor-pointer' onClick={()=>setShowPassword((prev)=>!prev)}>
                                    <span>
                                        {
                                            showPassword ? (<FaEyeSlash />) : (<FaEye />)
                                        }
                                    </span>
                                </div>

                            </div>
                        </div>
                        <Link to={'/forgot-password'} className='text-sm block w-fit ml-auto hover:underline hover:text-red-500'>
                                        Forgot Password?
                        </Link>
                        <div className='flex justify-center'>
                            <button type='submit'
                             className='cursor-pointer bg-red-700 text-yellow-400 w-full max-w-[150px] px-10 py-2 my-5 rounded-full hover:scale-110'> Login</button>
                        </div>


                    <div className=''>
                        <p className=''>
                                    Don't have account?
                                    <Link to={'/signup'} className='text-sm  hover:underline hover:text-red-500'>
                                        Signup Here
                        </Link>
                        </p>
                       
                    </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Login
