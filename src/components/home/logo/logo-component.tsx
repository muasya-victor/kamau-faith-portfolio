import React from "react";
import { logoServices } from "./logo-data";

const LogoComponent = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex flex-col gap-4 border-b border-gray-200 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {/* left */}
          <div className="flex flex-col gap-4 h-full justify-between items-start">
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold">Logo Design</h3>
              <p className="text-sm">
                For small businesses that only need a logo. No complicated files
                or long timelines. Just get your professionally designed logo
                and hit the ground running!
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-semibold">Starting from:</h3>
              <p className="">Ksh 8,000 / USD 80</p>
            </div>
          </div>

          {/* right */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold">What’s Included:</h3>

            {logoServices.map((service, index) => {
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

export default LogoComponent;
