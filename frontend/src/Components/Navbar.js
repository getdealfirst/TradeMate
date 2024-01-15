import React from 'react'


function Navbar() {
  return (
   
   <div>
    <nav className="bg-white-800">
   <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
          <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            
            <a href="#" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" >Home</a>
            <a href="#" className="text-gray-500 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Dashboard</a>
            <a href="#" className="text-gray-500 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contact</a>
            <a href="#" className="text-gray-500 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About</a>
          </div>
        </div>
      </div>
    
        <div className="relative ml-3">
          <div>
            <button type="button" className="relative p-2 flex border hover:border-grey-500 hover:text-white rounded-xl hover:bg-gray-800 hover:font-medium" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              Sign In
            </button>
          </div>
      </div>
    </div>
  </div>
</nav>

   </div>
  )
}

export default Navbar
