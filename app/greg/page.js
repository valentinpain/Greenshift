import Hero from "@/components/Hero";
import {Global} from "@/lib/global";
import TopBar from "@/components/TopBar";
import NavBar from "@/components/NavBar";
import {Nav} from "@/lib/nav";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Greg(){
    const GlobalData = Global;
    const NavData = Nav;
    return(
        <>

            <Hero title={GlobalData.main.title} heroUrl={GlobalData.main.heroImg}/>

        </>

    )
}