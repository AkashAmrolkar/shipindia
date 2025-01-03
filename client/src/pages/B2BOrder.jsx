import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import PickupDetils from "@/components/PickupDetils";
import DestinationDetails from "@/components/DestinationDetails";
import PackageDetails from "@/components/PackageDetails";
import Carrierpartner from "@/components/Carrierpartner";
import OtherDetails from "@/components/OtherDetails";

const B2BOrder = () => {
  const [step, setStep] = useState(1);
  const methods = useForm({
    defaultValues: {
      pickupDetils: {
        pickup: ''
      },
      destinationDetails: {
        destination: ''
      },
      packageDetails: {
        boxes: [{ NoOfBox: "", weight: "", length: "", width: "", height: '' }],
        invoices: [{date: '', value: '', number: ''}],
        shipmentMode: '',
        paymentMode: '',
        invoiceDocument: ''
      },
      carrierPartner: {
        partners: ''
      },
      otherDetails: {
        eWayBill: '',
        remarks: '',
        receipentGstNo: '',
        orderId: ''
      }
    },
    mode: "onChange",
  });

  const { handleSubmit } = methods;

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 6));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));
  const isLastStep = step === 6;

  const onSubmit = (data) => {
    if (isLastStep) {
      console.log("Form Data:", data);
      alert("Order submitted successfully!");
    } else {
      nextStep();
    }
  };

  const steps = [
    <PickupDetils key='pickupDetails' />,
    <DestinationDetails key='destinationDetails' />,
    <PackageDetails key='packageDetails' />,
    <Carrierpartner key='carrierPartner' />,
    <OtherDetails key='otherDetails' />
  ];

  return (
    <>
        <div className="mb-8">
        <ul className=" flex justify-between orderProgress">
            <li className=" cursor-pointer z-10 flex-1">
            <div className="flex flex-col w-fit items-center">
                <p className={`count mb-3 text-center  font-medium z-10  content-center rounded-full h-10 w-10  border-[1px] text-black ${step===1? 'bg-primary border-primary':'bg-secondary border-secondary'}`}>1</p>
                <p className={`text-center hidden md:block font-medium ${step===1?'text-primary': 'text-secondary'}`}>Pickup Details</p>
            </div>
            </li>
            <li className=" cursor-pointer z-10 flex-1">
            <div className="flex flex-col w-fit items-center">
                <p className={`count mb-3 text-center  font-medium z-10  content-center rounded-full h-10 w-10  border-[1px] text-black ${step===2? 'bg-primary border-primary':'bg-secondary border-secondary'}`}>2</p>
                <p className={`text-center hidden md:block font-medium ${step===2?'text-primary': 'text-secondary'}`}>Destination Details</p>
            </div>
            </li>
            <li className=" cursor-pointer z-10 flex-1">
            <div className="flex flex-col w-fit items-center">
                <p className={`count mb-3 text-center  font-medium z-10  content-center rounded-full h-10 w-10  border-[1px] text-black ${step===3? 'bg-primary border-primary':'bg-secondary border-secondary'}`}>3</p>
                <p className={`text-center hidden md:block font-medium ${step===3?'text-primary': 'text-secondary'}`}>Package Details</p>
            </div>
            </li>
            <li className=" cursor-pointer z-10 flex-1">
            <div className="flex flex-col w-fit items-center">
                <p className={`count mb-3 text-center  font-medium z-10  content-center rounded-full h-10 w-10  border-[1px] text-black ${step===4? 'bg-primary border-primary':'bg-secondary border-secondary'}`}>4</p>
                <p className={`text-center hidden md:block font-medium ${step===4?'text-primary': 'text-secondary'}`}>Carrier Partner</p>
            </div>
            </li>
            <li className=" cursor-pointer z-10 flex-1">
            <div className="flex flex-col w-fit items-center">
                <p className={`count mb-3 text-center  font-medium z-10  content-center rounded-full h-10 w-10  border-[1px] text-black ${step===5? 'bg-primary border-primary':'bg-secondary border-secondary'}`}>4</p>
                <p className={`text-center hidden md:block font-medium ${step===5?'text-primary': 'text-secondary'}`}>Other Details</p>
            </div>
            </li>
            <li className=" cursor-pointer z-10">
            <div className="flex flex-col w-fit items-center">
                <p className={`count mb-3 text-center  font-medium z-10  content-center rounded-full h-10 w-10  border-[1px] text-black ${step==6? 'bg-primary border-primary':'bg-secondary border-secondary'}`}>4</p>
                <p className={`text-center hidden md:block font-medium ${step==6?'text-primary': 'text-secondary'}`}>Next Step</p>
            </div>
            </li>
        </ul>
        </div>
        <div>
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <div>{steps[step - 1]}</div>
            </div>

            {/* Navigation Buttons */}
            <div className="mt-8 flex justify-between">
                {step > 1 && (
                <button
                    type="button"
                    onClick={prevStep}
                    className="py-3 px-8 bg-gray-200 font-semibold rounded-full text-primary w-fit"
                >
                    Back
                </button>
                )}
                <button
                type="submit"
                className={`py-3 px-8 text-white font-semibold rounded-full bg-primary w-fit`}
                >
                {isLastStep ? "Add Order" : "Next"}
                </button>
            </div>
            </form>
        </FormProvider>
        </div>
    </>
  )
}

export default B2BOrder