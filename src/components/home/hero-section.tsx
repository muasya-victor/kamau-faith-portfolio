// components/hero/hero.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="h-fit bg-white relative overflow-hidden px-4 pt-8 flex flex-col gap-4">
      {/* Background Elements */}
      <div className="flex items-center gap-4">
        <Image
          src="/images/face.png"
          alt="Decorative face"
          width={100}
          height={100}
        />

        <Image
          src="/images/flower.png"
          alt="Decorative flower"
          width={100}
          height={100}
        />
      </div>

      {/* Main Content */}
      <p className="font-sans text-3xl md:text-5xl w-full md:w-10/12 font-normal leading-snug py-2">
        I’m a <span className="font-semibold"> UI/UX </span>
        and
        <span className="font-semibold"> Brand Designer </span>
        who creates clean, colourful, and functional designs that help
        businesses stand out.
      </p>
    </section>
  );
}
