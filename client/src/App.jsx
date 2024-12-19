import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Seller from './pages/Seller'
import Orders from './pages/Orders'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
      <div className='flex'>
        <Sidebar />
        <div className='flex-1'>
          <Header />
          <Routes>
          <Route path='/seller' element={<Seller />}/>
          <Route path='/seller/orders' element={<Orders />}/>      
          <Route path="*" element={<NotFound />} />      
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
