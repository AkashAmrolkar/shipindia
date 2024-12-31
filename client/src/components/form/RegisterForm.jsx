import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Handle form data here
    alert("Registration successful");
  };

  return (
    <div className="">
    <h2 className="text-3xl font-bold mb-6">Register</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
        {/* First Name */}
        <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-400 mb-2">
            First Name*
            </label>
            <input
            type="text"
            id="firstName"
            {...register("firstName", { required: "First Name is required" })}
            className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] ${
                errors.firstName ? "border-red-500" : "border-gray-300"
            } shadow-sm`}
            />
            {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
            )}
        </div>

        {/* Last Name */}
        <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-400 mb-2">
            Last Name*
            </label>
            <input
            type="text"
            id="lastName"
            {...register("lastName", { required: "Last Name is required" })}
            className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] ${
                errors.lastName ? "border-red-500" : "border-gray-300"
            } shadow-sm`}
            />
            {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
            )}
        </div>

        {/* Email */}
        <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
            Email*
            </label>
            <input
            type="email"
            id="email"
            {...register("email", {
                required: "Email is required",
                pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
                },
            })}
            className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] ${
                errors.email ? "border-red-500" : "border-gray-300"
            } shadow-sm`}
            />
            {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
        </div>

        {/* Mobile Number */}
        <div>
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
            className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] ${
                errors.mobileNumber ? "border-red-500" : "border-gray-300"
            } shadow-sm`}
            />
            {errors.mobileNumber && (
            <p className="text-red-500 text-sm mt-1">{errors.mobileNumber.message}</p>
            )}
        </div>

        {/* Company Name */}
        <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-400 mb-2">
            Company Name*
            </label>
            <input
            type="text"
            id="companyName"
            {...register("companyName", { required: "Company Name is required" })}
            className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] ${
                errors.companyName ? "border-red-500" : "border-gray-300"
            } shadow-sm`}
            />
            {errors.companyName && (
            <p className="text-red-500 text-sm mt-1">{errors.companyName.message}</p>
            )}
        </div>

        {/* Orders */}
        <div>
            <label htmlFor="orders" className="block text-sm font-medium text-gray-400 mb-2">
            How many orders you will ship?*
            </label>
            <select
            id="orders"
            {...register("orders", { required: "Orders field is required" })}
            className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] ${
                errors.orders ? "border-red-500" : "border-gray-300"
            } shadow-sm`}
            >
            <option value="">Select an option</option>
            <option value="100">100</option>
            <option value="200">200</option>
            <option value="other">Other</option>
            </select>
            {errors.orders && (
            <p className="text-red-500 text-sm mt-1">{errors.orders.message}</p>
            )}
        </div>

        {/* Password */}
        <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-2">
            Password*
            </label>
            <input
            type="password"
            id="password"
            {...register("password", {
                required: "Password is required",
                minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
                },
            })}
            className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] ${
                errors.password ? "border-red-500" : "border-gray-300"
            } shadow-sm`}
            />
            {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
        </div>

        {/* Confirm Password */}
        <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-400 mb-2">
            Confirm Password*
            </label>
            <input
            type="password"
            id="confirmPassword"
            {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                value === "" || value === "" || "Passwords do not match",
            })}
            className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
            } shadow-sm`}
            />
            {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
            )}
        </div>
        </div>

        {/* Submit Button */}
        <button
        type="submit"
        className="w-full bg-primary text-white text-xl rounded-2xl hover:bg-primary-dark font-semibold py-3"
        >
        Register
        </button>
    </form>
    </div>
  );
};

export default RegisterForm;
