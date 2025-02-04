import * as React from "react"; 
import NextLink from 'next/link'; 
import { Grid } from "@mui/material"; 
import SimpleCollapse from "@/components/UiKit/Transitions/SimpleCollapse";
import SimpleFade from "@/components/UiKit/Transitions/SimpleFade";
import SimpleGrow from "@/components/UiKit/Transitions/SimpleGrow";
import SimpleSlide from "@/components/UiKit/Transitions/SimpleSlide";
 
export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Transitions</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>UI Elements</li>
          <li>Transitions</li>
        </ul>
      </div>
 
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid item xs={12} md={6} lg={6} xl={6}>
          <SimpleCollapse />

          <SimpleGrow />
        </Grid>

        <Grid item xs={12} md={6} lg={6} xl={6}>
          <SimpleFade />

          <SimpleSlide />
        </Grid>
      </Grid>
    </>
  );
}
