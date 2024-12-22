import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import LoginForm from '@/components/form/LoginForm'
const Login = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
        <div className="md:w-1/3 mx-auto bg-white shadow-custom rounded-3xl px-6 py-8 flex flex-col gap-5">
            <div className='flex items-center justify-between'>
                <img src={logo}  className='w-[180px]' alt='Logo' />
                <div className='text-base text-black'>
                    <p>New Seller?</p>
                    <Link to='/register' className='text-primary font-medium'>Create Account</Link>
                </div>
            </div>
            <LoginForm />
        </div>
    </div>
  )
}

export default Login