import React from 'react'
import LeftSidbar from './LeftSidbar'
import RightSidebar from './RightSidebar'

function Profits() {
    return (
        <div>
            <div><h1 className='flex justify-center text-3xl font-bold  text-green-600'>Profits </h1></div>
            <div className='gridstyle grid grid-cols-4'>
                <LeftSidbar  />
                <div className='border border-gray-100 justify-center col-span-2'>
                    <div className='flex '>
                        <div className='flex  flex-col  w-60 h-40 m-2   border border-green-600 rounded-xl'>
                            <div className=" text-green-600 font-bold border  border-x-2 h-10 flex justify-center items-center shadow-lg w-full rounded-xl">Profit of Current Month</div>
                            <div className="flex justify-center m-6 font-bold text-green-600">Profit value</div>
                        </div>
                        <div className='flex  flex-col  w-60 h-40 m-2   border border-green-600 rounded-xl '>
                            <div className=" text-green-600 font-bold border  border-x-2 h-10 flex justify-center items-center shadow-lg w-full rounded-xl">Profit of Current Month</div>
                            <div className="flex justify-center m-6 font-bold text-green-600">Profit value</div>
                        </div>
                        <div className='flex  flex-col  w-60 h-40 m-2   border border-green-600 rounded-xl'>
                            <div className=" text-green-600 font-bold border  border-x-2 h-10 flex justify-center items-center shadow-lg w-full rounded-xl">Profit of Current Month</div>
                            <div className="flex justify-center m-6 font-bold text-green-600">Profit value</div>
                        </div>
                    </div>
                </div>
                <div className='border border-gray-100 justify-center'>
                    <RightSidebar />
                </div>
            </div>
        </div>
    )
}

export default Profits
