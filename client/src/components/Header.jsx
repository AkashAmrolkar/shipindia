import { Zap } from "lucide-react"
import { useState } from "react"

const Header = () => {
  const [action, setAction] = useState({display: 'none'})
  return (
    <div className=" p-4 bg-white border border-l-neutral-400 flex justify-between items-center">
      <div className="font-medium text-black text-xl">Dashboard</div>
      <div className="flex gap-3 relative">
          <div className="flex gap-3 items-center" onMouseEnter={()=> setAction({display: 'block'})} onMouseLeave={()=> setAction({display: 'none'})}>
            <Zap />
            <div>Quick Action</div>
          </div>
          <div style={action} className="absolute top-8 ">
            Show Action
          </div>
      </div>
    </div>
  )
}

export default Header