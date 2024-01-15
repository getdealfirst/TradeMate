import React from 'react'
import Signin from './Signin'
import Carasoul from './Carasoul'


function Home() {
    return (
        <div className="container flex justify-center m-10 flex-col">
            <div className='text-3xl flex justify-center'>
                Welcome to <spna className='text-semibold'>Trade</spna><span className='text-red-400 font-bold'>Mate</span>
            </div>
            <div className='grid grid-cols-2 m-10'>
                <div className="col1 flex justify-between p-12 flex-wrap">
                    <Carasoul/>
                    <Carasoul/>
                   
                </div>
                <div className="col2 pr-20 pt-15">
                    <div className="signintag flex flex-col text-3xl justify-center pl-32 py-10 ">Sign in to your Account</div>
                   <Signin/>
                </div>
            </div>
        </div>
    )
}

export default Home
