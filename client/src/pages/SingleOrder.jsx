import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import OrderDetails from "@/components/form/OrderDetails";
import PackageDetailsFields from "@/components/form/PackageDetailsFields";
import BuyerDetails from "@/components/form/BuyerDetails";
import PickupDetils from "@/components/PickupDetils";

const SingleOrder = () => {
  const [step, setStep] = useState(1);
  const methods = useForm({
    defaultValues: {
      buyerDetails: {
        buyerName: "",
        mobileNumber: "",
        email: "",
        fullAddress: "",
        landmark: "",
        pincode: "",
        city: "",
        state: "",
        country: ""
      },
      pickupDetils: {
        pickup: ''
      },
      orderDetails: {
        orderID: "",
        products: [{ productName: "", productCategory: "", quantity: "", unitPrice: "" }],
        paymentType: "",
      },
      packageDetails: {
        deadWeight: "",
        length: "",
        width: "",
        height: "",
      },
    },
    mode: "onChange",
  });

  const { handleSubmit } = methods;

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));
  const isLastStep = step === 4;

  const onSubmit = (data) => {
    if (isLastStep) {
      console.log("Form Data:", data);
      alert("Order submitted successfully!");
    } else {
      nextStep();
    }
  };

  const steps = [
    <BuyerDetails key="buyerDetails" />,
    <PickupDetils key='pickupDetails' />,
    <OrderDetails key="orderDetails" />,
    <PackageDetailsFields key="packageDetails" />,
  ];

  return (
    <>
      <div className="mb-8">
        <ul className=" flex justify-between orderProgress">
          <li className=" cursor-pointer z-10 flex-1">
            <div className="flex flex-col w-fit items-center">
              <p className={`count mb-3 text-center  font-medium z-10  content-center rounded-full h-10 w-10  border-[1px] text-black ${step===1? 'bg-primary border-primary':'bg-secondary border-secondary'}`}>1</p>
              <p className={`text-center hidden md:block font-medium ${step===1?'text-primary': 'text-secondary'}`}>Buyer Details</p>
            </div>
          </li>
          <li className=" cursor-pointer z-10 flex-1">
            <div className="flex flex-col w-fit items-center">
              <p className={`count mb-3 text-center  font-medium z-10  content-center rounded-full h-10 w-10  border-[1px] text-black ${step===2? 'bg-primary border-primary':'bg-secondary border-secondary'}`}>2</p>
              <p className={`text-center hidden md:block font-medium ${step===2?'text-primary': 'text-secondary'}`}>Pickup Details</p>
            </div>
          </li>
          <li className=" cursor-pointer z-10 flex-1">
            <div className="flex flex-col w-fit items-center">
              <p className={`count mb-3 text-center  font-medium z-10  content-center rounded-full h-10 w-10  border-[1px] text-black ${step===3? 'bg-primary border-primary':'bg-secondary border-secondary'}`}>3</p>
              <p className={`text-center hidden md:block font-medium ${step===3?'text-primary': 'text-secondary'}`}>Order Details</p>
            </div>
          </li>
          <li className=" cursor-pointer z-10">
            <div className="flex flex-col w-fit items-center">
              <p className={`count mb-3 text-center  font-medium z-10  content-center rounded-full h-10 w-10  border-[1px] text-black ${step===4? 'bg-primary border-primary':'bg-secondary border-secondary'}`}>4</p>
              <p className={`text-center hidden md:block font-medium ${step===4?'text-primary': 'text-secondary'}`}>Package Details</p>
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
  );
};

export default SingleOrder;
