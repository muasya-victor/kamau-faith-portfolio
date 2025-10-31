import React from "react";
import { webServices } from "./web-data";

const WebDesign = () => {
  return (
    <div className="flex flex-col gap-4 px-4">
      <div className="flex flex-col gap-4 border-b border-gray-200 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {/* left */}
          <div className="flex flex-col gap-4 h-full justify-between items-start">
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold">Web Design</h3>
              <p className="text-sm">
                For businesses that need a beautiful, user-friendly website that
                works. From strategy to launch, I’ll design and build a site
                that reflects your brand, connects with your audience, and makes
                it easy for people to find and trust you online.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-semibold">Starting from:</h3>
              <p className="">Ksh 65,000 / USD 500</p>
            </div>
          </div>

          {/* right */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold">What’s Included:</h3>

            {webServices.map((service, index) => {
              return (
                <div key={index} className="flex flex-col gap-2">
                  <div className="flex items-start gap-2">
                    {/* index */}
                    <span className="rounded-full p-2 bg-[#49C0B8] text-sm h-8 w-8 flex items-center justify-center">
                      {index + 1}
                    </span>
                    <ul className="flex flex-col gap-2 pt-1">
                      <span className="font-semibold">{service?.label}</span>
                      {service?.children?.map((item, subindex) => {
                        return (
                          <li key={subindex} className=" list-disc text-sm">
                            {item}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDesign;
