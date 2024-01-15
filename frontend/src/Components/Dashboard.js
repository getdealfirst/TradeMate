import React from 'react'
import Navigationbuttons from './Navigationbuttons'
import LeftSidbar from './LeftSidbar'
import RightSidebar from './RightSidebar'

function Dashboard() {
    return (
        <div>
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
        </div>
    )
}

export default Dashboard
