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
          <Route path="*" element={<NotFound />} />  
        </Route>   
      </Routes>
    </>
  )
}

export default App
