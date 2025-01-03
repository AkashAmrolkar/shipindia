import { Trash2 } from "lucide-react";
import { useFieldArray, useFormContext } from "react-hook-form";

const PackageDetails = () => {
  const { register, control, formState: { errors } } = useFormContext();

  // Corrected variable names for remove functions
  const { fields: boxesFields, append: appendBoxes, remove: removeBoxes } = useFieldArray({
    control,
    name: "packageDetails.boxes",
  });

  const { fields: invoicesFields, append: appendInvoices, remove: removeInvoices } = useFieldArray({
    control,
    name: "packageDetails.invoices",
  });

  return (
    <div>
      <div className="mb-8">
        <p className="block font-medium mb-5">Total Box</p>
        {boxesFields.map((field, index) => (
          <div key={field.id} className="p-4 last:mb-4">
            <div className="grid md:grid-cols-12 gap-5 items-center mb-5">
              <div className="col-span-12 md:col-span-2">
                <label className="block mb-1 text-sm font-medium text-gray-600">No. of Box*</label>
                <input
                  {...register(`packageDetails.boxes.${index}.NoOfBox`, {
                    required: "No. of Box is required",
                    pattern: { value: /^[0-9.]+$/, message: "Invalid No. of Box" },
                  })}
                  type="number"
                  placeholder="Enter No. of Box"
                  className="w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] border-gray-300 shadow-custom"
                />
              </div>
              <div className="col-span-12 md:col-span-2">
                <label className="block mb-1 text-sm font-medium text-gray-600">Weight in KG*</label>
                <input
                  {...register(`packageDetails.boxes.${index}.weight`, {
                    required: "Weight is required",
                    pattern: { value: /^[0-9.]+$/, message: "Invalid Weight" },
                  })}
                  type="number"
                  placeholder="Enter Weight"
                  className="w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] border-gray-300 shadow-custom"
                />
              </div>
              <div className="col-span-12 md:col-span-2">
                <label className="block mb-1 text-sm font-medium text-gray-600">Length in CM*</label>
                <input
                  {...register(`packageDetails.boxes.${index}.length`, {
                    required: "Length is required",
                    pattern: { value: /^[0-9.]+$/, message: "Invalid Length" },
                  })}
                  type="number"
                  placeholder="Enter Length"
                  className="w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] border-gray-300 shadow-custom"
                />
              </div>
              <div className="col-span-12 md:col-span-2">
                <label className="block mb-1 text-sm font-medium text-gray-600">Width in CM*</label>
                <input
                  {...register(`packageDetails.boxes.${index}.width`, {
                    required: "width is required",
                    pattern: { value: /^[0-9.]+$/, message: "Invalid width" },
                  })}
                  type="number"
                  placeholder="Enter width"
                  className="w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] border-gray-300 shadow-custom"
                />
              </div>
              <div className="col-span-12 md:col-span-2">
                <label className="block mb-1 text-sm font-medium text-gray-600">Height in CM*</label>
                <input
                  {...register(`packageDetails.boxes.${index}.height`, {
                    required: "height is required",
                    pattern: { value: /^[0-9.]+$/, message: "Invalid height" },
                  })}
                  type="number"
                  placeholder="Enter height"
                  className="w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] border-gray-300 shadow-custom"
                />
              </div>
              <div className="col-span-12 md:col-span-2">
              {boxesFields.length > 1 && (<button type="button" onClick={() => removeBoxes(index)} className="text-red-500 mt-2"><Trash2 /></button>)}
              </div>
            </div>
          </div>
        ))}
        
        <button type="button" onClick={() => appendBoxes({ weight: "", length: "", width: "", height: "", numberOfBoxes: "" })} className="bg-primary text-white px-4 py-2 rounded">
          Add Package
        </button>
      </div>

      <div>
        <p className="block font-medium mb-5">Invoices</p>
        {invoicesFields.map((field, index) => (
          
          <div key={field.id} className="">
            <div className="grid md:grid-cols-12 gap-5 items-center mb-5">
              <div className="col-span-12 md:col-span-4">
                <label className="block mb-1 text-sm font-medium text-gray-600">Date*</label>
                <input
                  {...register(`packageDetails.invoices.${index}.date`, {
                    required: "Date is required",
                  })}
                  type="date"
                  className="w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] border-gray-300 shadow-custom"
                />
              </div>
              <div className="col-span-12 md:col-span-2">
                <label className="block mb-1 text-sm font-medium text-gray-600">Value*</label>
                <input
                  {...register(`packageDetails.invoices.${index}.value`, {
                    required: "value is required",
                    pattern: { value: /^[0-9.]+$/, message: "Invalid value" },
                  })}
                  type="number"
                  placeholder="Enter value"
                  className="w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] border-gray-300 shadow-custom"
                />
              </div>
              <div className="col-span-12 md:col-span-2">
                <label className="block mb-1 text-sm font-medium text-gray-600">Number*</label>
                <input
                  {...register(`packageDetails.invoices.${index}.number`, {
                    required: "number is required",
                    pattern: { number: /^[0-9.]+$/, message: "Invalid number" },
                  })}
                  type="number"
                  placeholder="Enter number"
                  className="w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] border-gray-300 shadow-custom"
                />
              </div>
              <div className="col-span-12 md:col-span-2">
                {invoicesFields.length > 1 && (<button type="button" onClick={() => removeInvoices(index)} className="text-red-500 mt-2"><Trash2 /></button>)}
              </div>
            </div>
          </div>
        ))}
        <button type="button" onClick={() => appendInvoices({ date: "", value: "", quantity: "" })} className="bg-primary text-white px-4 py-2 rounded">
          Add Shipment
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="col-span-2 md:col-span-1">
          <label className="block mb-1 text-sm font-medium text-gray-600">Shipping Mode</label>
          <select
          {...register('shipmentMode', { required: "shipping mode is required" })}
          className="w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] border-gray-300 shadow-custom"
          >
          <option value="">Shipping mode</option>
          <option value="Surface">Surface</option>
          <option value="Air">Air</option>
          </select>
        </div>
        <div className="col-span-2 md:col-span-1">
          <label htmlFor="invoiceDocument" className="block text-sm font-medium text-gray-400 mb-2">
              Upload invoice document*
          </label>
          <input
              type="file"
              id="invoiceDocument"
              {...register("invoiceDocument", {
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
              className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] ${ errors.invoiceDocument ? "border-red-500" : "border-gray-300"} shadow-sm`}
          />
          {errors.invoiceDocument && (
              <p className="text-red-500 text-sm mt-1">{errors.invoiceDocument.message}</p>
          )}
        </div>
      </div>
      
      <div className="grid md:grid-cols-3">
        <div className="col-span-2 md:col-span-1">
          <label className="block mb-1 text-sm font-medium text-gray-600">Payment Mode</label>
          <select
          {...register('paymentMode', { required: "Payment mode is required" })}
          className="w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] border-gray-300 shadow-custom"
          >
          <option value="">Payment mode</option>
          <option value="Surface">Surface</option>
          <option value="Air">Air</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
