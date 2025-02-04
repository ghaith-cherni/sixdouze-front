import * as React from "react";
import NextLink from 'next/link';  
import Grid from "@mui/material/Grid";
import ToDo from "@/components/Apps/KanbanBoard/ToDo";
import Doing from "@/components/Apps/KanbanBoard/Doing";
import Done from "@/components/Apps/KanbanBoard/Done";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Kanban Board</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>Apps</li>
          <li>Kanban Board</li>
        </ul>
      </div>


      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
          <ToDo />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
          <Doing />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
          <Done />
        </Grid>
      </Grid>
    </>
  );
}
