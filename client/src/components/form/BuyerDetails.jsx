import { useFormContext } from "react-hook-form"

const BuyerDetails = () => {
    const {register, formState: {errors}} = useFormContext()
    return (
    <div>
        <div>
            <label>Buyer Name</label>
            <input {...register('buyerName')} />
            <p>{errors.buyerName?.message}</p>
        </div>
        <div>
            <label>Mobile Number</label>
            <input {...register('mobileNumber')} />
            <p>{errors.buyerName?.message}</p>
        </div>
        <div>
            <label>Email</label>
            <input {...register('email')} />
            <p>{errors.email?.message}</p>
        </div>
        <div>
            <label>Full Address</label>
            <input {...register('fullAddress')} />
            <p>{errors.fullAddress?.message}</p>
        </div>  
        <div>
            <label>Landmark</label>
            <input {...register('landmark')} />
            <p>{errors.landmark?.message}</p>
        </div>
        <div>
            <label>Pincode</label>
            <input {...register('pincode')} />
            <p>{errors.pincode?.message}</p>
        </div>
        <div>
            <label>City</label>
            <input {...register('city')} />
            <p>{errors.city?.message}</p>
        </div>
        <div>
            <label>State</label>
            <input {...register('state')} />
            <p>{errors.state?.message}</p>
        </div>
        <div>
            <label>Country</label>
            <input {...register('country')} />
            <p>{errors.country?.message}</p>
        </div>
    </div>
  )
}

export default BuyerDetails