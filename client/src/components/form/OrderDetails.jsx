{/*
import { Trash2 } from "lucide-react";
import { useForm, useFieldArray } from "react-hook-form";

const OrderDetails = () => {
    const { register, control, handleSubmit, formState: {errors} } = useForm({
        defaultValues: {
            products: [{ productName: "", productCategory: "", quantity: "", unitPrice: "" }],
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "products",
    });

    const onSubmit = (data) => {
        console.log("Form Data:", data);
        alert("Form submitted successfully!");
    };
  return (
    <div className="bg-white shadow-custom rounded-3xl px-5 py-10">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" border-b border-gray-300 py-8">
                <label htmlFor="orderID" className="block text-sm font-medium text-gray-400 mb-2">Order ID</label>
                <input
                type="text"
                id="orderID"
                {...register("orderID", { required: "Order ID is required" })}
                className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] ${
                    errors.orderID ? "border-red-500" : "border-gray-300"
                } shadow-sm`}
                />
                {errors.orderID && (
                <p className="text-red-500 text-sm mt-1">{errors.orderID.message}</p>
                )}
            </div>
            <div className=" border-b border-gray-300 py-8">
                <h2 className="text-2xl font-semibold text-black mb-4">Product Details</h2>
                {fields.map((item, index) => (
                    <div key={item.id} className="mb-4 p-4">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                            <div className="col-span-12 md:col-span-4">
                                <label className="block mb-1 text-sm font-medium text-gray-600">Product Name</label>
                                <input
                                {...register(`products[${index}].productName`, { required: "Product name is required" })}
                                type="text"
                                placeholder="Enter product name"
                                className="w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] border-gray-300 shadow-custom"
                                />
                            </div>
                            <div className="col-span-12 md:col-span-2">
                                <label className="block mb-1 text-sm font-medium text-gray-600">Product Category</label>
                                <select
                                {...register(`products[${index}].productCategory`, { required: "Category is required" })}
                                className="w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] border-gray-300 shadow-custom"
                                >
                                <option value="">Select Category</option>
                                <option value="Electronics">Electronics</option>
                                <option value="Clothing">Clothing</option>
                                <option value="Groceries">Groceries</option>
                                </select>
                            </div>
                            <div className="col-span-12 md:col-span-2">
                                <label className="block mb-1 text-sm font-medium text-gray-600">Quantity</label>
                                <input
                                {...register(`products[${index}].quantity`, {
                                    required: "Quantity is required",
                                    pattern: { value: /^[0-9]+$/, message: "Invalid quantity" },
                                })}
                                type="number"
                                placeholder="Enter quantity"
                                className="w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] border-gray-300 shadow-custom"
                                />
                            </div>
                            <div className="col-span-12 md:col-span-2">
                                <label className="block mb-1 text-sm font-medium text-gray-600">Unit Price</label>
                                <input
                                {...register(`products[${index}].unitPrice`, {
                                    required: "Unit price is required",
                                    pattern: { value: /^[0-9.]+$/, message: "Invalid price" },
                                })}
                                type="number"
                                step="0.01"
                                placeholder="Enter unit price"
                                className="w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] border-gray-300 shadow-custom"
                                />
                            </div>
                            <div className="col-span-12 md:col-span-2">
                                {fields.length > 1 && (
                                <button
                                    type="button"
                                    
                                    className="mt-4 text-red-500 hover:text-red-700"
                                >
                                    <Trash2 onClick={() => remove(index)} className="text-red-600 " />
                                </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
                <button type="button" onClick={() => append({ productName: "", productCategory: "", quantity: "", unitPrice: "" }) } className="px-4 py-2 bg-[#ffd3c6] text-primary font-semibold rounded-full" >Add Product</button>
            </div>
            <div className=" py-8">
                <h2 className="text-2xl font-semibold mb-4">Payment Details</h2>
                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">
                    Payment Type <span className="text-red-500">*</span>
                    </label>
                    <div className="flex items-center gap-4">
                    <label className="flex items-center">
                        <input
                        type="radio"
                        value="COD"
                        {...register("paymentType", { required: "Payment type is required" })}
                        className="mr-2"
                        />
                        COD (Cash on Delivery)
                    </label>
                    <label className="flex items-center">
                        <input
                        type="radio"
                        value="Prepaid"
                        {...register("paymentType", { required: "Payment type is required" })}
                        className="mr-2"
                        />
                        Prepaid
                    </label>
                    </div>
                    {errors.paymentType && (
                    <p className="text-red-500 text-sm mt-2">{errors.paymentType.message}</p>
                    )}
                </div>
            </div>
            <div className="px-4 py-8 bg-[#ffd3c6] rounded-3xl">
                <div className="flex justify-between items-center mb-1">
                    <p className="text-base">Sub-total for Product</p>
                    <p className="text-lg font-semibold text-secondary">₹0</p>
                </div>
                <div className="flex justify-between items-center mb-1">
                    <p className="text-base">Other Charges</p>
                    <p className="text-lg font-semibold text-secondary">₹0</p>
                </div>
                <div className="flex justify-between items-center mb-1">
                    <p className="text-base font-semibold">Total Order Value</p>
                    <p className="text-lg font-semibold text-secondary">₹0</p>
                </div>
            </div>
        </form>
    </div>
  )
}

export default OrderDetails
*/}

import { Trash2 } from "lucide-react";
import { useFieldArray, useFormContext } from "react-hook-form";

const OrderDetails = () => {
  const { register, control, formState: { errors } } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "orderDetails.products",
  });

  return (
    <div className="bg-white shadow-custom rounded-3xl px-5 py-10">
      <h2 className="text-xl font-bold mb-4">Order Details</h2>
      <div className=" border-b border-gray-300 py-8">
        <label htmlFor="orderID" className="block text-sm font-medium text-gray-400 mb-2">Order ID</label>
        <input
        type="text"
        id="orderID"
        {...register("orderID", { required: "Order ID is required" })}
        className={`w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] ${
            errors.orderID ? "border-red-500" : "border-gray-300"
        } shadow-sm`}
        />
        {errors.orderID && (
        <p className="text-red-500 text-sm mt-1">{errors.orderID.message}</p>
        )}
    </div>

      <div className=" border-b border-gray-300 py-8">
            <h2 className="text-2xl font-semibold text-black mb-4">Product Details</h2>
            {fields.map((item, index) => (
                <div key={item.id} className="mb-4 py-4">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                        <div className="col-span-12 md:col-span-4">
                            <label className="block mb-1 text-sm font-medium text-gray-600">Product Name</label>
                            <input
                            {...register(`products[${index}].productName`, { required: "Product name is required" })}
                            type="text"
                            placeholder="Enter product name"
                            className="w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] border-gray-300 shadow-custom"
                            />
                        </div>
                        <div className="col-span-12 md:col-span-2">
                            <label className="block mb-1 text-sm font-medium text-gray-600">Product Category</label>
                            <select
                            {...register(`products[${index}].productCategory`, { required: "Category is required" })}
                            className="w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] border-gray-300 shadow-custom"
                            >
                            <option value="">Select Category</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Clothing">Clothing</option>
                            <option value="Groceries">Groceries</option>
                            </select>
                        </div>
                        <div className="col-span-12 md:col-span-2">
                            <label className="block mb-1 text-sm font-medium text-gray-600">Quantity</label>
                            <input
                            {...register(`products[${index}].quantity`, {
                                required: "Quantity is required",
                                pattern: { value: /^[0-9]+$/, message: "Invalid quantity" },
                            })}
                            type="number"
                            placeholder="Enter quantity"
                            className="w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] border-gray-300 shadow-custom"
                            />
                        </div>
                        <div className="col-span-12 md:col-span-2">
                            <label className="block mb-1 text-sm font-medium text-gray-600">Unit Price</label>
                            <input
                            {...register(`products[${index}].unitPrice`, {
                                required: "Unit price is required",
                                pattern: { value: /^[0-9.]+$/, message: "Invalid price" },
                            })}
                            type="number"
                            step="0.01"
                            placeholder="Enter unit price"
                            className="w-full p-3 border rounded-lg text-sm bg-white outline-primary outline-[1px] border-gray-300 shadow-custom"
                            />
                        </div>
                        <div className="col-span-12 md:col-span-2">
                            {fields.length > 1 && (
                            <button
                                type="button"
                                
                                className="mt-4 text-red-500 hover:text-red-700"
                            >
                                <Trash2 onClick={() => remove(index)} className="text-red-600 " />
                            </button>
                            )}
                        </div>
                    </div>
                </div>
            ))}
            <button type="button" onClick={() => append({ productName: "", productCategory: "", quantity: "", unitPrice: "" }) } className="px-4 py-2 bg-[#ffd3c6] text-primary font-semibold rounded-full" >Add Product</button>
        </div>
        <div className=" py-8">
            <h2 className="text-2xl font-semibold mb-4">Payment Details</h2>
            <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                Payment Type <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center gap-4">
                <label className="flex items-center">
                    <input
                    type="radio"
                    value="COD"
                    {...register("paymentType", { required: "Payment type is required" })}
                    className="mr-2"
                    />
                    COD (Cash on Delivery)
                </label>
            </div>
            <div>
                <label className="flex items-center">
                    <input
                    type="radio"
                    value="Prepaid"
                    {...register("paymentType", { required: "Payment type is required" })}
                    className="mr-2"
                    />
                    Prepaid
                </label>
                </div>
                {errors.paymentType && (
                <p className="text-red-500 text-sm mt-2">{errors.paymentType.message}</p>
                )}
            </div>
        </div>
        <div className="px-4 py-8 bg-[#ffd3c6] rounded-3xl">
            <div className="flex justify-between items-center mb-1">
                <p className="text-base">Sub-total for Product</p>
                <p className="text-lg font-semibold text-secondary">₹0</p>
            </div>
            <div className="flex justify-between items-center mb-1">
                <p className="text-base">Other Charges</p>
                <p className="text-lg font-semibold text-secondary">₹0</p>
            </div>
            <div className="flex justify-between items-center mb-1">
                <p className="text-base font-semibold">Total Order Value</p>
                <p className="text-lg font-semibold text-secondary">₹0</p>
            </div>
        </div>
    </div>
  );
};

export default OrderDetails;
