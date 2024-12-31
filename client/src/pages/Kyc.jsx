import CompanyInfoForm from "@/components/form/CompanyInfoForm"
import KycForm from "@/components/form/KycForm"
import { useState } from "react"

const Kyc = () => {
  const [activeTab, setActiveTab]= useState('kyc')
  const handleTab = (e)=>{
    setActiveTab(e.currentTarget.id)
  }
  return (
    <div>
        <div className=" bg-white rounded-3xl shadow-custom px-4 py-8 mb-10">
          <ul className=" flex justify-between kycTabList">
            <li className=" cursor-pointer z-50 " id="kyc" onClick={handleTab}>
              <p className={`count mb-3 text-center  font-medium z-10  content-center rounded-full h-10 w-10  border-[1px] text-black ${activeTab==='kyc'? 'bg-primary border-primary':'bg-secondary border-secondary'}`}>1</p>
              <p className={`text-center font-medium ${activeTab==='kyc'?'text-primary': 'text-secondary'}`}>KYC</p>
            </li>
            <li className=" cursor-pointer z-50 " id="companyInfo" onClick={handleTab}>
              <p className={`count mb-3 text-center  font-medium z-10  content-center rounded-full h-10 w-10  border-[1px] text-black ${activeTab==='companyInfo'? 'bg-primary border-primary':'bg-secondary border-secondary'}`}>2</p>
              <p className={`text-center font-medium ${activeTab==='companyInfo'?'text-primary': 'text-secondary'}`}>Company Info</p>
            </li>
            <li className=" cursor-pointer z-50 " id="bankDetails" onClick={handleTab}>
              <p className={`count mb-3 text-center  font-medium z-10  content-center rounded-full h-10 w-10  border-[1px] text-black ${activeTab==='bankDetails'? 'bg-primary border-primary':'bg-secondary border-secondary'}`}>3</p>
              <p className={`text-center font-medium ${activeTab==='bankDetails'?'text-primary': 'text-secondary'}`}>Bank Details</p>
            </li>
            <li className=" cursor-pointer z-50 " id="agreement" onClick={handleTab}>
              <p className={`count mb-3 text-center  font-medium z-10  content-center rounded-full h-10 w-10  border-[1px] text-black ${activeTab==='agreement'? 'bg-primary border-primary':'bg-secondary border-secondary'}`}>4</p>
              <p className={`text-center font-medium ${activeTab==='agreement'?'text-primary': 'text-secondary'}`}>Agreement</p>
            </li>
          </ul>
        </div>
          {activeTab === "kyc" && <KycForm />}
          {activeTab === "companyInfo" && <CompanyInfoForm />}
          {/* {activeTab === "bankDetails" && <BankDetailsForm />} */}
    </div>
  )
}

export default Kyc