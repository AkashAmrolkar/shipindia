import { useForm } from "react-hook-form";

const KycForm = () => {
     const { register, handleSubmit, formState: { errors }, } = useForm();
    
    const onSubmit = (data) => {
        console.log(data); // Handle form data here
        alert("Registration successful");
    };
  return (
    <div className="px-4 py-8 rounded-3xl bg-white shadow-custom">
        <div className=" md:w-3/4">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                    <label htmlFor="adharNumber" className="block text-sm font-medium text-gray-400 mb-2">
                    Adhar Number*
                    </label>
                    <input
                    type="text"
                    id="adharNumber"
                    {...register("adharNumber", {
                        required: "Adhar number is required",
                        pattern: {
                        value: /^\d{12}$/,
                        message: "Invalid Adhard Number",
                        },
                    })}
                    className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] ${
                        errors.adharNumber ? "border-red-500" : "border-gray-300"
                    } shadow-sm`}
                    />
                    {errors.adharNumber && (
                    <p className="text-red-500 text-sm mt-1">{errors.adharNumber.message}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="adharFile" className="block text-sm font-medium text-gray-400 mb-2">
                        Upload Adhar Card image or PDF*
                    </label>
                    <input
                        type="file"
                        id="adharFile"
                        {...register("adharFile", {
                        required: "File is required",
                        validate: {
                            lessThan2MB: (files) =>
                            files[0]?.size < 2 * 1024 * 1024 || "File size must be less than 2MB",
                            acceptedFormats: (files) =>
                            ["image/jpeg", "image/png", "application/pdf"].includes(
                                files[0]?.type
                            ) || "Only JPEG, PNG, or PDF files are allowed",
                        },
                        })}
                        className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] ${ errors.adharFile ? "border-red-500" : "border-gray-300"} shadow-sm`}
                    />
                    {errors.file && (
                        <p className="text-red-500 text-sm mt-1">{errors.adharFile.message}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="panNumber" className="block text-sm font-medium text-gray-400 mb-2">
                        PAN Number*
                    </label>
                    <input
                        type="text"
                        id="panNumber"
                        {...register("panNumber", {
                        required: "PAN Card number is required",
                        validate: {
                            isValidFormat: (value) => /^[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}$/.test(value.trim()) || "Invalid PAN Card number format",
                        },
                        })}
                        className={`w-full p-3 border rounded-lg uppercase text-sm bg-white outline-primary outline-[1px] ${
                        errors.panNumber ? "border-red-500" : "border-gray-300"
                        } shadow-sm`}
                        style={{ textTransform: "uppercase" }} // Ensures input is in uppercase
                    />
                    {errors.panNumber && (
                        <p className="text-red-500 text-sm mt-1">{errors.panNumber.message}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="panFile" className="block text-sm font-medium text-gray-400 mb-2">
                        Upload PAN Card image or PDF*
                    </label>
                    <input
                        type="file"
                        id="panFile"
                        {...register("panFile", {
                        required: "File is required",
                        validate: {
                            lessThan2MB: (files) =>
                            files[0]?.size < 2 * 1024 * 1024 || "File size must be less than 2MB",
                            acceptedFormats: (files) =>
                            ["image/jpeg", "image/png", "application/pdf"].includes(
                                files[0]?.type
                            ) || "Only JPEG, PNG, or PDF files are allowed",
                        },
                        })}
                        className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] ${ errors.panFile ? "border-red-500" : "border-gray-300"} shadow-sm`}
                    />
                    {errors.panFile && (
                        <p className="text-red-500 text-sm mt-1">{errors.panFile.message}</p>
                    )}
                </div>
            </div>
            <button type="submit" className="px-6 bg-primary text-white text-xl rounded-2xl hover:bg-primary-dark font-semibold py-3"> Submit </button>
        </form>
        </div>
    </div>
  )
}

export default KycForm