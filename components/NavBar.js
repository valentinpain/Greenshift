"use client"
import Link from "next/link";
import {useEffect, useState} from "react";
import {usePathname} from "next/navigation";

export default function NavBar({logo, items}){
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    items = items.filter(el => el.inHeader || !el.inFooter);

    useEffect(()=>{
        if(open){
            document.getElementsByTagName('body')[0].className = "stop-scrolling"
            document.getElementsByTagName('body')[0].addEventListener('touchmove', e => e.preventDefault());

        }else{
            document.getElementsByTagName('body')[0].className = document.getElementsByTagName('body')[0].className.replace(/(?:^|\s)stop-scrolling(?!\S)/g , "" );
            document.getElementsByTagName('body')[0].removeEventListener('touchmove', e => e.preventDefault());
        }
    })

    return(
        <header>
            <nav className={"flex items-center justify-between px-10 md:px-28 py-2"}>
                <div className={""}>
                    <Link href={"/"}>
                        <img src={"/logo.png"} className={"h-16 md:h-24 lg:h-36"}/>
                    </Link>
                </div>

                <div className={"hidden lg:flex gap-x-4 font-outfit items-center"}>
                    {items.map(function(item){
                        if(item.type === "button"){
                            return(
                                <button key={item.id} className={"btn_primary"}>
                                    <Link href={pathname+item.url}>
                                        {item.label}
                                    </Link>
                                </button>
                            )
                        }
                        if(item.type === "label"){
                            return(
                                <span key={item.id} className={`text-lg hover:text-primary hover:underline ${pathname === item.url ? 'text-primary' : ''}`}>
                                <Link href={item.url}>
                                    {item.label}
                                </Link>
                            </span>
                            )
                        }
                    })}
                </div>
                <div className={"block cursor-pointer lg:hidden "} onClick={() => setOpen(!open)}>
                    <div className={`w-[18px] h-[3px] bg-primary transition-all  duration-500 ${open && '-rotate-[405deg] '}`}></div>
                    <div className={`w-[18px] h-[3px] bg-primary mt-1 ${open && 'hidden'}`}></div>
                    <div className={`w-[18px] h-[3px] bg-primary  transition-all duration-500 ${open ? 'rotate-[405deg] -mt-[2.5px]' : 'mt-1'}`}></div>
                </div>

            </nav>
            <div className={`flex flex-col gap-y-5 items-center relative z-10 transition-all duration-500 ${open ? 'min-h-screen' : 'max-h-0 overflow-hidden'} lg:hidden`}>
                {items.map(function(item){
                    if(item.type === "button"){
                        return(
                            <button key={item.id} className={"btn_primary"} onClick={() => setOpen(!open)}>
                                <Link href={pathname+item.url}>
                                    {item.label}
                                </Link>
                            </button>
                        )
                    }
                    if(item.type === "label"){
                        return(
                            <span key={item.id}  className={`text-lg hover:text-primary hover:underline ${pathname === item.url ? 'text-primary' : ''}`} onClick={() => setOpen(!open)}>
                                <Link href={item.url}>
                                    {item.label}
                                </Link>
                            </span>
                        )
                    }
                })}
            </div>
        </header>

    );
}