import {FaInbox, FaPhoneAlt} from "react-icons/fa";
import {getIcons} from "@/lib/func/iconFunc";

export default function TopBar({contacts, socials}){
    return(
        <section className={"py-2 flex justify-center md:justify-between md:px-28 text-primary"}>
            <div className={"hidden md:flex gap-x-4"}>
                {contacts.map(function(contact){
                    return(
                        <div key={contact.id} className={""}>
                            <a
                                className={"flex text-sm items-center gap-x-2 hover:underline"}
                                target={"_blank"}
                                rel={"noreferrer"}
                                href={contact.type === 'tel' ? 'tel:'+contact.value : 'mailto:' + contact.value}
                            >
                                {getIcons(contact.type)}
                                {contact.value}
                            </a>

                        </div>
                    )
                })}
            </div>
            <div className={"flex items-center gap-x-4"}>
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
        </section>
    )
}