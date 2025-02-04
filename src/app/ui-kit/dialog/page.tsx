import * as React from "react"; 
import NextLink from 'next/link';   
import { Grid } from "@mui/material";
import SimpleDialogDemo from "@/components/UiKit/Dialog/SimpleDialogDemo";
import AlertDialog from "@/components/UiKit/Dialog/AlertDialog";
import AlertDialogSlide from "@/components/UiKit/Dialog/AlertDialogSlide";
import FormDialog from "@/components/UiKit/Dialog/FormDialog";
import CustomizedDialogs from "@/components/UiKit/Dialog/CustomizedDialogs";
import FullScreenDialog from "@/components/UiKit/Dialog/FullScreenDialog";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Dialog</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>UI Elements</li>
          <li>Dialog</li>
        </ul>
      </div>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid item xs={12} md={6} lg={6} xl={6}>
          <SimpleDialogDemo />

          <AlertDialogSlide />

          <CustomizedDialogs />
        </Grid>

        <Grid item xs={12} md={6} lg={6} xl={6}>
          <AlertDialog />

          <FormDialog />

          <FullScreenDialog />
        </Grid>
      </Grid>
    </>
  );
}
