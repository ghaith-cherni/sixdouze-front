import * as React from "react"; 
import NextLink from 'next/link'; 
import { Grid } from "@mui/material";
import BasicSimpleTreeView from "@/components/UiKit/TreeView/BasicSimpleTreeView";
import BasicRichTreeView from "@/components/UiKit/TreeView/BasicRichTreeView";
 
export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Tree View</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>UI Elements</li>
          <li>Tree View</li>
        </ul>
      </div>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid item xs={12} md={6} lg={6} xl={6}>
          <BasicSimpleTreeView />
        </Grid>

        <Grid item xs={12} md={6} lg={6} xl={6}>
          <BasicRichTreeView />
        </Grid>
      </Grid>
    </>
  );
}
