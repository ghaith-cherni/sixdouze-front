import * as React from "react"; 
import NextLink from 'next/link';   
import { Grid } from "@mui/material";
import CircularIndeterminate from "@/components/UiKit/Progress/CircularIndeterminate";
import CircularColor from "@/components/UiKit/Progress/CircularColor";
import CircularDeterminate from "@/components/UiKit/Progress/CircularDeterminate";
import CircularIntegration from "@/components/UiKit/Progress/CircularIntegration";
import CircularWithValueLabel from "@/components/UiKit/Progress/CircularWithValueLabel";
import LinearIndeterminate from "@/components/UiKit/Progress/LinearIndeterminate";
import LinearColor from "@/components/UiKit/Progress/LinearColor";
import LinearDeterminate from "@/components/UiKit/Progress/LinearDeterminate";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Progress</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>UI Elements</li>
          <li>Progress</li>
        </ul>
      </div>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid item xs={12} md={6} lg={6} xl={6}>
          <CircularIndeterminate />

          <CircularDeterminate />

          <CircularWithValueLabel />

          <LinearColor />
        </Grid>

        <Grid item xs={12} md={6} lg={6} xl={6}>
          <CircularColor />

          <CircularIntegration />

          <LinearIndeterminate />

          <LinearDeterminate />
        </Grid>
      </Grid>
    </>
  );
}
