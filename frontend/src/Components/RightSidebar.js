import React from 'react'
import { NavLink } from 'react-router-dom'

function RightSidebar() {
    return (
        <div>
            <div className=' border border-gray-100'>
                <NavLink className='border border-gray-100 justify-center flex hover:border-gray-300 hover:font-semibold hover:bg-gray-100' to='/addsale'>Help</NavLink>
                <NavLink className='border border-gray-100 justify-center flex hover:border-gray-300 hover:font-semibold hover:bg-gray-100'>feedback</NavLink>
            </div>
        </div>
    )
}

export default RightSidebar
