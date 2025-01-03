import { useFormContext } from "react-hook-form";

const OtherDetails = () => {
  const { register, formState: { errors } } = useFormContext();
  return (
    <div>
      <div className="grid md:grid-cols-4 gap-4">
        <div>
            <label htmlFor="eWayBill" className="text-sm font-medium text-gray-400 mb-2">E Way Bill No.*</label>
            <input
                type="text"
                id="eWayBill"
                {...register('eWayBill', { required: 'E Way Bill No. is required' })}
                className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] ${errors.eWayBill ? "border-red-500" : "border-gray-300"
                    } shadow-sm`}
            />
            {errors.eWayBill && (
            <p className="text-red-500 text-sm mt-1">{errors.eWayBill.message}</p>
            )}
        </div>
        <div>
            <label htmlFor="remarks" className="text-sm font-medium text-gray-400 mb-2">Remarks*</label>
            <input
                type="text"
                id="remarks"
                {...register('remarks', { required: 'Remarks is required' })}
                className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] ${errors.remarks ? "border-red-500" : "border-gray-300"
                    } shadow-sm`}
            />
            {errors.remarks && (
            <p className="text-red-500 text-sm mt-1">{errors.remarks.message}</p>
            )}
        </div>
        <div>
            <label htmlFor="receipentGstNo" className="text-sm font-medium text-gray-400 mb-2">Receipent GST No*</label>
            <input
                type="text"
                id="receipentGstNo"
                {...register('receipentGstNo', { required: 'Receipent GST No is required' })}
                className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] ${errors.receipentGstNo ? "border-red-500" : "border-gray-300"
                    } shadow-sm`}
            />
            {errors.receipentGstNo && (
            <p className="text-red-500 text-sm mt-1">{errors.receipentGstNo.message}</p>
            )}
        </div>
        <div>
            <label htmlFor="orderId" className="text-sm font-medium text-gray-400 mb-2">Order ID*</label>
            <input
                type="text"
                id="orderId"
                {...register('orderId', { required: 'Order ID is required' })}
                className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] ${errors.orderId ? "border-red-500" : "border-gray-300"
                    } shadow-sm`}
            />
            {errors.orderId && (
            <p className="text-red-500 text-sm mt-1">{errors.orderId.message}</p>
            )}
        </div>
      </div>
    </div>
  )
}

export default OtherDetails