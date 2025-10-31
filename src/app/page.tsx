import { Hero } from "@/components/home/hero-section";
import LogoComponent from "@/components/home/logo/logo-component";
import MiniBrand from "@/components/home/mini-brand/mini-brand-component";
import Services from "@/components/home/services/services-component";
import WebDesign from "@/components/home/web/web-component";
import { WorkSection } from "@/components/home/work-sectiom";
import { Menu } from "@/components/layout/menu";
import { ArrowBigLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <WorkSection />
      <Services />
      <MiniBrand />
      <LogoComponent />
      <WebDesign />
      <div className="flex flex-col gap-4 p-4 border-b border-gray-200">
        <h3 className="font-normal leading-snug font-sans text-3xl md:text-5xl">
          Connect with us to explore your brand's potential
        </h3>
        <button className="rounded-full border-3 h-16 w-16 border-black text-black -rotate-45 hover:text-blue-400 hover:border-blue-400 delay-75 hover:zoom-in-5 cursor-pointer">
          <ArrowRight className="h-12 w-12 " />
        </button>
      </div>
    </div>
  );
}
