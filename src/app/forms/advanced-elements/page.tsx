import * as React from "react"; 
import Grid from "@mui/material/Grid";
import NextLink from 'next/link';  
import Select from "@/components/Forms/AdvancedForms/Select";
import Picker from "@/components/Forms/AdvancedForms/Picker";
import AdvancedForm from "@/components/Forms/AdvancedForms/AdvancedForm"; 

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Advanced Forms</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>Forms</li>
          <li>Advanced Forms</li>
        </ul>
      </div>

      <Select />

      <Picker />

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid item xs={12} md={12} lg={12} xl={6}>
          <AdvancedForm />
        </Grid>
      </Grid>
    </>
  );
}
