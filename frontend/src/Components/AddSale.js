import React from 'react'
import LeftSidbar from './LeftSidbar'
import RightSidebar from './RightSidebar'

function AddSale() {
    return (
        <div>
            <div><h1 className='flex justify-center text-3xl font-bold  text-green-600'>Sale Entry</h1></div>
            <div className='gridstyle grid grid-cols-4'>
                <LeftSidbar addSale="bold" />
                <div className='border border-gray-100 justify-center col-span-2'>
                    <form class="space-y-6 px-40 py-2" action="/" method="POST">
                        <div>
                            <label for="Item Name" class="block text-sm font-medium leading-6 text-gray-900">Enter Product name</label>
                            <input id="itemName" list='itemList' name="itemName" type="text" required class="block w-full rounded-md p-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                        <datalist name="itemList" id="itemList" >
                            <option name="item1" id="item1" className='text-red-600'>item1</option>
                            <option name="item2" id="item2">item2</option>
                            <option name="item3" id="item3">item3</option>
                        </datalist>

                        <div>
                            <div class="flex items-center justify-between">
                                <label for="Quantity" class="block text-sm font-medium leading-6 text-gray-900">Quantity</label>
                            </div>
                            <div class="mt-2">
                                <input id="quantity" name="quantity" type="number" min='0' required class="block w-full rounded-md p-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <div class="flex items-center justify-between">
                                <label for="date" class="block text-sm font-medium leading-6 text-gray-900">Date</label>
                            </div>
                            <div class="mt-2">
                                <input id="date" name="date" type="date"  class="block w-full rounded-md p-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <label for="Item Name" class="block text-sm font-medium leading-6 text-gray-900">Enter Customer's name</label>
                            <input id="itemName" list='customerList' name="itemName" type="text" required class="block w-full rounded-md p-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                        <datalist name="itemList" id="customerList" >
                            <option name="customer1" id="item1">customer1</option>
                            <option name="customer2" id="item2">customer2</option>
                            <option name="customer3" id="item3">customer3</option>
                        </datalist>
                        <div>
                            <div class="flex items-center justify-between">
                                <label for="ammount" class="block text-sm font-medium leading-6 text-gray-900">Total Ammount</label>
                            </div>
                            <div class="mt-2">
                                <input id="amount" name="amount" type="number" min='0' required class="block w-full rounded-md p-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <div class="flex items-center justify-between">
                                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Received Ammount</label>
                            </div>
                            <div class="mt-2">
                                <input id="amount" name="amount" type="number" min='0' required class="block w-full rounded-md p-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add Sale</button>
                        </div>
                    </form>

                </div>
                <div className='border border-gray-100 justify-center'>
                    <RightSidebar />
                </div>
            </div>
        </div>
    )
}

export default AddSale
