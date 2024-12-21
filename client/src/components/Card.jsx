const Card = ({props}) => {
  return (
    <div className="bg-white shadow-custom px-5 py-5 rounded-xl flex gap-3">
        <div className="w-11 h-11 text-center text-white rounded-lg flex justify-center items-center bg-primary">
            {props?.icon}
        </div>
        <div>
            <p className="font-bold text-lg">{props?.value}</p>
            <p className="uppercase text-gray-500 text-xs font-bold">{props?.label}</p>
        </div>
    </div>
  )
}

export default Card