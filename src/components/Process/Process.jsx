import React from 'react'
import Heading from '../Heading/Heading'
import { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3, TbCircleNumber4  } from "react-icons/tb";
import { PiFactory, PiPlant } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";

const Process = () => {

    const renderSteps = steps.map(item=>{
        return(
            <div>
               <span className='flex justify-center items-center rounded-full w-18 h-18 text-8xl bg-zinc-800 text outline-[3px] outline-offset-7 outline-zinc-800 outline-dashed'>{item.number}</span>
                <div>
                    <div>
                        <span>{item.icon}</span>
                    </div>
                    <div>
                        <h4>{item.title}</h4>
                        <p>{item.parag}</p>
                    </div>
                </div> 
            </div>
        )
    })
                                                                                                                                                                                            
  return (
    <section>
        <div className='max-w-[1400px] mx-auto px-10 py-20'>
            <div className='mr-auto w-fit'>
                <Heading highlight="Our" heading="Process"/>
            </div>
            <div className='flex mt-20 items-center'>
                {renderSteps}
            </div>
        </div>
    </section>
  )
}

export default Process   

const steps = [
    {
        id: 1,
        number: <TbCircleNumber1 />,
        title:'Sourcing',
        parag:'It is a long established fact that a reader',
        icon: <PiPlant />
    },
    {
        id: 2,
        number: <TbCircleNumber2 />,
        title:'Maufacturing',
        parag:'It is a long established fact that a render',
        icon: <PiFactory />            
    },
    {
        id: 3,
        number: <TbCircleNumber3 />,
        title:'Quality Control',
        parag:'It is a long established fact that a render',
        icon: <SlBadge />            
    },
    {
        id: 4,
        number: <TbCircleNumber4 />,
        title:'Logistics',
        parag:'It is a long established fact that a render',                                                  
        icon: <BsTruck />                                                        
    },
]        





