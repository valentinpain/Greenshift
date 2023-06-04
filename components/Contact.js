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
            <aside className={"px-10 md:px-28 grid md:grid-cols-2 gap-y-5 py-10"}>
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
                <form className={"grid md:grid-cols-2 gap-3 order-1"} onSubmit={handleSubmit}>
                    <input
                        className={"placeholder-tertiary border-tertiary rounded"}
                        type={"text"}
                        placeholder={"Name *"}
                        required
                        onChange={e => setContactFields({...contactFields, name: e.target.value})}
                    />
                    <input
                        className={"placeholder-tertiary border-tertiary rounded"}
                        type={"email"}
                        placeholder={"Email *"}
                        required
                        onChange={e => setContactFields({...contactFields, email: e.target.value})}
                    />
                    <input
                        className={"md:col-span-2 placeholder-tertiary border-tertiary rounded"}
                        type={"text"}
                        placeholder={"Phone *"}
                        pattern={"[0-9]{10}"}
                        required
                        onChange={e => setContactFields({...contactFields, phone: e.target.value})}
                    />
                    <textarea
                        className={"resize-none h-36 md:h-52 md:col-span-2 placeholder-tertiary border-tertiary rounded"}
                        placeholder={"Message *"}
                        required
                        onChange={e => setContactFields({...contactFields, message: e.target.value})}
                    ></textarea>
                    <div className={"flex justify-center md:justify-end md:col-span-2"}>
                        <button className={"btn_primary"}>Send Message</button>
                    </div>
                </form>
            </aside>
        </section>
    )
}