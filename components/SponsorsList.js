import SponsorElement from "./SponsorElement";
import { Sponsor } from "@/lib/sponsor";

export default function SponsorsList(){

    return(
        <section className="flex flex-col items-center w-full mt-10 font-outfit m-auto">
            <h1 className="text-center text-5xl mb-2">Ils nous font confiance</h1>
            <p className="text-center text-gray-500 mb-10">Phrase introduction</p>

            <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-6 md:px-28 px-10 flex">
                {Sponsor.items.map(function(sponsor){
                    return (
                        <SponsorElement key={sponsor.key} title={sponsor.title} text={sponsor.text} link={sponsor.link} logo_path={sponsor.logo_path} />
                    )
                })}
            </div>
        </section>
    )
}
