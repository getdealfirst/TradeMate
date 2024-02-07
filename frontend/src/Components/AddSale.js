import React, { useState } from 'react'
import LeftSidbar from './LeftSidbar'
import RightSidebar from './RightSidebar'

function AddSale() {
    const [saleDetail, setSaleDetail] = useState({
        productName: "",
        quantity: 0,
        date: null,
        customerName: "",
        rate: 0,
        receivedAmmount: 0
    })
    const onEventChange = (e) => {
        setSaleDetail({
            ...saleDetail,
            [e.target.name]: e.target.value
        })
       
    }
    const handleOnSubmit = (e)=>{
        e.preventDefault()
    fetch('http://localhost:8080/sales/addSale',{
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization':`Bearer ${JSON.parse(localStorage.getItem('login')).token}`
          },
          body:JSON.stringify(saleDetail)
    }).then((resp)=>{
        console.log(resp)
    })
    }
    return (
        <div>
            <div><h1 className='flex justify-center text-3xl font-bold  text-green-600'>Sale Entry</h1></div>
            <div className='gridstyle grid grid-cols-4'>
                <LeftSidbar addSale="bold" />
                <div className='border border-gray-100 justify-center col-span-2'>
                    <form className="space-y-6 px-40 py-2" onSubmit={(e)=>handleOnSubmit(e)}>
                        <div>
                            <label for="Item Name" className="block text-sm font-medium leading-6 text-gray-900">Enter Product name</label>
                            <input value={saleDetail.productName} onChange={(e) => onEventChange(e)} id="itemName" list='itemList' name="productName" type="text" required className="block w-full rounded-md p-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                        <datalist name="itemList" id="itemList" >
                            <option name="item1" id="item1" className='text-red-600'>item1</option>
                            <option name="item2" id="item2">item2</option>
                            <option name="item3" id="item3">item3</option>
                        </datalist>

                        <div>
                            <div className="flex items-center justify-between">
                                <label for="Quantity" className="block text-sm font-medium leading-6 text-gray-900">Quantity</label>
                            </div>
                            <div className="mt-2">
                                <input value={saleDetail.quantity} onChange={(e) => onEventChange(e)} id="quantity" name="quantity" type="number" min='1' required className="block w-full rounded-md p-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label for="date" className="block text-sm font-medium leading-6 text-gray-900">Date</label>
                            </div>
                            <div className="mt-2">
                                <input value={saleDetail.date} onChange={(e) => onEventChange(e)} id="date" name="date" type="date" className="block w-full rounded-md p-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <label for="Item Name" className="block text-sm font-medium leading-6 text-gray-900">Enter Customer's name</label>
                            <input value={saleDetail.customerName} onChange={(e) => onEventChange(e)} id="itemName" list='customerList' name="customerName" type="text" required className="block w-full rounded-md p-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                        <datalist name="itemList" id="customerList" >
                            <option name="customer1" id="item1">customer1</option>
                            <option name="customer2" id="item2">customer2</option>
                            <option name="customer3" id="item3">customer3</option>
                        </datalist>
                        <div>
                            <div className="flex items-center justify-between">
                                <label for="ammount" className="block text-sm font-medium leading-6 text-gray-900">Rate</label>
                            </div>
                            <div className="mt-2">
                                <input value={saleDetail.rate} onChange={(e) => onEventChange(e)} id="amount" name="rate" type="number" min='0' required className="block w-full rounded-md p-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Received Ammount</label>
                            </div>
                            <div className="mt-2">
                                <input value={saleDetail.receivedAmmount} onChange={(e) => onEventChange(e)} id="amount" name="receivedAmmount" type="number" min='0' required className="block w-full rounded-md p-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add Sale</button>
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
