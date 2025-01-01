import { Link } from "react-router-dom"

const PicupAddresses = () => {
  return (
    <div>
        <div className="flex flex-wrap justify-between items-center mb-5">
            <h2 className="text-2xl font-bold text-black mb-5">Pickup locations</h2>
            <Link to={'/seller/settings/pickup-addresses/form'} className="bg-primary rounded-full px-6 py-3 text-white font-semibold">Add new address</Link>
            
        </div>
        <div>
            <table className="table-auto border-collapse border border-gray-300 w-full text-left">
                <tr>
                    <th className="text-left border border-gray-300 px-5 py-3 bg-primary" >
                        Sr. No
                    </th>
                    <th className="text-left border border-gray-300 px-5 py-3 bg-primary">
                        Person Name
                    </th>
                    <th className="text-left border border-gray-300 px-5 py-3 bg-primary">
                        Mobile Number
                    </th>
                    <th className="text-left border border-gray-300 px-5 py-3 bg-primary">
                        Email
                    </th>
                    <th className="text-left border border-gray-300 px-5 py-3 bg-primary">
                        Pincode
                    </th>
                    <th className="text-left border border-gray-300 px-5 py-3 bg-primary">
                        City
                    </th>
                    <th className="text-left border border-gray-300 px-5 py-3 bg-primary">
                        State
                    </th>
                    <th className="text-left border border-gray-300 px-5 py-3 bg-primary">
                        Edit
                    </th>
                </tr>
                <tr>
                    <td className="px-5 py-3 bg-white border-secondary">
                        1
                    </td>
                    <td className="px-5 py-3 bg-white border-secondary">
                        Akash Amrolkar
                    </td>
                    <td className="px-5 py-3 bg-white border-secondary">
                        8380863314
                    </td>
                    <td className="px-5 py-3 bg-white border-secondary">
                        akashamrolkar10@gmail.com
                    </td>
                    <td className="px-5 py-3 bg-white border-secondary">
                        416508
                    </td>
                    <td className="px-5 py-3 bg-white border-secondary">
                        Kolhapur
                    </td>
                    <td className="px-5 py-3 bg-white border-secondary">
                        Maharashtra
                    </td>
                    <td className="px-5 py-3 bg-white border-secondary">
                        Edit
                    </td>
                </tr>
            </table>
        </div>
    </div>
  )
}

export default PicupAddresses