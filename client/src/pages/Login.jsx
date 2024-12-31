import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import login from '../assets/login.png'
import LoginForm from '@/components/form/LoginForm'
const Login = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
        <div className='grid md:grid-cols-2 place-items-center'>
          <div className=' hidden md:block'>
            <img src={login} alt='Login Image' className='h-[300px] md:h-[500px] animate-move' />
          </div>
          <div className="bg-white shadow-custom rounded-3xl px-6 py-8 flex flex-col gap-5">
            <div className='flex flex-wrap items-center justify-between'>
                <img src={logo}  className='w-[180px] mb-5 md:mb-0' alt='Logo' />
                <div className='text-base text-black md:text-center flex md:block'>
                    <p>New Seller? </p>
                    <Link to='/register' className='text-primary font-medium'> Create Account</Link>
                </div>
            </div>
            <LoginForm />
          </div>
        </div>
    </div>
  )
}

export default Login