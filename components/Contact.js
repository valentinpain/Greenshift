"use client";

import {useState} from "react";
import axios from "axios";

export default function Contact({address,contacts,title}){
    const [contactFields, setContactFields] = useState({
        name : '',
        phone : '',
        email : '',
        message : ''
    });

    const handleSubmit = async e => {
        e.preventDefault();
        const newContact = axios.post('/api/contact',contactFields)
            .then(res =>{
                console.log(res);
                //TODO success logic here
            })
            .catch(err =>{
                console.error(err);
                //TODO error logic here
            })
    }

    return(
        <section id={"contact"}>
            <h1 className={"text-5xl py-10 text-center font-outfit "}>{title}</h1>
            <aside className={"px-10 md:px-28 grid md:grid-cols-1 gap-y-5 py-10 text-center"}>
                <div className={"grid-cols-2 mx-auto py-5 order-last md:order-1 grid md:grid-cols-1 md:mx-0 md:py-0 gap-y-5 md:my-auto"}>
                    <div className={"font-outfit"}>
                        <h4 className={"text-lg font-outfit font-bold uppercase pb-2"}>Adresse</h4>
                        <p>{address.number} {address.street}, {address.city}</p>
                        <p>{address.cp}, {address.country}</p>
                    </div>
                    <div className={"font-outfit"}>
                        <h4 className={"text-lg font-outfit font-bold uppercase pb-2"}>Contactez-nous</h4>
                        {contacts.map(function(contact){
                            return(<p key={contact.id}>{contact.value}</p>)
                        })}
                    </div>
                </div>
            </aside>
        </section>
    )
}
