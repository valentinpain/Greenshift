export default function SponsorElement({title, text, link, logo_path}){
    return(
        <div className="flex justify-center items-center flex-col text-center">
            <img className="w-4/12 h-4/12" src={logo_path} alt="sponsor_logo" />
            <h2 className="font-bold my-1 text-lg">{title}</h2>
            <p className="my-1">{text}</p>
            <a className="font-bold hover:underline" href={link} target="_blank">Voir le site web </a>
        </div>
    )
}