import * as React from "react"; 
import NextLink from 'next/link';  
import { Grid } from "@mui/material"; 
import BasicPagination from "@/components/UiKit/Pagination/BasicPagination";
import PaginationOutlined from "@/components/UiKit/Pagination/PaginationOutlined";
import PaginationRounded from "@/components/UiKit/Pagination/PaginationRounded";
import PaginationSize from "@/components/UiKit/Pagination/PaginationSize";
import PaginationButtons from "@/components/UiKit/Pagination/PaginationButtons";
import CustomIcons from "@/components/UiKit/Pagination/CustomIcons";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Pagination</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>UI Elements</li>
          <li>Pagination</li>
        </ul>
      </div>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid item xs={12} md={6} lg={6} xl={6}>
          <BasicPagination />

          <PaginationRounded />

          <PaginationButtons />
        </Grid>

        <Grid item xs={12} md={6} lg={6} xl={6}>
          <PaginationOutlined />

          <PaginationSize />

          <CustomIcons />
        </Grid> 
      </Grid>
    </>
  );
}
