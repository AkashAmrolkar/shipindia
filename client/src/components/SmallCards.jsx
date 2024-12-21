import React from 'react'

export const SmallCards = ({props}) => {
  return (
    <div className="bg-white shadow-custom px-5 py-5 rounded-xl">
        <div>
            <p className="font-bold text-lg">{props?.value}</p>
            <p className="uppercase text-gray-500 text-xs font-bold">{props?.label}</p>
        </div>
    </div>
  )
}
