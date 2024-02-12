import React, { useEffect, useState } from 'react'
import LeftSidbar from './LeftSidbar'
import RightSidebar from './RightSidebar'

function AddProduct() {
    useEffect(() => {
        loadUser()
    }, [])
    const [uploadStatus, setUploadStatus] = useState("")
    const [id, setId] = useState(0)
    const [email, setEmail] = useState({
        email: JSON.parse(localStorage.getItem('login')).user
    })
    const [itemDetail, setItemDetail] = useState({
        itemName: '',
        purchasePrice: 0,
        category: '',
        user: {
            id: 0
        },
        usersId: id
    })
    const upStatus = () => {
        setUploadStatus("Item Added ")
        setTimeout(() => {
            setUploadStatus("")
        }, 3000);
    }
    const failStatus = () => {
        setUploadStatus("Something went wrong")
        setTimeout(() => {
            setUploadStatus("")
        }, 3000);
    }
    const handleOnChange = (e) => {
        const { name, value } = e.target
        setItemDetail(prevState => ({
            ...prevState,
            [name]: value,
            usersId: id
        }))
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:8080/stock/add', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('login') ? JSON.parse(localStorage.getItem('login')).token : ""}`
            },
            body: JSON.stringify(itemDetail)
        })
            .then((resp) => {
                if (!resp.ok) {
                    throw new Error('Failed to add stock item');
                }
                console.log(resp.ok);
                setItemDetail({
                    itemName: '',
                    purchasePrice: 0,
                    category: '',
                    user: {
                        id: 0
                    },
                    usersId: id
                })
                upStatus()
            })
            .catch((error) => {
                console.error('Error:', error);
                // Handle error
                failStatus()
            });
    };

    const loadUser = () => {
        fetch(`http://localhost:8080/user/byemail`, {
            "method": "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('login') ? JSON.parse(localStorage.getItem('login')).token : ""}`
            },
            body: JSON.stringify(email)

        }).then((resp) => {
            if (!resp.ok) {
                throw new Error('Failed to add stock item');
            }
            resp.json().then((result) => {
                console.log("result :-", result.id)
                setId(result.id)
            })
        })
    }
    return (
        <div>
            <div><h1 className='flex justify-center text-3xl font-bold  text-green-600'>Add new Product</h1></div>
            <div className='gridstyle grid grid-cols-4'>
                <LeftSidbar addpurchase="bold" />
                <div className='border border-gray-100 justify-center col-span-2'>
                    <form className="space-y-6 px-40 py-2" onSubmit={(e) => handleOnSubmit(e)}>
                        <div>
                            <label for="Item Name" className="block text-sm font-medium leading-6 text-gray-900">Enter Product name</label>
                            <input id="itemName" value={itemDetail.itemName} onChange={(e) => handleOnChange(e)} name="itemName" type="text" required className="block w-full rounded-md p-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Purchase Price</label>
                            </div>
                            <div className="mt-2">
                                <input id="price" value={itemDetail.purchasePrice} onChange={(e) => handleOnChange(e)} name="purchasePrice" type="number" min='0' required className="block w-full rounded-md p-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div className='fixed flex items-center ml-40 font-bold text-5xl text-green-600'>{uploadStatus}</div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Category</label>
                            </div>
                            <div className="mt-2">
                                <input id="producttype" value={itemDetail.category} onChange={(e) => handleOnChange(e)} name="category" type="text" required className="block w-full rounded-md p-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add Product</button>
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

export default AddProduct
