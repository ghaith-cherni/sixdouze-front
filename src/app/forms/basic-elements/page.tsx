import * as React from "react"; 
import Grid from "@mui/material/Grid";
import NextLink from 'next/link'; 
import TextualInputs from "@/components/Forms/BasicElements/TextualInputs";
import BasicForm from "@/components/Forms/BasicElements/BasicForm";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Basic Elements</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>Forms</li>
          <li>Basic Elements</li>
        </ul>
      </div>

      <TextualInputs />

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid item xs={12} md={12} lg={12} xl={6}>
          <BasicForm />
        </Grid>
      </Grid>
    </>
  );
}
