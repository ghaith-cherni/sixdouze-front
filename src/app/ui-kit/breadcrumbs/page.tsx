import * as React from "react"; 
import NextLink from 'next/link';  
import { Grid } from "@mui/material";
import BasicBreadcrumbs from "@/components/UiKit/Breadcrumbs/BasicBreadcrumbs";
import CustomSeparator from "@/components/UiKit/Breadcrumbs/CustomSeparator";
import BreadcrumbsWithIcons from "@/components/UiKit/Breadcrumbs/BreadcrumbsWithIcons";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Breadcrumbs</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>UI Elements</li>
          <li>Breadcrumbs</li>
        </ul>
      </div>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid item xs={12} md={6} lg={6} xl={6}>
          <BasicBreadcrumbs />

          <BreadcrumbsWithIcons />
        </Grid>

        <Grid item xs={12} md={6} lg={6} xl={6}>
          <CustomSeparator />
        </Grid> 
      </Grid>
    </>
  );
}
