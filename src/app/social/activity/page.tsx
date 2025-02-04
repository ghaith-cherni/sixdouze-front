import * as React from "react"; 
import NextLink from 'next/link'; 
import Grid from "@mui/material/Grid"; 
import CoverImage from "@/components/Social/Profile/CoverImage";
import ProfileIntro from "@/components/Social/Profile/ProfileIntro";
import Followers from "@/components/Social/Profile/Followers";
import Following from "@/components/Social/Profile/Following";
import Photos from "@/components/Social/Profile/Photos";
import Friends from "@/components/Social/Profile/Friends";
import NavList from "@/components/Social/Profile/NavList";
import Activity from "@/components/Social/Activity";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Profile</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>Social</li>
          <li>Activity</li>
        </ul>
      </div>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid item xs={12} md={12} lg={12} xl={9}>
          <CoverImage />

          {/* NavList */}
          <NavList />

          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
            <Grid item xs={12} md={4} lg={4} xl={4}>
              <Friends />
            </Grid>

            <Grid item xs={12} md={8} lg={8} xl={8}>
              <Activity />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={3}>
          <ProfileIntro />

          <Followers />

          <Following />

          <Photos />
        </Grid>
      </Grid>
    </>
  );
}
