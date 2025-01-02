import { useFormContext } from "react-hook-form";

const PackageDetailsFields = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="bg-white shadow-custom rounded-3xl px-5 py-10">
      <h2 className="text-xl font-bold mb-4">Package Details</h2>
      <div>
        <label htmlFor="deadWeight" className="block text-sm font-medium text-gray-600">Dead Weight</label>
        <input
          {...register("packageDetails.deadWeight", { required: "Dead weight is required" })}
          type="number"
          placeholder="Enter weight"
          className={`w-full p-3 border rounded-lg ${
            errors.packageDetails?.deadWeight ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.packageDetails?.deadWeight && (
          <p className="text-red-500 text-sm mt-1">{errors.packageDetails.deadWeight.message}</p>
        )}
      </div>

      <div className="grid grid-cols-3 gap-4 mt-4">
        <div>
          <label htmlFor="length" className="block text-sm font-medium text-gray-600">Length</label>
          <input
            {...register("packageDetails.length", { required: "Length is required" })}
            type="number"
            placeholder="Length"
            className="w-full p-3 border rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="width" className="block text-sm font-medium text-gray-600">Width</label>
          <input
            {...register("packageDetails.width", { required: "Width is required" })}
            type="number"
            placeholder="Width"
            className="w-full p-3 border rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="height" className="block text-sm font-medium text-gray-600">Height</label>
          <input
            {...register("packageDetails.height", { required: "Height is required" })}
            type="number"
            placeholder="Height"
            className="w-full p-3 border rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default PackageDetailsFields;
