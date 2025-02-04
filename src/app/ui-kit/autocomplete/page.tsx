import * as React from "react"; 
import NextLink from 'next/link'; 
import { Grid } from "@mui/material"; 
import ComboBox from "@/components/UiKit/Autocomplete/ComboBox";
import CountrySelect from "@/components/UiKit/Autocomplete/CountrySelect";
import Grouped from "@/components/UiKit/Autocomplete/Grouped";
import LoadOnOpen from "@/components/UiKit/Autocomplete/LoadOnOpen";
import MultipleValues from "@/components/UiKit/Autocomplete/MultipleValues";
import Checkboxes from "@/components/UiKit/Autocomplete/Checkboxes";
import LimitTags from "@/components/UiKit/Autocomplete/LimitTags";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Autocomplete</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>UI Elements</li>
          <li>Autocomplete</li>
        </ul>
      </div>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid item xs={12} md={6} lg={6} xl={6}>
          <ComboBox />
        </Grid>

        <Grid item xs={12} md={6} lg={6} xl={6}>
          <CountrySelect />
        </Grid>

        <Grid item xs={12} md={6} lg={6} xl={6}>
          <Grouped />
        </Grid>

        <Grid item xs={12} md={6} lg={6} xl={6}>
          <LoadOnOpen />
        </Grid>

        <Grid item xs={12} md={6} lg={6} xl={6}>
          <MultipleValues />
        </Grid>

        <Grid item xs={12} md={6} lg={6} xl={6}>
          <Checkboxes />

          <LimitTags />
        </Grid>
      </Grid>
    </>
  );
}
