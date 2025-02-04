import * as React from "react"; 
import NextLink from 'next/link'; 
import { Grid } from "@mui/material";  
import BasicBadge from "@/components/UiKit/Badge/BasicBadge";
import ColorBadge from "@/components/UiKit/Badge/ColorBadge";
import CustomizedBadges from "@/components/UiKit/Badge/CustomizedBadges";
import BadgeVisibility from "@/components/UiKit/Badge/BadgeVisibility";
import MaximumValue from "@/components/UiKit/Badge/MaximumValue";
import AccessibleBadges from "@/components/UiKit/Badge/AccessibleBadges";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Badge</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>UI Elements</li>
          <li>Badge</li>
        </ul>
      </div>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid item xs={12} md={6} lg={6} xl={6}>
          <BasicBadge />

          <CustomizedBadges />

          <MaximumValue />
        </Grid>

        <Grid item xs={12} md={6} lg={6} xl={6}>
          <ColorBadge />

          <BadgeVisibility />

          <AccessibleBadges />
        </Grid>
      </Grid>
    </>
  );
}
