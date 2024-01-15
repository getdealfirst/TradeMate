import React from 'react'
import Carasoul from './Carasoul'
import Signin from './Signin'

function Signup() {
    return (
        <div className="container flex justify-center m-10 flex-col">
            <div className='text-3xl flex justify-center'>
                Welcome to <spna className='text-semibold'>Trade</spna><span className='text-red-400 font-bold'>Mate</span>
            </div>
            <div className='grid grid-cols-2 m-10'>
                <div className="col1 flex justify-between p-12 flex-wrap">
                    <Carasoul />
                    <Carasoul />

                </div>
                <div className="col2 pr-20 pt-15">
                    <div className="signintag flex flex-col text-3xl justify-center pl-32 py-10 ">Sign in to your Account</div>
                    <div>
                        <form class="space-y-6" action="#" method="POST">
                            <div>
                                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                                <div class="mt-2">
                                    <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div>
                                <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Enter Your Name</label>
                                <div class="mt-2">
                                    <input id="name" name="name" type="text" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div>
                                <div class="flex items-center justify-between">
                                    <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>

                                </div>
                                <div class="mt-2">
                                    <input id="password" name="password" type="password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div>
                                <div class="flex items-center justify-between">
                                    <label for="confirm password" class="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>

                                </div>
                                <div class="mt-2">
                                    <input id="confirm-password" name="confirm-password" type="password"  required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div>
                                <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
                            </div>
                            <div class="text-sm flex justify-end">
                                <p className='mx-2'>Allready have an account </p><a href="/" class="font-semibold text-indigo-600 hover:text-indigo-500 underline underline-offset-4">Sign in</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
