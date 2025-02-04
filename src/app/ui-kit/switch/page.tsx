import * as React from "react"; 
import NextLink from 'next/link'; 
import { Grid } from "@mui/material"; 
import BasicSwitches from "@/components/UiKit/Switch/BasicSwitches";
import SwitchLabels from "@/components/UiKit/Switch/SwitchLabels";
import ColorSwitches from "@/components/UiKit/Switch/ColorSwitches";
import ControlledSwitches from "@/components/UiKit/Switch/ControlledSwitches";
import SwitchesWithFormGroup from "@/components/UiKit/Switch/SwitchesWithFormGroup";
import CustomizedSwitches from "@/components/UiKit/Switch/CustomizedSwitches";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Switch</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>UI Elements</li>
          <li>Switch</li>
        </ul>
      </div>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid item xs={12} md={6} lg={6} xl={6}>
          <BasicSwitches />

          <ColorSwitches />

          <SwitchesWithFormGroup />

          <CustomizedSwitches />
        </Grid>

        <Grid item xs={12} md={6} lg={6} xl={6}>
          <SwitchLabels />

          <ControlledSwitches />
        </Grid>
      </Grid>
    </>
  );
}
