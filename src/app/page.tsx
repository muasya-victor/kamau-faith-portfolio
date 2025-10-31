import { Hero } from "@/components/home/hero-section";
import LogoComponent from "@/components/home/logo/logo-component";
import MiniBrand from "@/components/home/mini-brand/mini-brand-component";
import Services from "@/components/home/services/services-component";
import { WorkSection } from "@/components/home/work-sectiom";
import { Menu } from "@/components/layout/menu";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <WorkSection />
      <Services />
      <MiniBrand/>
      <LogoComponent />
    </div>
  );
}
