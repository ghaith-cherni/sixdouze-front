import * as React from "react"; 
import NextLink from 'next/link'; 
import Grid from "@mui/material/Grid"; 
import CoverImage from "@/components/Profile/CoverImage";
import NavList from "@/components/Profile/NavList";
import AboutMe from "@/components/Profile/AboutMe";
import Followers from "@/components/Profile/Followers";
import MyProjects from "@/components/Profile/MyProjects";

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
          <li>Profile</li>
        </ul>
      </div>

      <CoverImage />

      <NavList />

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid item xs={12} md={12} lg={12} xl={8}>
          <AboutMe />
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={4}>
          <Followers />
        </Grid>
      </Grid>

      <MyProjects />
    </>
  );
}
