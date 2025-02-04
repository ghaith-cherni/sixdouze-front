"use client";

import React, { FC } from "react";
import WorldMap from "react-svg-worldmap";

interface CountryData {
  country: string;
  value: number;
}

const WorldMapContent: FC = () => {
  const data: CountryData[] = [
    { country: "pt", value: 10196709 }, // Portugal
    { country: "de", value: 83129285 }, // Germany
    { country: "es", value: 47351567 }, // Spain
    { country: "ca", value: 38005238 }, // Canada

    // { country: "cn", value: 1389618778 }, // china
    // { country: "in", value: 1311559204 }, // india
    // { country: "us", value: 331883986 }, // united states
    // { country: "id", value: 264935824 }, // indonesia
    // { country: "pk", value: 210797836 }, // pakistan
    // { country: "br", value: 210301591 }, // brazil
    // { country: "ng", value: 208679114 }, // nigeria
    // { country: "bd", value: 161062905 }, // bangladesh
    // { country: "ru", value: 141944641 }, // russia
    // { country: "mx", value: 127318112 }, // mexico
    // { country: "jp", value: 125960000 }, // Japan
    // { country: "au", value: 25687041 },  // Australia
  ];

  return (
    <div className="text-center">
      <WorldMap backgroundColor="transparent" color="blue" value-suffix="people" size="sm" data={data} />
    </div>
  );
};

export default WorldMapContent;
