import * as React from "react"; 
import NextLink from 'next/link';  
import { Grid } from "@mui/material";
import BasicCard from "@/components/UiKit/Card/BasicCard";
import OutlinedCard from "@/components/UiKit/Card/OutlinedCard";
import RecipeReviewCard from "@/components/UiKit/Card/RecipeReviewCard";
import MediaCard from "@/components/UiKit/Card/MediaCard";
import MediaControlCard from "@/components/UiKit/Card/MediaControlCard";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Card</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>UI Elements</li>
          <li>Card</li>
        </ul>
      </div>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid item xs={12} md={6} lg={6} xl={6}>
          <BasicCard />

          <RecipeReviewCard />
        </Grid>

        <Grid item xs={12} md={6} lg={6} xl={6}>
          <OutlinedCard />

          <MediaCard />

          <MediaControlCard />
        </Grid> 
      </Grid>
    </>
  );
}
