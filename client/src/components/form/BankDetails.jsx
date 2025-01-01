import { useForm } from "react-hook-form"

const BankDetails = () => {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const onSubmit = (data) => {
        console.log(data); // Handle form data here
        alert("Registration successful");
    };
  return (
    <div className="px-4 py-8 rounded-3xl bg-white shadow-custom">
        <div className="md:w-2/3">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 gap-5">
                    <div>
                        <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-400 mb-2">
                        Account Number*
                        </label>
                        <input
                        type="text"
                        id="accountNumber"
                        {...register("accountNumber", {
                            required: "Account number is required",
                            pattern: {
                                value: /^\d{9,18}$/,
                                message: "Invalid Account Number",
                            },
                        })}
                        className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] ${
                            errors.accountNumber ? "border-red-500" : "border-gray-300"
                        } shadow-sm`}
                        />
                        {errors.accountNumber && (
                        <p className="text-red-500 text-sm mt-1">{errors.accountNumber.message}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="accountHolderName" className="block text-sm font-medium text-gray-400 mb-2">Account Holder Name*</label>
                        <input
                            type="text"
                            id="accountHolderName"
                            {...register('accountHolderName', { required: 'Account Holder Name is required' })}
                            className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] ${errors.accountHolderName ? "border-red-500" : "border-gray-300"
                                } shadow-sm`}
                        />
                        {errors.accountHolderName && (
                        <p className="text-red-500 text-sm mt-1">{errors.accountHolderName.message}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="ifscCode" className="block text-sm font-medium text-gray-400 mb-2">
                        IFSC Code*
                        </label>
                        <input
                        type="text"
                        id="ifscCode"
                        {...register("ifscCode", {
                            required: "IFSC Code is required",
                            pattern: {
                                value: /^[A-Z]{4}0[A-Z0-9]{6}$/,
                                message: "Invalid IFSC Code",
                            },
                        })}
                        className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] ${
                            errors.ifscCode ? "border-red-500" : "border-gray-300"
                        } shadow-sm`}
                        />
                        {errors.ifscCode && (
                        <p className="text-red-500 text-sm mt-1">{errors.ifscCode.message}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="bankPassbook" className="block text-sm font-medium text-gray-400 mb-2">
                            Upload Bank Passbook image*
                        </label>
                        <input
                            type="file"
                            id="bankPassbook"
                            {...register("bankPassbook", {
                            required: "Bank passbook is required",
                            validate: {
                                lessThan2MB: (files) =>
                                files[0]?.size < 2 * 1024 * 1024 || "File size must be less than 2MB",
                                acceptedFormats: (files) =>
                                ["image/jpeg", "image/png"].includes(
                                    files[0]?.type
                                ) || "Only JPEG or PNG files are allowed",
                            },
                            })}
                            className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] ${ errors.bankPassbook ? "border-red-500" : "border-gray-300"} shadow-sm`}
                        />
                        {errors.file && (
                            <p className="text-red-500 text-sm mt-1">{errors.bankPassbook.message}</p>
                        )}
                    </div>
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="px-6 bg-primary text-white text-xl rounded-2xl hover:bg-primary-dark font-semibold py-3"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default BankDetails