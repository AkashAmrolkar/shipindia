import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import RegisterForm from '@/components/form/RegisterForm'
const Register = () => {
  return (
    <div className="w-full h-full md:h-screen flex justify-center items-center">
        <div className="md:w-1/3 mx-auto bg-white shadow-custom rounded-3xl px-6 py-8 flex flex-col gap-5">
            <div className='flex items-center justify-between'>
                <img src={logo}  className='w-[180px]' alt='Logo' />
                <div className='text-base text-black'>
                    <p>Already Registered?</p>
                    <Link to='/login' className='text-primary font-medium'>Login here</Link>
                </div>
            </div>
            <RegisterForm />
        </div>
    </div>
  )
}

export default Register