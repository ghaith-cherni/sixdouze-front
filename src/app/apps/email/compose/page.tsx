import * as React from "react";
import NextLink from "next/link"; 
import Grid from "@mui/material/Grid";
import Sidebar from "@/components/Apps/Email/Sidebar"; 
import Compose from "@/components/Apps/Email/Compose";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Compose</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>Apps</li>
          <li>Email</li>
          <li>Compose</li>
        </ul>
      </div>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid item xs={12} md={4} lg={4} xl={4}>
          <Sidebar />
        </Grid>

        <Grid item xs={12} md={8} lg={8} xl={8}>
          <Compose />
        </Grid>
      </Grid>
    </>
  );
}
