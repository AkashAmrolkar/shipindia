import { useFormContext } from "react-hook-form";

const BuyerDetails = () => {
    const { register, setValue, formState: { errors } } = useFormContext();

    const fetchCityAndState = async (pincode) => {
        try {
            const response = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
            const data = await response.json();

            if (data[0]?.Status === "Success") {
                const { District: city, State: state, Country: country } = data[0].PostOffice[0];
                setValue("city", city || "");
                setValue("state", state || "");
                setValue("country", country || "");
            } else {
                setValue("city", "");
                setValue("state", "");
                setValue("country", "");
                alert("Invalid Pincode");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            alert("Unable to fetch city and state details. Please try again.");
        }
    };

    const handlePincodeChange = (e) => {
        const pincode = e.target.value;
        if (pincode.length === 6) {
            fetchCityAndState(pincode);
        }
    };

    return (
        <div className="px-5 py-10 bg-white shadow-custom rounded-3xl">
            <div className="grid grid-cols-6 gap-5">
                {/* Buyer Name */}
                <div className="col-span-3 md:col-span-2">
                    <label htmlFor="buyerName" className="block text-sm font-medium text-gray-400 mb-2">
                        Buyer Name*
                    </label>
                    <input
                        type="text"
                        id="buyerName"
                        {...register("buyerName", { required: "Buyer Name is required" })}
                        className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary ${
                            errors.buyerName ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                    {errors.buyerName && (
                        <p className="text-red-500 text-sm mt-1">{errors.buyerName.message}</p>
                    )}
                </div>

                {/* Mobile Number */}
                <div className="col-span-3 md:col-span-2">
                    <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-400 mb-2">
                        Mobile Number*
                    </label>
                    <input
                        type="tel"
                        id="mobileNumber"
                        {...register("mobileNumber", {
                            required: "Mobile Number is required",
                            pattern: { value: /^[0-9]{10}$/, message: "Mobile number must be 10 digits" },
                        })}
                        className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary ${
                            errors.mobileNumber ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                    {errors.mobileNumber && (
                        <p className="text-red-500 text-sm mt-1">{errors.mobileNumber.message}</p>
                    )}
                </div>

                {/* Email */}
                <div className="col-span-3 md:col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                        Email*
                    </label>
                    <input
                        type="email"
                        id="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" },
                        })}
                        className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary ${
                            errors.email ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                {/* Full Address */}
                <div className="col-span-3">
                    <label htmlFor="fullAddress" className="block text-sm font-medium text-gray-400 mb-2">
                        Full Address*
                    </label>
                    <input
                        type="text"
                        id="fullAddress"
                        {...register("fullAddress", { required: "Full Address is required" })}
                        className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary ${
                            errors.fullAddress ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                    {errors.fullAddress && (
                        <p className="text-red-500 text-sm mt-1">{errors.fullAddress.message}</p>
                    )}
                </div>

                {/* Landmark */}
                <div className="col-span-3">
                    <label htmlFor="landmark" className="block text-sm font-medium text-gray-400 mb-2">
                        Landmark (optional)
                    </label>
                    <input
                        type="text"
                        id="landmark"
                        {...register("landmark")}
                        className="w-full p-3 border rounded-lg text-sm bg-white outline-primary border-gray-300"
                    />
                </div>

                {/* Pincode */}
                <div className="col-span-3 md:col-span-2">
                    <label htmlFor="pincode" className="block text-sm font-medium text-gray-400 mb-2">
                        Pincode*
                    </label>
                    <input
                        type="text"
                        id="pincode"
                        {...register("pincode", {
                            required: "Pincode is required",
                            pattern: { value: /^[0-9]{6}$/, message: "Pincode must be 6 digits" },
                        })}
                        onChange={handlePincodeChange}
                        className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary ${
                            errors.pincode ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                    {errors.pincode && <p className="text-red-500 text-sm mt-1">{errors.pincode.message}</p>}
                </div>

                {/* City */}
                <div className="col-span-3 md:col-span-2">
                    <label htmlFor="city" className="block text-sm font-medium text-gray-400 mb-2">
                        City*
                    </label>
                    <input
                        type="text"
                        id="city"
                        {...register("city", { required: "City is required" })}
                        readOnly
                        className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary ${
                            errors.city ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                </div>

                {/* State */}
                <div className="col-span-3 md:col-span-2">
                    <label htmlFor="state" className="block text-sm font-medium text-gray-400 mb-2">
                        State*
                    </label>
                    <input
                        type="text"
                        id="state"
                        {...register("state", { required: "State is required" })}
                        readOnly
                        className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary ${
                            errors.state ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                </div>

                {/* Country */}
                <div className="col-span-3 md:col-span-2">
                    <label htmlFor="country" className="block text-sm font-medium text-gray-400 mb-2">
                        Country*
                    </label>
                    <input
                        type="text"
                        id="country"
                        {...register("country", { required: "Country is required" })}
                        readOnly
                        className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary ${
                            errors.country ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                </div>
            </div>
        </div>
    );
};

export default BuyerDetails;
