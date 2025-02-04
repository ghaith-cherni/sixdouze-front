import * as React from "react"; 
import NextLink from 'next/link';  
import { Grid } from "@mui/material"; 
import HorizontalLinearStepper from "@/components/UiKit/Stepper/HorizontalLinearStepper";
import HorizontalNonLinearStepper from "@/components/UiKit/Stepper/HorizontalNonLinearStepper";
import LinearAlternativeLabelStepper from "@/components/UiKit/Stepper/LinearAlternativeLabelStepper";
import HorizontalStepperWithError from "@/components/UiKit/Stepper/HorizontalStepperWithError";
import VerticalLinearStepper from "@/components/UiKit/Stepper/VerticalLinearStepper";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Stepper</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>UI Elements</li>
          <li>Stepper</li>
        </ul>
      </div>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid item xs={12} md={6} lg={6} xl={6}>
          <HorizontalLinearStepper />

          <LinearAlternativeLabelStepper /> 

          <HorizontalNonLinearStepper />
        </Grid>

        <Grid item xs={12} md={6} lg={6} xl={6}> 
          <HorizontalStepperWithError />

          <VerticalLinearStepper />
        </Grid> 
      </Grid>
    </>
  );
}
