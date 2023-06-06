export default function Hero({title,heroUrl}){
    return(
        <section className={"relative lg:h-[calc(100vh-195px)]"}>
            <img src={heroUrl} className={"object-cover min-h-full max-h-full min-w-full"}/>
            <div className={"absolute top-0 h-full w-full flex flex-col items-center justify-center bg-black bg-opacity-30 gap-y-4"}>
                <h1 className={"text-white font-outfit text-4xl md:text-6xl lg:text-9xl"}>{title}</h1>
                <a href="#presentation"><button className={"btn_primary"}>Présentation</button></a>
            </div>
        </section>
    );
}
