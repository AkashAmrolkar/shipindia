import { useFormContext } from "react-hook-form";

const Carrierpartner = () => {
    const { register, formState: { errors } } = useFormContext();
  return (
    <div className="grid md:grid-cols-2 gap-5">
        <div className="col-span-2 md:col-span-1">
          <label htmlFor="partners" className="block mb-1 text-sm font-medium text-gray-600">Carrier Partners</label>
          <select
          {...register('partners', { required: "Carrier Partners is required" })}
          className="w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] border-gray-300 shadow-custom"
          >
          <option value="">Carrier Partners</option>
          <option value="FedEx">FedEx</option>
          <option value="Ecom Express">Ecom Express</option>
          <option value="Blue Dart">Blue Dart</option>
          <option value="DTDC">DTDC</option>
          </select>
          {errors.partners && (
              <p className="text-red-500 text-sm mt-1">{errors.partners.message}</p>
          )}
        </div>
    </div>
  )
}

export default Carrierpartner