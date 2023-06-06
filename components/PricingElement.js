import Link from "next/link"
import Image from "next/image"

export default function PricingElement({title, price, color, content}){
    return(
        <div className="flex md:flex-col justify-evenly text-center">
            <div className={`flex flex-col rounded justify-center text-white bg-${color} p-5`}>
                <p className="m-0 lg:m-1 text-3xl">{title}</p>
                <p className="m-0 lg:m-1"><span className="lg:text-4xl text-2xl">{price}</span>€</p>
                <button className={`m-1 px-4 py-2 bg-white rounded text-sm lg:text-lg text-${color}`}><Link href="#contact">Contactez-nous</Link></button>
            </div>
            <div className="m-auto border-2 border-t-0 border-gray-200 w-11/12 text-align flex flex-col justify-center">
                {
                    content.map(function(text, index){
                        return (
                            text.active ? (<p key={index} className="mt-2 lg:text-sm text-xs flex text-center w-full justify-center items-center"><img src="/images/check.png" alt="check_logo" className="w-1/12 h-1/12 m-4" /> {text.title}</p>)
                            : (<p key={index} className="mt-2 lg:text-sm text-xs text-gray-400 flex text-center w-full justify-center items-center"><img src="/images/cross.png" alt="cross_logo" className="w-1/12 h-1/12 m-4" />  {text.title}</p>)
                        )
                    })
                }
            </div>
        </div>
    )
}
