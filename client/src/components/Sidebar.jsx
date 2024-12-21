import { Calculator, ChevronLeft, ClipboardMinus, HeartHandshake, House, LayoutDashboard, Menu, Receipt, Settings, ShieldAlert, Truck, TvMinimal, Users, Warehouse } from 'lucide-react'
import logo from '../assets/logo.png'
import Avatar from '../assets/Avatar.png'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
const Sidebar = () => {
  const [show, setShow] = useState({display: 'none'})
  const [showHamburger, setShowHamburger] = useState({display: 'block'})
  const menus = [
    {
      icon: <House />,
      name: 'Dashboard',
      link: '/seller'
    },
    {
      icon: <LayoutDashboard />,
      name: 'Orders',
      link: '/seller/orders'
    },
    {
      icon: <Truck />,
      name: 'B2B Shipment',
      link: '/seller/b2b'
    },
    {
      icon: <ShieldAlert />,
      name: 'track',
      link: '/seller/track'
    },
    {
      icon: <Receipt />,
      name: 'Billing',
      link: '/seller/billing'
    },
    {
      icon: <ShieldAlert/>,
      name: 'NDR',
      link: '/seller/ndr'
    },
    {
      icon: <HeartHandshake />,
      name: 'Help',
      link: '/seller/help'
    },
    {
      icon: <Calculator />,
      name: 'Calculator',
      link: '/seller/calculator'
    },
    {
      icon: <Warehouse />,
      name: 'Warehouse',
      link: '/seller/warehouse'
    },
    {
      icon: <ClipboardMinus />,
      name: 'Reports',
      link: '/seller/reports'
    },
    {
      icon: <Users />,
      name: 'Employees',
      link: '/seller/employees'
    },
    {
      icon: <TvMinimal/>,
      name: 'Channel',
      link: '/seller/channel'
    },
    {
      icon: <Settings />,
      name: 'Settings',
      link: '/seller/settings'
    },
  ]
  const handleShowMenu = ()=>{
    setShow({display: 'block', transition: '0.6s all ease-in-out'})
    setShowHamburger({display: 'none'})
  }
  const handleCloseMenu=()=>{
    setShow({display: 'none'})
    setShowHamburger({display: 'block'})
  }
  return (
    <div className="bg-white border-r border-gray-300 overflow-y-auto sticky top-0 h-screen">
      <div className=" px-8 py-5">
        <div className='relative flex items-center justify-center' style={show}>
          <img src={`${logo}`} height='35' width='90' alt="logo" loading="lazy"/>
          <span className='absolute top-3 right-0' onClick={handleCloseMenu}>
            <ChevronLeft />
          </span>
        </div>
        <div onClick={handleShowMenu} style={showHamburger}>
          <Menu />
        </div>
      </div>

      <div className='px-8 py-5 text-center border-b border-gray-300 transition-all delay-1000 ease-in-out'style={show}>
        <div className=' h-16 w-16 bg-gray-200 rounded-full flex justify-center items-center mb-4 mx-auto' >
          <img src={`${Avatar}`} height='40' width='40' className='mb-3' alt='Profile Image' loading='lazy' />
        </div>
        <p className=' text-lg font-bold text-black capitalize'>Akash Amrolkar</p>
        <p className=' text-small text-black'>akashamrolkar10@gmail.com</p>
      </div>

      <div className='px-3 py-5 border-b border-gray-300 flex flex-col gap-2'>
        {
          menus.map((menu)=>{
            return(
              <NavLink to={menu.link} className={({ isActive }) => `${isActive ? 'text-primary' : 'text-secondary'} flex gap-5 px-5 py-3 text-lg rounded-full font-semibold hover:bg-gray-100` } key={menu.name}>
  {menu.icon} <span style={show}>{menu.name}</span>
</NavLink>
            )
          })
        }
      </div>
    </div>
  )
}

export default Sidebar