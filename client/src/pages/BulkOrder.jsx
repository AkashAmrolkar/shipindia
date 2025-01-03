import { useForm } from "react-hook-form"
const BulkOrder = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = (data) => {
        console.log(data); // Handle form data here
        alert("Registration successful");
    };
  return (
    <div>
        <h2 className="text-xl font-bold mb-5">Bulk Import Order | CSV File Upload</h2>
        <div className="md:flex gap-5 mb-8 items-center">
            <form onSubmit={handleSubmit(onSubmit)} className="md:flex md:gap-5 items-center">
                <input
                    type="file"
                    id="csvFile"
                    {...register("csvFile", {
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
                    className={` p-3 mb-5 md:mb-0 border rounded-lg text-sm bg-primary text-white font-semibold cursor-pointer outline-primary outline-[1px] ${ errors.csvFile ? "border-red-500" : "border-gray-300"} shadow-sm`}
                />
                <button type="submit" className="px-6  mb-5 md:mb-0 bg-primary text-white text-base rounded-full hover:bg-primary-dark font-semibold py-3">Import Now</button>
            </form>
            <a href="/sample_bulk_orders.csv" className="px-6 bg-primary text-white text-base rounded-full hover:bg-primary-dark font-semibold py-3" download>Download sample</a>
        </div>
        <div className="text-center text-base">No Orders found</div>
    </div>
  )
}

export default BulkOrder