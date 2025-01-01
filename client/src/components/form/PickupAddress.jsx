import { useForm } from "react-hook-form"

const PickupAddress = () => {
    const {register,setValue, handleSubmit, formState: {errors}} = useForm()
    const onSubmit = (data) => {
        console.log(data); // Handle form data here
        alert("Registration successful");
    };
    const fetchCityAndState = async (pincode) => {
        try {
            // Example API call (replace with actual API or logic)
            const response = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
            const data = await response.json();
            console.log(data);
            
            if (data[0]?.Status === "Success") {
                const { District: city, State: state, Country: country } = data[0].PostOffice[0];
                //const posts = data[0].PostOffice.map((post) => post.Name);
                setValue("city", city);
                setValue("state", state);
                setValue("country", country);
            } else {
                alert("Invalid Pincode");
                setValue("city", "");
                setValue("state", "");
            }
        } catch (error) {
            alert("Error fetching data", error);
        }
    };

    // Handle pincode input
    const handlePincodeChange = (e) => {
        const pincode = e.target.value;
        if (pincode.length === 6) {
            fetchCityAndState(pincode);
        }
    };
  return (
    <div className=" px-5 py-10 bg-white shadow-custom rounded-3xl">
        <h2 className="font-bold text-2xl text-primary mb-5">From | Pickup Location</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-6 gap-5">
                <div className=" col-span-3 md:col-span-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    Name*
                    </label>
                    <input
                    type="text"
                    id="name"
                    {...register("name", { required: "First Name is required" })}
                    className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] ${
                        errors.name ? "border-red-500" : "border-gray-300"
                    } shadow-sm`}
                    />
                    {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                </div>
                <div className=" col-span-3 md:col-span-2">
                    <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-400 mb-2">
                        Mobile Number*
                    </label>
                    <input
                        type="tel"
                        id="mobileNumber"
                        {...register("mobileNumber", {
                            required: "Mobile number is required",
                            pattern: {
                                value: /^[0-9]{10}$/,
                                message: "Mobile number must be 10 digits",
                            },
                        })}
                        className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] ${errors.mobileNumber ? "border-red-500" : "border-gray-300"
                            } shadow-sm`}
                    />
                    {errors.mobileNumber && (
                        <p className="text-red-500 text-sm mt-1">{errors.mobileNumber.message}</p>
                    )}
                </div>
                <div className=" col-span-3 md:col-span-2">
                    <label htmlFor="alternateMobileNumber" className="block text-sm font-medium text-gray-400 mb-2">
                        Alternate Mobile Number
                    </label>
                    <input
                        type="tel"
                        id="alternateMobileNumber"
                        {...register("alternateMobileNumber", {
                            pattern: {
                                value: /^[0-9]{10}$/,
                                message: "Alternate Mobile number must be 10 digits",
                            },
                        })}
                        className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] ${errors.alternateMobileNumber ? "border-red-500" : "border-gray-300"
                            } shadow-sm`}
                    />
                    {errors.alternateMobileNumber && (
                        <p className="text-red-500 text-sm mt-1">{errors.alternateMobileNumber.message}</p>
                    )}
                </div>
                <div className=" col-span-3 md:col-span-2">
                    <label htmlFor="email" className="text-sm block font-medium text-gray-400 mb-2">Email*</label>
                    <input
                        type="email"
                        id="email"
                        {...register('email', { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address", } })}
                        className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] ${errors.email ? "border-red-500" : "border-gray-300"
                            } shadow-sm`}
                    />
                    {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                </div>
                <div className=" col-span-3 md:col-span-2">
                    <label htmlFor="fullAddress" className="block text-sm font-medium text-gray-400 mb-2">
                    Full Address*
                    </label>
                    <input
                    type="text"
                    id="fullAddress"
                    {...register("fullAddress", { required: "First Name is required" })}
                    className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] ${
                        errors.fullAddress ? "border-red-500" : "border-gray-300"
                    } shadow-sm`}
                    />
                    {errors.fullAddress && (
                    <p className="text-red-500 text-sm mt-1">{errors.fullAddress.message}</p>
                    )}
                </div>
                <div className=" col-span-3 md:col-span-2">
                    <label htmlFor="landmark" className="block text-sm font-medium text-gray-400 mb-2">
                    Landmark*
                    </label>
                    <input
                    type="text"
                    id="landmark"
                    {...register("landmark", { required: "Landmark is required" })}
                    className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] ${
                        errors.landmark ? "border-red-500" : "border-gray-300"
                    } shadow-sm`}
                    />
                    {errors.landmark && (
                    <p className="text-red-500 text-sm mt-1">{errors.landmark.message}</p>
                    )}
                </div>
                <div className=" col-span-3 md:col-span-2">
                    <label htmlFor="pincode" className="text-sm block font-medium text-gray-400 mb-2">Pincode*</label>
                    <input
                        type="text"
                        id="pincode"
                        {...register('pincode', { required: 'Pincode is required', pattern: { value: /^[0-9]{6}$/, message: "Mobile number must be 6 digits" } })}
                        onChange={handlePincodeChange}
                        className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] ${errors.pincode ? "border-red-500" : "border-gray-300"
                            } shadow-sm`}
                    />
                    {errors.pincode && (
                    <p className="text-red-500 text-sm mt-1">{errors.pincode.message}</p>
                    )}
                </div>
                <div className=" col-span-3 md:col-span-2">
                    <label htmlFor="city" className="text-sm block font-medium text-gray-400 mb-2">City*</label>
                    <input
                        type="text"
                        id="city"
                        {...register('city', { required: 'city is required' })}
                        readOnly
                        className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] ${errors.city ? "border-red-500" : "border-gray-300"
                            } shadow-sm`}
                    />
                </div>
                <div className=" col-span-3 md:col-span-2">
                    <label htmlFor="state" className="text-sm block font-medium text-gray-400 mb-2">State*</label>
                    <input
                        type="text"
                        id="state"
                        {...register('state', { required: 'state is required' })}
                        readOnly
                        className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] ${errors.state ? "border-red-500" : "border-gray-300"
                            } shadow-sm`}
                    />
                </div>
                <div className=" col-span-3 md:col-span-2">
                    <label htmlFor="country" className="text-sm block font-medium text-gray-400 mb-2">Country*</label>
                    <input
                        type="text"
                        id="country"
                        {...register('country', { required: 'country is required' })}
                        readOnly
                        className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] ${errors.country ? "border-red-500" : "border-gray-300"
                            } shadow-sm`}
                    />
                </div>
            </div>
            
            <div className="mt-6">
                <button
                    type="submit"
                    className="px-6 bg-primary text-white text-xl rounded-2xl hover:bg-primary-dark font-semibold py-3"
                >
                    Submit
                </button>
            </div>
        </form>
    </div>
  )
}

export default PickupAddress