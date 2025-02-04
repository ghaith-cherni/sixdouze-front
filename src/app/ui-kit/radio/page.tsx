import * as React from "react"; 
import NextLink from 'next/link'; 
import { Grid } from "@mui/material";  
import RadioButtonsGroup from "@/components/UiKit/Radio/RadioButtonsGroup";
import RowRadioButtonsGroup from "@/components/UiKit/Radio/RowRadioButtonsGroup";
import ControlledRadioButtonsGroup from "@/components/UiKit/Radio/ControlledRadioButtonsGroup";
import StandaloneRadioButtons from "@/components/UiKit/Radio/StandaloneRadioButtons";
import SizeRadioButtons from "@/components/UiKit/Radio/SizeRadioButtons";
import ColorRadioButtons from "@/components/UiKit/Radio/ColorRadioButtons";
import FormControlLabelPlacement from "@/components/UiKit/Radio/FormControlLabelPlacement";
import CustomizedRadios from "@/components/UiKit/Radio/CustomizedRadios";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Radio</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>UI Elements</li>
          <li>Radio</li>
        </ul>
      </div>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid item xs={12} md={6} lg={6} xl={6}>
          <RadioButtonsGroup />

          <StandaloneRadioButtons />

          <ColorRadioButtons />

          <FormControlLabelPlacement />
        </Grid>

        <Grid item xs={12} md={6} lg={6} xl={6}>
          <RowRadioButtonsGroup />

          <ControlledRadioButtonsGroup />

          <SizeRadioButtons />

          <CustomizedRadios />
        </Grid>
      </Grid>
    </>
  );
}
