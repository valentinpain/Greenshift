import Image from 'next/image'
import Hero from "@/components/Hero";
import {Global} from "@/lib/global";
import {Nav} from "@/lib/nav";
import Countdown from "@/components/Countdown";
import Presentation from "@/components/Presentation";
import {Presentations} from "@/lib/presentation";

export default function Home() {
  const GlobalData = Global;
  const PresentationData = Presentations;
  return (
    <>
      <Hero title={GlobalData.main.title} heroUrl={GlobalData.main.heroImg}/>
      <Countdown />
        <Presentation title={PresentationData.title} imgPresentation={PresentationData.imgPresentation} paragraphs={PresentationData.paragraphs}/>
    </>
  )
}
