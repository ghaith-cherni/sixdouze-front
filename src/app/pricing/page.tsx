import * as React from "react";
import NextLink from 'next/link';        
import PricingStyle1 from "@/components/Pricing/PricingStyle1";
import PricingStyle2 from "@/components/Pricing/PricingStyle2";
import PricingStyle3 from "@/components/Pricing/PricingStyle3";
import { Typography } from "@mui/material";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Pricing</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li> 
          <li>Pricing</li>
        </ul>
      </div>

      <PricingStyle1 />

      <Typography 
        variant="h3"
        className="text-black"
        sx={{
          fontWeight: '700',
          mb: '20px',
          fontSize: '18px'
        }}
      >
        Pricing Style - 2
      </Typography>

      <PricingStyle2 />

      <Typography 
        variant="h3"
        className="text-black"
        sx={{
          fontWeight: '700',
          mb: '20px',
          fontSize: '18px'
        }}
      >
        Pricing Style - 3
      </Typography>

      <PricingStyle3 />
    </>
  );
}
