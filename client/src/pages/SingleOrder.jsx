import { useState } from "react";
import * as Yup from "yup";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import BuyerDetails from "@/components/form/BuyerDetails";

const SingleOrder = () => {
    const [step, setStep] = useState(1);
    
    const buyerDetailsSchema = Yup.object({
        buyerName: Yup.string().required("Buyer Name is required"),
        mobileNumber: Yup.string().required("Mobile Number is required"),
        email: Yup.string().email("Invalid Email").required("Email is required"),
    });
    
    const getStepSchema = (step) => {
        switch (step) {
          case 1:
            return buyerDetailsSchema;
          default:
            return buyerDetailsSchema;
        }
      };
    const methods = useForm({
        defaultValues: {
            buyerName: "",
            mobileNumber: "",
            email: "",
            fullAddress: "",
            pincode: "",
            state: "",
            country: "",
            city: "",
            landmark: "",
        },
        resolver: yupResolver(getStepSchema(step)),
    });
    const { handleSubmit } = methods;
    
    const onSubmit = (data) => {
      if (step < 3) {
        setStep(step + 1);
      } else {
        console.log("Final Submission", data);
      }
    };
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <BuyerDetails />
      </form>
    </FormProvider>
  )
}

export default SingleOrder