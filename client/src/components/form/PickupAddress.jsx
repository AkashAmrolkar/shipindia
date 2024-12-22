import { useFormContext } from "react-hook-form"

const PickupAddress = () => {
    const {register, formState: {errors}} = useFormContext()

  return (
    <div>
        <div>
            <label>Buyer Name</label>
            <input {...register('picupName')} />
            <p>{errors.buyerName?.message}</p>
        </div>
        <div>
            <label>Mobile Number</label>
            <input {...register('picupMobileNumber')} />
            <p>{errors.buyerName?.message}</p>
        </div>
        <div>
            <label>Alternate Mobile Number</label>
            <input {...register('picupAlterMobileNumber')} />
            <p>{errors.buyerName?.message}</p>
        </div>
        <div>
            <label>Email</label>
            <input {...register('picupEmail')} />
            <p>{errors.email?.message}</p>
        </div>
        <div>
            <label>Complete Address</label>
            <input {...register('picupCompleteAddress')} />
            <p>{errors.fullAddress?.message}</p>
        </div>  
        <div>
            <label>Landmark</label>
            <input {...register('picupLandmark')} />
            <p>{errors.landmark?.message}</p>
        </div>
        <div>
            <label>Pincode</label>
            <input {...register('picupPincode')} />
            <p>{errors.pincode?.message}</p>
        </div>
        <div>
            <label>City</label>
            <input {...register('picupCity')} />
            <p>{errors.city?.message}</p>
        </div>
        <div>
            <label>State</label>
            <input {...register('picupState')} />
            <p>{errors.state?.message}</p>
        </div>
        <div>
            <label>Country</label>
            <input {...register('picupCountry')} />
            <p>{errors.country?.message}</p>
        </div>
    </div>
  )
}

export default PickupAddress