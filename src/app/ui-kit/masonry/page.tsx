import * as React from "react"; 
import NextLink from 'next/link'; 
import { Grid } from "@mui/material";
import BasicMasonry from "@/components/UiKit/Masonry/BasicMasonry";
import ImageMasonry from "@/components/UiKit/Masonry/ImageMasonry";
import FixedColumns from "@/components/UiKit/Masonry/FixedColumns";
import Sequential from "@/components/UiKit/Masonry/Sequential";
 
export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Masonry</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>UI Elements</li>
          <li>Masonry</li>
        </ul>
      </div>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid item xs={12} md={6} lg={6} xl={6}>
          <BasicMasonry />

          <FixedColumns />

          <Sequential />
        </Grid>

        <Grid item xs={12} md={6} lg={6} xl={6}>
          <ImageMasonry />
        </Grid>
      </Grid>
    </>
  );
}
