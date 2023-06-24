import {getIcons} from "@/lib/func/iconFunc";
import Link from "next/link";

export default function Footer({logoImg,socials,items,copyright})
{
    items = items.filter(el => !el.inHeader || el.inFooter);
    return(
        <footer className={"font-outfit px-10 md:px-28 pt-5"}>
            <div className={"grid md:grid-cols-2 gap-y-4"}>
                <div className={"grid gap-y-4 mx-auto md:mx-0"}>
                    <div>
                        <img src={logoImg} className={"h-16 md:h-24 mx-auto md:mx-0"}/>
                    </div>
                    <div className={"hidden md:flex items-center text-primary gap-x-4"}>
                        {socials.map(function(social){
                            return(
                                <div key={social.id}>
                                    <a href={social.url} target={"_blank"} rel={"noreferrer"}>
                                        {getIcons(social.type)}
                                    </a>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className={"grid md:grid-cols-3 gap-y-2 place-content-center mx-auto"}>
                    {items.map(function(item){
                        return(
                            <button key={item.id} className={"hover:underline "}>
                                <Link href={item.url}>
                                    {item.label}
                                </Link>
                            </button>
                        )
                    })}
                </div>
                <div className={"md:hidden flex items-center justify-center text-primary gap-x-4"}>
                    {socials.map(function(social){
                        return(
                            <div key={social.id}>
                                <a href={social.url} target={"_blank"} rel={"noreferrer"}>
                                    {getIcons(social.type)}
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
            <p className={"py-2 text-tertiary text-center"}>{copyright}</p>
        </footer>
    );
}
