import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import VerifyKycModal from './VerifyKycModal'

const DashboardLayout = () => {
  const location = useLocation();
  return (
    <div className='flex relative'>
        <Sidebar />
        <div className='flex-1'>
            <Header />
            <div className='px-4 py-3 bg-[#f0f1f7] h-full'>
              {location.pathname.includes("/kyc") ? null : <VerifyKycModal />}  
              <Outlet />
            </div>
        </div>
    </div>
  )
}

export default DashboardLayout