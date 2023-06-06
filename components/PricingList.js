import {Pricing} from "@/lib/pricing"
import PricingElement from "./PricingElement"

export default function PricingList(){
    return(
        <section className="flex flex-col items-center w-full mt-2 font-outfit m-auto">
            <h1 className="text-center text-5xl mb-2">Grille de prix</h1>
            <p className="text-center text-gray-500 mb-10">Phrase introduction</p>

            <div className="flex justify-center w-8/12 lg:gap-3 gap-2">
                {
                    Pricing.items.map(function(pricing, index){
                        return (
                            <PricingElement key={index} title={pricing.title} price={pricing.price} color={pricing.color} content={pricing.content} />
                        )
                    })
                }
            </div>
        </section>
    )
}
