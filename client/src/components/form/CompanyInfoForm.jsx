import { useState } from "react"
import { useForm } from "react-hook-form"

const CompanyInfoForm = () => {
    const { register, setValue, handleSubmit, formState: { errors } } = useForm()
    const [locality, setLocality] = useState([])
    const onSubmit = (data) => {
        console.log(data)
    }
    const fetchCityAndState = async (pincode) => {
        try {
            // Example API call (replace with actual API or logic)
            const response = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
            const data = await response.json();

            if (data[0]?.Status === "Success") {
                const { District: city, State: state } = data[0].PostOffice[0];
                const posts = data[0].PostOffice.map((post) => post.Name);
                setValue("city", city);
                setValue("state", state);
                setLocality(posts)
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
        <div className="p-4 rounded-3xl bg-white shadow-custom">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10">
                <div id="generalInfo">
                    <div className="grid md:grid-cols-4 gap-4">
                        <div>
                            <label htmlFor="firstName" className="text-sm font-medium text-gray-400 mb-2">First Name*</label>
                            <input
                                type="text"
                                id="firstName"
                                {...register('firstName', { required: 'First Name is required' })}
                                className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] ${errors.firstName ? "border-red-500" : "border-gray-300"
                                    } shadow-sm`}
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="text-sm font-medium text-gray-400 mb-2">Last Name*</label>
                            <input
                                type="text"
                                id="lastName"
                                {...register('lastName', { required: 'Last Name is required' })}
                                className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] ${errors.lastName ? "border-red-500" : "border-gray-300"
                                    } shadow-sm`}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="text-sm font-medium text-gray-400 mb-2">Email*</label>
                            <input
                                type="email"
                                id="email"
                                {...register('email', { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address", } })}
                                className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] ${errors.email ? "border-red-500" : "border-gray-300"
                                    } shadow-sm`}
                            />
                        </div>
                        <div>
                            <label htmlFor="mobileNumber" className="text-sm font-medium text-gray-400 mb-2">Mobile Number*</label>
                            <input
                                type="text"
                                id="mobileNumber"
                                {...register('mobileNumber', { required: 'Mobile Number is required', pattern: { value: /^[0-9]{10}$/, message: "Mobile number must be 10 digits", } })}
                                className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] ${errors.mobileNumber ? "border-red-500" : "border-gray-300"
                                    } shadow-sm`}
                            />
                        </div>
                        <div>
                            <label htmlFor="firmName" className="text-sm font-medium text-gray-400 mb-2">Firm Name*</label>
                            <input
                                type="text"
                                id="firmName"
                                {...register('firmName', { required: 'Firm Name is required' })}
                                className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] ${errors.firmName ? "border-red-500" : "border-gray-300"
                                    } shadow-sm`}
                            />
                        </div>
                        <div>
                            <label htmlFor="parent" className="text-sm font-medium text-gray-400 mb-2">S/O or D/O*</label>
                            <input
                                type="text"
                                id="parent"
                                {...register('parent', { required: 'S/O or D/O is required' })}
                                className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] ${errors.parent ? "border-red-500" : "border-gray-300"
                                    } shadow-sm`}
                            />
                        </div>
                        <div>
                            <label htmlFor="age" className="text-sm font-medium text-gray-400 mb-2">Age*</label>
                            <input
                                type="text"
                                id="age"
                                {...register('age', { required: 'Age is required', pattern: { value: /^\d{1,3}$/, message: "Please enter valid number", } })}
                                className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] ${errors.age ? "border-red-500" : "border-gray-300"
                                    } shadow-sm`}
                            />
                        </div>
                        <div>
                            <label htmlFor="website" className="text-sm font-medium text-gray-400 mb-2">Website</label>
                            <input
                                type="text"
                                id="website"
                                {...register('website')}
                                className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] ${errors.website ? "border-red-500" : "border-gray-300"
                                    } shadow-sm`}
                            />
                        </div>
                    </div>
                </div>
                <div className="residential" id="residential">
                    <h2 className="text-primary font-bold text-2xl">Residential Address Details</h2>
                    <div className=" grid md:grid-cols-3 gap-5">
                        <div className="col-span-1">
                            <label htmlFor="address" className="text-sm font-medium text-gray-400 mb-2">Residential Address*</label>
                            <textarea id="address"  rows="10" {...register('address', { required: 'Address is required' })}
                                className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] ${errors.address ? "border-red-500" : "border-gray-300"
                                    } shadow-sm`} />
                        </div>
                        <div className="col-span-2">
                            <div className="grid md:grid-cols-2 gap-5">
                                <div>
                                    <label htmlFor="pincode" className="text-sm font-medium text-gray-400 mb-2">Pincode*</label>
                                    <input
                                        type="text"
                                        id="pincode"
                                        {...register('pincode', { required: 'Pincode is required', pattern: { value: /^[0-9]{10}$/, message: "Mobile number must be 6 digits" } })}
                                        onChange={handlePincodeChange}
                                        className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] ${errors.pincode ? "border-red-500" : "border-gray-300"
                                            } shadow-sm`}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="locality" className="text-sm font-medium text-gray-400 mb-2">Locality*</label>
                                    <select
                                        type="text"
                                        id="locality"
                                        {...register('locality', { required: 'locality is required', pattern: { value: /^[0-9]{10}$/, message: "Mobile number must be 6 digits" } })}
                                        className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] ${errors.locality ? "border-red-500" : "border-gray-300"
                                            } shadow-sm`}
                                    >
                                        <option value="">Select Post Name</option>
                                        {locality.map((postName, index) => (
                                            <option key={index} value={postName}>
                                                {postName}
                                            </option>
                                        ))}

                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="city" className="text-sm font-medium text-gray-400 mb-2">City*</label>
                                    <input
                                        type="text"
                                        id="city"
                                        {...register('city', { required: 'city is required' })}
                                        readOnly
                                        className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] ${errors.city ? "border-red-500" : "border-gray-300"
                                            } shadow-sm`}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="state" className="text-sm font-medium text-gray-400 mb-2">State*</label>
                                    <input
                                        type="text"
                                        id="state"
                                        {...register('state', { required: 'state is required' })}
                                        readOnly
                                        className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] ${errors.state ? "border-red-500" : "border-gray-300"
                                            } shadow-sm`}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-400 mb-2">
                                        Contact Number*
                                    </label>
                                    <input
                                        type="tel"
                                        id="contactNumber"
                                        {...register("contactNumber", {
                                            required: "Mobile number is required",
                                            pattern: {
                                                value: /^[0-9]{10}$/,
                                                message: "Mobile number must be 10 digits",
                                            },
                                        })}
                                        className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] ${errors.contactNumber ? "border-red-500" : "border-gray-300"
                                            } shadow-sm`}
                                    />
                                    {errors.contactNumber && (
                                        <p className="text-red-500 text-sm mt-1">{errors.contactNumber.message}</p>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="alternateNumber" className="block text-sm font-medium text-gray-400 mb-2">
                                        Alternative Number*
                                    </label>
                                    <input
                                        type="tel"
                                        id="alternateNumber"
                                        {...register("alternateNumber", {
                                            pattern: {
                                                value: /^[0-9]{10}$/,
                                                message: "Mobile number must be 10 digits",
                                            },
                                        })}
                                        className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] ${errors.alternateNumber ? "border-red-500" : "border-gray-300"
                                            } shadow-sm`}
                                    />
                                    {errors.alternateNumber && (
                                        <p className="text-red-500 text-sm mt-1">{errors.alternateNumber.message}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="office">
                    <h2 className="text-primary font-bold text-2xl">Office Address Details</h2>
                    <div className=" grid md:grid-cols-3 gap-5">
                        <div className="col-span-1">
                            <label htmlFor="officeAddress" className="text-sm font-medium text-gray-400 mb-2">Office Address*</label>
                            <textarea id="officeAddress"  rows="10" {...register('officeAddress', { required: 'Address is required' })}
                                className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] ${errors.officeAddress ? "border-red-500" : "border-gray-300"
                                    } shadow-sm`} />
                        </div>
                        <div className="col-span-2">
                            <div className="grid md:grid-cols-2 gap-5">
                                <div>
                                    <label htmlFor="officePincode" className="text-sm font-medium text-gray-400 mb-2">Pincode*</label>
                                    <input
                                        type="text"
                                        id="officePincode"
                                        {...register('officePincode', { required: 'Pincode is required', pattern: { value: /^[0-9]{10}$/, message: "Mobile number must be 6 digits" } })}
                                        onChange={handlePincodeChange}
                                        className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] ${errors.officePincode ? "border-red-500" : "border-gray-300"
                                            } shadow-sm`}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="officeLocality" className="text-sm font-medium text-gray-400 mb-2">Locality*</label>
                                    <select
                                        type="text"
                                        id="officeLocality"
                                        {...register('officeLocality', { required: 'locality is required', pattern: { value: /^[0-9]{10}$/, message: "Mobile number must be 6 digits" } })}
                                        className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] ${errors.officeLocality ? "border-red-500" : "border-gray-300"
                                            } shadow-sm`}
                                    >
                                        <option value="">Select Post Name</option>
                                        {locality.map((postName, index) => (
                                            <option key={index} value={postName}>
                                                {postName}
                                            </option>
                                        ))}

                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="officeCity" className="text-sm font-medium text-gray-400 mb-2">City*</label>
                                    <input
                                        type="text"
                                        id="officeCity"
                                        {...register('officeCity', { required: 'city is required' })}
                                        readOnly
                                        className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] ${errors.officeCity ? "border-red-500" : "border-gray-300"
                                            } shadow-sm`}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="officeState" className="text-sm font-medium text-gray-400 mb-2">State*</label>
                                    <input
                                        type="text"
                                        id="officeState"
                                        {...register('officeState', { required: 'state is required' })}
                                        readOnly
                                        className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] ${errors.officeState ? "border-red-500" : "border-gray-300"
                                            } shadow-sm`}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="officeContactNumber" className="block text-sm font-medium text-gray-400 mb-2">
                                        Contact Number*
                                    </label>
                                    <input
                                        type="tel"
                                        id="officeContactNumber"
                                        {...register("officeContactNumber", {
                                            required: "Mobile number is required",
                                            pattern: {
                                                value: /^[0-9]{10}$/,
                                                message: "Mobile number must be 10 digits",
                                            },
                                        })}
                                        className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] ${errors.officeContactNumber ? "border-red-500" : "border-gray-300"
                                            } shadow-sm`}
                                    />
                                    {errors.officeContactNumber && (
                                        <p className="text-red-500 text-sm mt-1">{errors.officeContactNumber.message}</p>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="officeAlternateNumber" className="block text-sm font-medium text-gray-400 mb-2">
                                        Alternative Number*
                                    </label>
                                    <input
                                        type="tel"
                                        id="officeAlternateNumber"
                                        {...register("officeAlternateNumber", {
                                            pattern: {
                                                value: /^[0-9]{10}$/,
                                                message: "Mobile number must be 10 digits",
                                            },
                                        })}
                                        className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] ${errors.officeAlternateNumber ? "border-red-500" : "border-gray-300"
                                            } shadow-sm`}
                                    />
                                    {errors.officeAlternateNumber && (
                                        <p className="text-red-500 text-sm mt-1">{errors.officeAlternateNumber.message}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="submit" className="py-3 px-8 text-white font-semibold rounded-2xl bg-primary w-fit">Save Chenges</button>
            </form>
        </div>
    )
}

export default CompanyInfoForm