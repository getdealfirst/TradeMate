import React from 'react'
import Navigationbuttons from './Navigationbuttons'
import LeftSidbar from './LeftSidbar'
import RightSidebar from './RightSidebar'
import Home from './Home'

function Dashboard() {
    let store = JSON.parse(localStorage.getItem('login'))
    return (
        <>
        {store?<div>
            <div><h1 className='flex justify-center text-3xl text-gray-800'>Welcome to TradeMate</h1></div>
            <div className='gridstyle grid grid-cols-4'>

                <LeftSidbar opendash="bold"/>
                <div className='border border-gray-100 justify-center col-span-2'>
                    <Navigationbuttons />

                </div>
                <div className='border border-gray-100 justify-center'>
                    <RightSidebar />
                </div>
            </div>
        </div>:<Home/>}
        </>
    )
}

export default Dashboard
