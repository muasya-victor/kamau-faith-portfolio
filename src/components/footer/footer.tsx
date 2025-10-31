import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="p-4 flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="flex items-center gap-4">
          <Image
            src="/images/face.png"
            alt="Decorative face"
            width={60}
            height={60}
          />

          <Image
            src="/images/flower.png"
            alt="Decorative flower"
            width={60}
            height={60}
          />
        </div>
        <div className="flex flex-col gap-4">
          <h3>CONTACT</h3>
          <div className="flex flex-col gap-2">
            <span>(+254) 0716480143</span>
            <span>fkamau.wangui@gmail.com</span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3>SOCIAL</h3>
          <div className="flex flex-col gap-2">
            <span>Instagram</span>
            <span>Behance</span>
            <span>LinkedIn</span>
          </div>
        </div>
      </div>

      

      <div className="w-full min-h-[150px] bg-[url('/images/kui.png')] bg-contain bg-no-repeat "></div>
    </div>
  );
};

export default Footer;
