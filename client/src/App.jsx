import { Route, Routes } from 'react-router-dom'
import './App.css'
import Seller from './pages/Seller'
import Orders from './pages/Orders'
import NotFound from './pages/NotFound'
import SingleOrder from './pages/SingleOrder'
import Login from './pages/Login'
import Register from './pages/Register'
import DashboardLayout from './components/DashboardLayout'
import Kyc from './pages/Kyc'
import PicupAddresses from './pages/PicupAddresses'
import PickupAddress from './components/form/PickupAddress'
import BulkOrder from './pages/BulkOrder'
import B2BOrder from './pages/B2BOrder'

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route element={<DashboardLayout />}>
          <Route path='/seller' element={<Seller />}/>
          <Route path='/seller/kyc' element={<Kyc />}/>
          <Route path='/seller/orders' element={<Orders />}/> 
          <Route path='/seller/orders/addorders/singleorder' element={<SingleOrder />}/>
          <Route path='/seller/orders/addorders/bulk-order' element={<BulkOrder />}/> 
          <Route path='/seller/orders/addorders/b2b-order' element={<B2BOrder />}/> 
          <Route path='/seller/settings/pickup-addresses' element={<PicupAddresses />}/>
          <Route path='/seller/settings/pickup-addresses/form' element={<PickupAddress />}/>
          <Route path="*" element={<NotFound />} />  
        </Route>   
      </Routes>
    </>
  )
}

export default App
