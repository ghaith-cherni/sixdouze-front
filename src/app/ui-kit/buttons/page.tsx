import * as React from "react"; 
import NextLink from 'next/link'; 
import { Grid } from "@mui/material"; 
import BasicButton from "@/components/UiKit/Buttons/BasicButton";
import TextButton from "@/components/UiKit/Buttons/TextButton";
import ContainedButton from "@/components/UiKit/Buttons/ContainedButton";
import ColorButton from "@/components/UiKit/Buttons/ColorButton";
import ButtonSizes from "@/components/UiKit/Buttons/ButtonSizes";
import ButtonsWithIconsAndLabel from "@/components/UiKit/Buttons/ButtonsWithIconsAndLabel";
import IconButtons from "@/components/UiKit/Buttons/IconButtons";
import IconButtonColors from "@/components/UiKit/Buttons/IconButtonColors";
import CustomizedButtons from "@/components/UiKit/Buttons/CustomizedButtons";
import ComplexButtons from "@/components/UiKit/Buttons/ComplexButtons";
import LoadingButtons from "@/components/UiKit/Buttons/LoadingButtons";
import FloatingActionButtons from "@/components/UiKit/FloatingActionButton/FloatingActionButtons";
import FloatingActionButtonSize from "@/components/UiKit/FloatingActionButton/FloatingActionButtonSize";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Buttons</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>UI Elements</li>
          <li>Buttons</li>
        </ul>
      </div>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid item xs={12} md={6} lg={6} xl={6}>
          <BasicButton />
        </Grid>

        <Grid item xs={12} md={6} lg={6} xl={6}>
          <TextButton />
        </Grid>

        <Grid item xs={12} md={6} lg={6} xl={6}>
          <ContainedButton />

          <FloatingActionButtons />
        </Grid>

        <Grid item xs={12} md={6} lg={6} xl={6}>
          <ColorButton />

          <FloatingActionButtonSize />
        </Grid>

        <Grid item xs={12} md={6} lg={6} xl={6}>
          <ButtonSizes />
        </Grid>

        <Grid item xs={12} md={6} lg={6} xl={6}>
          <ButtonsWithIconsAndLabel />

          <IconButtons />
        </Grid>

        <Grid item xs={12} md={6} lg={6} xl={6}>
          <IconButtonColors />
        </Grid>

        <Grid item xs={12} md={6} lg={6} xl={6}>
          <CustomizedButtons />
        </Grid>
 
        <Grid item xs={12} md={6} lg={6} xl={6}>
          <ComplexButtons />
        </Grid>

        <Grid item xs={12} md={6} lg={6} xl={6}>
          <LoadingButtons />
        </Grid>
      </Grid> 
    </>
  );
}
