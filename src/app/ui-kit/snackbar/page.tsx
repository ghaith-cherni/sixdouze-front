import * as React from "react"; 
import NextLink from 'next/link';   
import { Grid } from "@mui/material";
import SimpleSnackbar from "@/components/UiKit/Snackbar/SimpleSnackbar";
import PositionedSnackbar from "@/components/UiKit/Snackbar/PositionedSnackbar";
import AutohideSnackbar from "@/components/UiKit/Snackbar/AutohideSnackbar";
import TransitionsSnackbar from "@/components/UiKit/Snackbar/TransitionsSnackbar";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Snackbar</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>UI Elements</li>
          <li>Snackbar</li>
        </ul>
      </div>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid item xs={12} md={6} lg={6} xl={6}>
          <SimpleSnackbar />

          <AutohideSnackbar />
        </Grid>

        <Grid item xs={12} md={6} lg={6} xl={6}>
          <PositionedSnackbar />

          <TransitionsSnackbar />
        </Grid>
      </Grid>
    </>
  );
}
