import { ArrowDown, BadgeAlert, BadgeCheck, Bike, Box, Calculator, ChartPie, CirclePlus, Hourglass, IndianRupee, MapPin, MapPinMinus, MapPinOff, Truck, Weight, X, Zap } from "lucide-react"
import { Button } from "../components/components/ui/button"
import { Link } from "react-router-dom"
import Card from "@/components/Card"
import { OuterCard } from "@/components/OuterCard"
import { SmallCards } from "@/components/SmallCards"
import { zone } from "../../src/assets/data"

const Seller = () => {
  const buttons = [
    {
      name: 'Add Order',
      icon: <CirclePlus />,
      link: '/seller/orders/addorders/singleorder'
    },
    {
      name: 'Quick Shipment',
      icon: <Zap />,
      link: '/seller/orders/addorders/quick-shipment'
    },
    {
      name: 'Calculator',
      icon: <Calculator />,
      link: '/seller/rate-calculator'
    },
    {
      name: 'Track',
      icon: <MapPin />,
      link: '/seller/track/'
    }
  ]
  const data=[
    {
      icon: <Box />,
      value: '0',
      label: 'Total Shipment'
    },
    {
      icon: <IndianRupee />,
      value: '0.0',
      label: 'total revenue'
    },
    {
      icon: <ChartPie />,
      value: '0.0',
      label: 'Average shipping'
    },
  ]

  const actions = [
    {
      icon: <Hourglass />,
      value: '0',
      label: 'Pending shipment'
    },
    {
      icon: <Weight />,
      value: '0',
      label: 'weight despute'
    },
    {
      icon: <MapPinOff />,
      value: '0',
      label: 'ndr'
    },
  ]

  const shippingDetails = [
    {
      title: "Shipping Details",
      innerCards: [
        { label: "Total shipment", 
          value: '0',
          icon: <Box />
        },
        { label: "Picup pending",  
          value: '0',
          icon:  <Hourglass />
        },
        { label: "In transit",  
          value: '0',
          icon:  <MapPinMinus />
        },
        { label: "Out for delivery",  
          value: '0',
          icon:  <Bike/>
        },
        { label: "Delivered",  
          value: '0',
          icon:  <BadgeCheck />
        },
        { label: "ndr pending",  
          value: '0',
          icon:  <BadgeAlert />
        },
        { label: "rto",  
          value: '0',
          icon:  <Truck />
        },
        { label: "cancelled",  
          value: '0',
          icon:  <X />
        },
        { label: "Exception",  
          value: '0',
          icon: <MapPinMinus /> 
        }
      ],
    },
  ]

  const codStatus = [
    {
      title: 'COD Status',
      data: [
        {
          label: 'Total COD',
          value: '0'
        },
        {
          label: 'COD Available',
          value: '0'
        },
        {
          label: 'COD Pending',
          value: '0'
        },
        {
          label: 'Last Remitted',
          value: '0'
        }
      ]
    }
  ]
  
  const ndrDetails = [
    {
      title: 'NDR Details',
      data: [
        {
          label: 'Total NDR',
          value: '0'
        },
        {
          label: 'Action Requested',
          value: '0'
        },
        {
          label: 'Action Required',
          value: '0'
        },
        {
          label: 'NDR Delivered',
          value: '0'
        }
      ]
    }
  ]
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-4 items-center">
        {
          buttons?.map((button)=>{
            return (
              <Button asChild key={button.name} className="bg-white text-primary rounded-full font-semibold text-base hover:bg-white">
                <Link href={`${button?.link}`} >{button?.icon} {button?.name}</Link>
              </Button>
            )
          })
        }
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {
          data?.map((dt)=>{
            return(
              <Card key={dt.name} props={{...dt}} className="col-span-4"/>
            )
          })
        }
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex">
          <div className="h-6 w-1 rounded-xl from-[#845adf] to-[#23b7e5] bg-gradient-to-b mr-2"></div>
          <p className="font-semibold text-gray-600"> Action Needed</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {
            actions?.map((dt)=>{
              return(
                <Card key={dt.name} props={{...dt}} className="col-span-4"/>
              )
            })
          }
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-4 rounded-2xl bg-white px-5 py-5">
        {
          shippingDetails?.map((details)=>{
            return(
              <OuterCard key={details.title} data={{...details}} />
            )
          })
        }
      </div>
      
      <div className="grid md:grid-cols-2 gap-5">
      <div className="col-span-6">
          <div className="gap-4 rounded-2xl bg-white px-5 py-5">
            {
              codStatus.map((status)=>{
                return(
                  <div key={status?.title}>
                    <div className="flex justify-between mb-6">
                      <div className="flex gap-2 items-center">
                          <div className="h-6 w-1 rounded-xl from-[#845adf] to-[#23b7e5] bg-gradient-to-b"></div>
                          <p className="font-semibold text-gray-600">{status?.title}</p>
                      </div>
                      <div>
                          <Link className="flex gap-2">View All <ArrowDown/></Link>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                        {status?.data?.length && (
                        status.data.map((card) => <SmallCards props={{...card}} />)
                        )}
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="col-span-6">
          <div className="gap-4 rounded-2xl bg-white px-5 py-5">
            {
              ndrDetails.map((ndrs)=>{
                return(
                  <div key={ndrs?.title}>
                    <div className="flex justify-between mb-6">
                      <div className="flex gap-2 items-center">
                          <div className="h-6 w-1 rounded-xl from-[#845adf] to-[#23b7e5] bg-gradient-to-b"></div>
                          <p className="font-semibold text-gray-600">{ndrs?.title}</p>
                      </div>
                      <div>
                          <Link className="flex gap-2">View All <ArrowDown/></Link>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                        {ndrs?.data?.length && (
                        ndrs.data.map((card) => <SmallCards props={{...card}} />)
                        )}
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 rounded-2xl bg-white px-5 py-5">
        <div className="flex gap-2 mb-8">
          <div className="h-6 w-1 rounded-xl from-[#845adf] to-[#23b7e5] bg-gradient-to-b mr-2"></div>
          <p className="font-semibold text-gray-600">Shipment - Zone Distribution </p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-5 mb-8">
            {
              zone?.map((zone)=>{
                return(
                  <div key={zone.name} className="text-center">
                    <div className={`font-bold text-2xl h-20 w-20 text-white rounded-xl mx-auto flex justify-center items-center mb-2`}   style={{ backgroundColor: zone?.zoneColor }}>{zone.value}</div>
                    <div className="font-bold text-sm mb-2">{zone?.name}</div>
                    <div className="text-sm">{zone?.area}</div>
                  </div>
                )
              })
            }
        </div>
      </div>
    </div>
  )
}

export default Seller