"use client";

import * as React from "react";
import NextLink from 'next/link';    
import { Grid } from "@mui/material"; 
import BasicMap from "@/components/Maps/BasicMap";
import MarkersMap from "@/components/Maps/MarkersMap";
import SatelliteMap from "@/components/Maps/SatelliteMap";
import InfoWindowMap from "@/components/Maps/InfoWindowMap";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Maps</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li> 
          <li>Maps</li>
        </ul>
      </div>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <BasicMap />

          <SatelliteMap />
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <MarkersMap />

          <InfoWindowMap />
        </Grid>
      </Grid> 
    </>
  );
}
