import * as React from "react"; 
import NextLink from 'next/link';  
import { Grid } from "@mui/material"; 
import BasicSpeedDial from "@/components/UiKit/SpeedDial/BasicSpeedDial";
import PlaygroundSpeedDial from "@/components/UiKit/SpeedDial/PlaygroundSpeedDial";
import ControlledOpenSpeedDial from "@/components/UiKit/SpeedDial/ControlledOpenSpeedDial";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Speed Dial</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>UI Elements</li>
          <li>Speed Dial</li>
        </ul>
      </div>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid item xs={12} md={6} lg={6} xl={6}>
          <BasicSpeedDial />

          <ControlledOpenSpeedDial />
        </Grid>

        <Grid item xs={12} md={6} lg={6} xl={6}>
          <PlaygroundSpeedDial />
        </Grid> 
      </Grid>
    </>
  );
}
