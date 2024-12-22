import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

const DashboardLayout = () => {
  return (
    <div className='flex'>
        <Sidebar />
        <div className='flex-1'>
            <Header />
            <div className='px-4 py-3 bg-[#f0f1f7] h-full'>
                <Outlet />
            </div>
        </div>
    </div>
  )
}

export default DashboardLayout