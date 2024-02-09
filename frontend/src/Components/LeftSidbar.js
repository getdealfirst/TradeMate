import React from 'react'
import { NavLink } from 'react-router-dom'

function LeftSidbar(props) {
  return (
    <div>
      <div className=' border border-gray-100'>
        <NavLink className={`border border-gray-100 justify-center flex font-${props.opendash} hover:border-gray-300 hover:font-semibold hover:bg-gray-100`} to="/dashboard">Dashboard</NavLink>
        <NavLink className={`border border-gray-100 justify-center flex font-${props.addSale} hover:border-gray-300 hover:font-semibold hover:bg-gray-100`} to='/addsale'>Add Sales</NavLink>
        <NavLink className={`border border-gray-100 justify-center flex font-${props.openpurchase} hover:border-gray-300 hover:font-semibold hover:bg-gray-100`} to='/addpurchase'>Add Purchase</NavLink>
        <NavLink className={`border border-gray-100 justify-center flex font-${props.addpurchase} hover:border-gray-300 hover:font-semibold hover:bg-gray-100`} to='/addproduct'>Add Products</NavLink>
        <NavLink className={`border border-gray-100 justify-center flex font-${props.openexpence} hover:border-gray-300 hover:font-semibold hover:bg-gray-100`} to='/addexpense'>Add Expences</NavLink>
        <NavLink className={`border border-gray-100 justify-center flex font-${props.openaddcustomer} hover:border-gray-300 hover:font-semibold hover:bg-gray-100`} to='/addcustomer'>Add Customers</NavLink>
        <NavLink className={`border border-gray-100 justify-center flex font-${props.openemployee} hover:border-gray-300 hover:font-semibold hover:bg-gray-100`} to='/addEmployee'>Add Employee</NavLink>
        </div>
    </div>
  )
}

export default LeftSidbar
