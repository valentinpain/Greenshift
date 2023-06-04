import {Global} from "@/lib/global";
import {Nav} from "@/lib/nav";
import TopBar from "@/components/TopBar";
import NavBar from "@/components/NavBar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Layout({children}){
    const GlobalData = Global;
    const NavData = Nav;
    return(
        <>
            <TopBar contacts={GlobalData.contacts} socials={GlobalData.socials}/>
            <NavBar logo={GlobalData.main.logoImg} items={NavData.items}/>
            <main>
                {children}
            </main>
            <Contact contacts={GlobalData.contacts} address={GlobalData.address} title={GlobalData.contact.title}/>
            <Footer logoImg={GlobalData.main.logoImg} socials={GlobalData.socials} items={NavData.items} copyright={GlobalData.main.copyrightFooter}/>
        </>
    )
}