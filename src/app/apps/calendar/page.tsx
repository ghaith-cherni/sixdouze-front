import * as React from "react";
import NextLink from 'next/link'; 
import Grid from "@mui/material/Grid";
import WorkingSchedule from "@/components/Apps/Calendar/WorkingSchedule";
import FullCalendarDemo from "@/components/Apps/Calendar/FullCalendarDemo";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Calendar</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li> 
          <li>Apps</li>
          <li>Calendar</li>
        </ul>
      </div>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid item xs={12} md={12} lg={12} xl={8}>
         <FullCalendarDemo />
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={4}>
          <WorkingSchedule />
        </Grid>
      </Grid>
    </>
  );
}
