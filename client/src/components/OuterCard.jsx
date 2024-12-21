import { Link } from "react-router-dom"
import Card from "./Card"
import { ArrowDown } from "lucide-react"

export const OuterCard = ({data}) => {
    console.log(data)
  return (
    <div className="flex-1 flex flex-col gap-4 rounded-2xl bg-white px-5 py-5">
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <div className="h-6 w-1 rounded-xl from-[#845adf] to-[#23b7e5] bg-gradient-to-b"></div>
                <p className="font-semibold text-gray-600">{data?.title}</p>
            </div>
            <div>
                <Link className="flex gap-2">View All <p><ArrowDown/></p></Link>
            </div>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
            {data?.innerCards?.length && (
            data.innerCards.map((card, index) => <Card props={{...card}} />)
            )}
        </div>
    </div>
  )
}
