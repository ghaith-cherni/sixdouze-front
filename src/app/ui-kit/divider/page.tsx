import * as React from "react"; 
import NextLink from 'next/link'; 
import { Grid } from "@mui/material";   
import IntroDivider from "@/components/UiKit/Divider/IntroDivider";
import DividerVariants from "@/components/UiKit/Divider/DividerVariants";
import DividerText from "@/components/UiKit/Divider/DividerText";
import ListDividers from "@/components/UiKit/Divider/ListDividers";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Divider</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>UI Elements</li>
          <li>Divider</li>
        </ul>
      </div>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid item xs={12} md={6} lg={6} xl={6}>
          <IntroDivider />

          <DividerText />
        </Grid>

        <Grid item xs={12} md={6} lg={6} xl={6}>
          <DividerVariants />

          <ListDividers />
        </Grid>
      </Grid>
    </>
  );
}
