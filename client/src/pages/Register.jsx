import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import register from '../assets/register.png'
import RegisterForm from '@/components/form/RegisterForm'
const Register = () => {
  return (
    <div className="w-full h-full md:h-screen flex justify-center items-center">
      <div className='grid md:grid-cols-2 place-items-center'>
        <div className=' hidden md:block'>
          <img src={register} alt='Login Image' className='h-[300px] md:h-[500px] animate-move' />
        </div>
        <div className="bg-white shadow-custom rounded-3xl px-6 py-8 flex flex-col gap-5">
            <div className='flex items-center justify-between'>
                <img src={logo}  className='w-[180px] mb-5 md:mb-0' alt='Logo' />
                <div className='text-base text-black md:text-center flex md:block'>
                    <p>Already Registered?</p>
                    <Link to='/login' className='text-primary font-medium'>Login here</Link>
                </div>
            </div>
            <RegisterForm />
        </div>
      </div>
    </div>
  )
}

export default Register