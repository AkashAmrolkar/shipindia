import { Bell, LogOut, Search, Settings, Zap } from "lucide-react"
import avatar from '../assets/Avatar.png'
import { Link } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
const Header = () => {
  const [showProfile, setShowProfile] = useState(false)
  const profileRef = useRef(null);

  const showProfileMemu = (e)=>{
    e.preventDefault()
    setShowProfile(!showProfile)
  }
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfile(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className=" p-4 bg-white border-b border-gray-200 flex justify-between items-center sticky top-0">
      <div className="font-medium text-black text-xl">Dashboard</div>
      <div className="flex gap-8 relative items-center">
        <div>

        </div>
        <div className="flex gap-3">
          <Zap />
          <span>Recharge Wallet</span>
        </div>
        <div className="flex gap-3">
          <Bell />
          <Search />
        </div>
        <div className="relative" ref={profileRef}>
            <div className=' h-8 w-8 bg-gray-200 rounded-full flex justify-center items-center mx-auto' onClick={showProfileMemu}>
              <img src={`${avatar}`} height='' width='' className='' alt='Profile Image' loading='lazy' />
            </div>
            {
              showProfile && 
              <div className="absolute right-0 bg-white shadow-2xl p-5 top-14">
                <Link to='/seller/profile' className="flex gap-3 items-center mb-4">
                  <div className=' h-8 w-8 bg-gray-200 rounded-full flex justify-center items-center mx-auto' >
                    <img src={`${avatar}`} height='' width='' className='' alt='Profile Image' loading='lazy' />
                  </div>
                  <div className="text-base">Profile</div>
                </Link>
                <Link to='/seller/profile' className="flex gap-3 items-center mb-4">
                  <Settings />
                  <div className="text-base">Settings</div>
                </Link>
                <Link to='/seller/profile' className="flex gap-3 items-center mb-4">
                  <LogOut />
                  <div className="text-base">Logout</div>
                </Link>
              </div>
            }
            
        </div>
      </div>
    </div>
  )
}

export default Header