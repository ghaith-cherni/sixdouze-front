import * as React from "react"; 
import NextLink from 'next/link'; 
import { Grid } from "@mui/material";   
import BasicRating from "@/components/UiKit/Rating/BasicRating";
import RatingPrecision from "@/components/UiKit/Rating/RatingPrecision";
import HoverFeedback from "@/components/UiKit/Rating/HoverFeedback";
import RatingSize from "@/components/UiKit/Rating/RatingSize";
import CustomizedRating from "@/components/UiKit/Rating/CustomizedRating";
import RadioGroupRating from "@/components/UiKit/Rating/RadioGroupRating";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Rating</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>UI Elements</li>
          <li>Rating</li>
        </ul>
      </div>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid item xs={12} md={6} lg={6} xl={6}>
          <BasicRating />

          <RatingSize />

          <RadioGroupRating />
        </Grid>

        <Grid item xs={12} md={6} lg={6} xl={6}>
          <RatingPrecision />

          <HoverFeedback />

          <CustomizedRating />
        </Grid>
      </Grid>
    </>
  );
}
