import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import LeftSidbar from './LeftSidbar';
import RightSidebar from './RightSidebar';

function ProductLists() {
    const [productDetailss, setProductDetails] = useState([])
    useEffect(() => {
        loadProducts();
    }, [])
    const loadProducts = async () => {
        const productDetails = await axios.get("http://localhost:8080/stock/all", {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('login') ? JSON.parse(localStorage.getItem('login')).token : ""}`
            }
        });
        setProductDetails(productDetails.data.reverse())
    }

    return (
        <div className=' px-10'>
<div className='gridstyle grid grid-cols-4'>
<LeftSidbar />
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg col-span-2">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-white bg-gray-400 ">
                                Sn. No.
                            </th>
                            <th scope="col" className="px-6 py-3 text-white bg-gray-400">
                                Item Name
                            </th>
                            <th scope="col" className="px-6 py-3 text-white bg-gray-400">
                                Purchase Price
                            </th>
                            <th scope="col" className="px-6 py-3  text-white bg-gray-400">
                                Category
                            </th>

                            <th scope="col" className="px-6 py-3 text-white bg-gray-400 flex justify-center">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    {productDetailss.reverse().map((productDetails, index) => (
                        <tbody key={index + 1} className='border border-x-2 my-10'>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <th scope="row" className="border border-x-2 px-6 py-2 font-medium text-green-600 bg-white align-center">
                                    {index + 1}
                                </th>
                                <th scope="row" className="border border-x-2 px-6 py-2 font-medium text-green-600 bg-white align-center">
                                    {productDetails.itemName}
                                </th>
                                <td className="border border-x-2 px-6 py-2 font-medium text-green-600 bg-white align-center">
                                    {productDetails.purchasePrice}
                                </td>
                                <td className="border border-x-2 px-6 py-2 font-medium text-green-600 bg-white align-center">
                                    {productDetails.category}
                                </td>

                                <td className="border border-x-2 px-6 py-2 font-medium text-green-600 bg-white align-center flex justify-center items-center">
                                    <NavLink className='border border-x-2 py-2 px-4 rounded-xl bg-red-300 hover:bg-green-600 hover:text-white transition-all' to={`/updateproduct/${productDetails.itemName}`}>Update Price</NavLink>
                                </td>
                            </tr>

                        </tbody>
                    ))}
                </table>
            </div>
            <RightSidebar/>
            </div>
        </div>
    )
}

export default ProductLists
