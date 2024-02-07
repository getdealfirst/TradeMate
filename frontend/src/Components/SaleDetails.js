import axios from 'axios'
import React, { useEffect, useState } from 'react'

function SaleDetails() {
    const [saleDetails,setSaleDetails] = useState([])
    useEffect(()=>{
     loadUser();
    },[])
  const loadUser =async ()=>{
    const saleDetail= await axios.get("http://localhost:8080/sales/allsaledetails",{
        headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('login')).token}`
          }
    });
    setSaleDetails(saleDetail.data.reverse())
    // console.log(saleDetail.data.reverse())
  } 
  return (
    <div className=' px-10'>
     

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3 text-white bg-gray-400">
                    Customer Name
                </th>
                <th scope="col" className="px-6 py-3 text-white bg-gray-400">
                    Product 
                </th>
                <th scope="col" className="px-6 py-3  text-white bg-gray-400">
                    Quantity 
               </th>
                <th scope="col" className="px-6 py-3 text-white bg-gray-400">
                    Total Ammount
                </th>
                <th scope="col" className="px-6 py-3 text-white bg-gray-400">
                   Received Ammount                </th>
                <th scope="col" className="px-6 py-3 text-white bg-gray-400">
                    Date
                </th>
                <th scope="col" className="px-6 py-3 text-white bg-gray-400">
                    Remaining
                </th>
                <th scope="col" className="px-6 py-3 text-white bg-gray-400">
                    Actions
                </th>
            </tr>
        </thead>
        {saleDetails.reverse().map((saleDetail,index)=>(
            <tbody key = {saleDetail.id} className='border border-x-2 my-10'>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className={` px-6 py-2 font-medium ${saleDetail.remaining>0?'text-white':'text-green-600'} ${saleDetail.remaining>0?'bg-red-600':'bg-white'} align-center`}>
                   {saleDetail.customerName}
                </th>
                <td className={` px-6 py-2 font-medium ${saleDetail.remaining>0?'text-white':'text-green-600'} ${saleDetail.remaining>0?'bg-red-600':'bg-white'} align-center`}>
                    {saleDetail.productName}
                </td>
                <td className={` px-6 py-2 font-medium ${saleDetail.remaining>0?'text-white':'text-green-600'} ${saleDetail.remaining>0?'bg-red-600':'bg-white'} align-center`}>
                    {saleDetail.quantity}
                </td>
                <td className={` px-6 py-2 font-medium ${saleDetail.remaining>0?'text-white':'text-green-600'} ${saleDetail.remaining>0?'bg-red-600':'bg-white'} align-center `}>
                    {saleDetail.totalAmmount}
                </td>
                <td className={` px-6 py-2 font-medium ${saleDetail.remaining>0?'text-white':'text-green-600'} ${saleDetail.remaining>0?'bg-red-600':'bg-white'} align-center`}>
                   {saleDetail.receivedAmmount}
                </td>
                <td className={` px-6 py-2 font-medium ${saleDetail.remaining>0?'text-white':'text-green-600'} ${saleDetail.remaining>0?'bg-red-600':'bg-white'} align-center`}>
                    {saleDetail.date}
                </td>
                <td className={` px-6 py-2 font-medium ${saleDetail.remaining>0?'text-white':'text-green-600'} ${saleDetail.remaining>0?'bg-red-600':'bg-white'} align-center`}>
                    {saleDetail.remaining}
                </td>
                <td className={` px-6 py-2 font-medium ${saleDetail.remaining>0?'text-white':'text-green-600'} ${saleDetail.remaining>0?'bg-red-600':'bg-white'} align-center`}>
                    <button className='border border-x-2 py-2 px-4 rounded-xl bg-red-300 hover:bg-green-600 hover:text-white transition-all'>Edit</button>
                    <button className='border border-x-2 py-2 px-4 rounded-xl m-1 bg-red-300 hover:bg-green-600 hover:text-white transition-all'>Delete</button>
                </td>
            </tr>
            
        </tbody>
        ))}
    </table>
</div>

    </div>
  )
}

export default SaleDetails
