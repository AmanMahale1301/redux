import React from 'react'
import { BrowserRouter ,Routes ,Route} from 'react-router-dom'
import Dashboard from '../../Pages/Dashboard/Dashboard'
import Inventory from '../../Pages/Inventory/Inventory'
import Orders from '../../Pages/Orders/Orders'
import Customer from '../../Pages/Customers/Customer'


const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/inventory' element={<Inventory/>}/>
      <Route path='/orders' element={<Orders/>}/>
      <Route path='/customers' element={<Customer/>}/>
    </Routes>
  )
}

export default Routing