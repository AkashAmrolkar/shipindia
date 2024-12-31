import { Link } from "react-router-dom"
import Kycverify from '../assets/Kyc-verify.png'
const VerifyKycModal = () => {
  return (
    <div className="bg-white rounded-2xl shadow-custom p-5 flex md:justify-between flex-wrap items-center mb-5">
        <div className="flex flex-col gap-5">
            <h2 className="font-bold text-2xl">Complete your KYC</h2>
            <p className="text-base">KYC is Mandatory For Account Activation.</p>
            <Link to='/seller/kyc' className="py-3 px-8 text-white font-semibold rounded-full bg-primary w-fit">Verify KYC</Link>
        </div>
        <div>
            <img src={Kycverify} alt="Kyc Verify" className="h-64"  />
        </div>
    </div>
  )
}

export default VerifyKycModal