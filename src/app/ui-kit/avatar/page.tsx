import * as React from "react"; 
import NextLink from 'next/link'; 
import { Grid } from "@mui/material";  
import ImageAvatars from "@/components/UiKit/Avatar/ImageAvatars";
import LetterAvatars from "@/components/UiKit/Avatar/LetterAvatars";
import SizeAvatars from "@/components/UiKit/Avatar/SizeAvatars";
import IconAvatars from "@/components/UiKit/Avatar/IconAvatars";
import GroupAvatars from "@/components/UiKit/Avatar/GroupAvatars";
import TotalAvatars from "@/components/UiKit/Avatar/TotalAvatars";
import CustomSurplusAvatars from "@/components/UiKit/Avatar/CustomSurplusAvatars";
import BadgeAvatars from "@/components/UiKit/Avatar/BadgeAvatars";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Avatar</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>UI Elements</li>
          <li>Avatar</li>
        </ul>
      </div>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid item xs={12} md={6} lg={6} xl={6}>
          <ImageAvatars />

          <SizeAvatars />

          <GroupAvatars />

          <CustomSurplusAvatars />
        </Grid>

        <Grid item xs={12} md={6} lg={6} xl={6}>
          <LetterAvatars />

          <IconAvatars />

          <TotalAvatars />

          <BadgeAvatars />
        </Grid>
      </Grid>
    </>
  );
}
