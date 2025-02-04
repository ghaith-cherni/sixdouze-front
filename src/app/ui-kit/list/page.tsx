import * as React from "react"; 
import NextLink from 'next/link'; 
import { Grid } from "@mui/material"; 
import BasicList from "@/components/UiKit/List/BasicList";
import NestedList from "@/components/UiKit/List/NestedList";
import FolderList from "@/components/UiKit/List/FolderList";
import AlignItemsList from "@/components/UiKit/List/AlignItemsList";
import CheckboxList from "@/components/UiKit/List/CheckboxList";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>List</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>UI Elements</li>
          <li>List</li>
        </ul>
      </div>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid item xs={12} md={6} lg={6} xl={6}>
          <BasicList />

          <FolderList />

          <CheckboxList />
        </Grid>

        <Grid item xs={12} md={6} lg={6} xl={6}>
          <NestedList />

          <AlignItemsList />
        </Grid>
      </Grid>
    </>
  );
}
