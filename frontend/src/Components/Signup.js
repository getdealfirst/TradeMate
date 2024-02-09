import React, { useState } from 'react'
import Carasoul from './Carasoul'
import { useNavigate } from 'react-router-dom'


function Signup() {
    const navigate =useNavigate()
    const [singupDetails, setSingupDetails] = useState({
        name: '',
        email: '',
        password: ''
    })
    const handleOnSubmit=(e)=>{
        e.preventDefault()
        console.log("Submit button clicked")
        fetch('http://localhost:8080/auth/sign-up',{
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${localStorage.getItem('login')?JSON.parse(localStorage.getItem('login')).token:""}` 
              },
              body:JSON.stringify(singupDetails),
        }).then((resp)=>{
           if(resp.ok){
                navigate('/')
           }
           
        })
    }
    const handleOnChange=(e)=>{
setSingupDetails({
    ...singupDetails,
    [e.target.name]:e.target.value
})
    }
    return (
        <div className="container flex justify-center m-10 flex-col">
            <div className='text-3xl flex justify-center'>
                Welcome to <span className='text-semibold'>Trade</span><span className='text-red-400 font-bold'>Mate</span>
            </div>
            <div className='grid grid-cols-2 m-10'>
                <div className="col1 flex justify-between p-12 flex-wrap">
                    <Carasoul />
                    <Carasoul />

                </div>
                <div className="col2 pr-20 pt-15">
                    <div className="signintag flex flex-col text-3xl justify-center pl-32 py-10 ">Sign in to your Account</div>
                    <div>
                        <form className="space-y-6" onSubmit={(e)=>handleOnSubmit(e)}>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                                <div className="mt-2">
                                    <input id="email" value={singupDetails.email} onChange={(e)=>handleOnChange(e)} name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Enter Your Name</label>
                                <div className="mt-2">
                                    <input id="name" name="name" type="text" value={singupDetails.name} onChange={(e)=>handleOnChange(e)} autoComplete="email" required className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>

                                </div>
                                <div className="mt-2">
                                    <input id="password" name="password"  value={singupDetails.password} onChange={(e)=>handleOnChange(e)} type="password" required className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="confirm password" className="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>

                                </div>
                                <div className="mt-2">
                                    <input id="confirm-password" name="confirm-password" type="password" required className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            {/* <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="role" className="block text-sm font-medium leading-6 text-gray-900">Role</label>

                                </div>
                                <div className="mt-2">
                                    <input id="role" name="role" type="text" required className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div> */}

                            <div>
                                <button type="submit"  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 p-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
                            </div>
                            <div className="text-sm flex justify-end">
                                <p className='mx-2'>Allready have an account </p><a href="/" className="font-semibold text-indigo-600 hover:text-indigo-500 underline underline-offset-4">Sign in</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
