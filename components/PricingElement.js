import Link from "next/link"
import Image from "next/image"
import {FaCheck, FaCross} from "react-icons/fa";
import {getIcons} from "@/lib/func/iconFunc";

export default function PricingElement({title, price, color, content}){
    return(
        <div className="flex md:flex-col justify-evenly text-center min-w-[20%]">
            <div className={`flex flex-col rounded justify-center text-white bg-${color} p-5`}>
                <p className="m-0 lg:m-1 text-3xl">{title}</p>
                <p className="m-0 lg:m-1"><span className="lg:text-4xl text-2xl">{price}</span>€</p>
                <button className={`m-1 px-4 py-2 bg-white rounded text-sm lg:text-lg text-${color}`}><Link href="#contact">Contactez-nous</Link></button>
            </div>
            <div className="m-auto border-2 border-t-0 border-gray-200 w-11/12 text-align flex flex-col justify-center">
                {
                    content.map(function(text, index){
                        return (
                            text.active ? (<p key={index} className="mt-4 mb-4 lg:text-sm text-xs flex text-center w-full justify-center items-center"><span className="ml-5 text-primary">{getIcons('check')}</span> <span className="ml-5">{text.title}</span></p>)
                            : (<p key={index} className="mt-4 mb-4 lg:text-sm text-xs text-gray-400 flex text-center w-full justify-center items-center"><span className="ml-5 text-primary">{getIcons('cross')}</span>  <span className="ml-5">{text.title}</span></p>)
                        )
                    })
                }
            </div>
        </div>
    )
}
