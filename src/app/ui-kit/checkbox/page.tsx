import * as React from "react"; 
import NextLink from 'next/link'; 
import { Grid } from "@mui/material"; 
import BasicCheckboxes from "@/components/UiKit/Checkbox/BasicCheckboxes";
import CheckboxLabels from "@/components/UiKit/Checkbox/CheckboxLabels";
import SizeCheckboxes from "@/components/UiKit/Checkbox/SizeCheckboxes";
import ColorCheckboxes from "@/components/UiKit/Checkbox/ColorCheckboxes";
import IconCheckboxes from "@/components/UiKit/Checkbox/IconCheckboxes";
import Controlled from "@/components/UiKit/Checkbox/Controlled";
import IndeterminateCheckbox from "@/components/UiKit/Checkbox/IndeterminateCheckbox";
import CheckboxesGroup from "@/components/UiKit/Checkbox/CheckboxesGroup";
import FormControlLabelPosition from "@/components/UiKit/Checkbox/FormControlLabelPosition";
import CustomizedCheckbox from "@/components/UiKit/Checkbox/CustomizedCheckbox";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Checkbox</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>UI Elements</li>
          <li>Checkbox</li>
        </ul>
      </div>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid item xs={12} md={6} lg={6} xl={6}>
          <BasicCheckboxes />

          <SizeCheckboxes />

          <ColorCheckboxes />

          <IndeterminateCheckbox />

          <CheckboxesGroup />
        </Grid>

        <Grid item xs={12} md={6} lg={6} xl={6}>
          <CheckboxLabels />

          <IconCheckboxes />

          <Controlled />

          <FormControlLabelPosition />

          <CustomizedCheckbox />
        </Grid>
      </Grid>
    </>
  );
}
