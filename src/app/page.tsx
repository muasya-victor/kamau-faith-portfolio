import { Hero } from "@/components/home/hero-section";
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
    </div>
  );
}
