import * as React from "react";
import NextLink from 'next/link';
import Grid from "@mui/material/Grid";
import ProductDevelopment from "@/components/ProjectManagement/ProjectOverview/ProductDevelopment"; 
import ProjectsRoadmap from "@/components/ProjectManagement/ProjectOverview/ProjectsRoadmap";
import ProjectsOverview from "@/components/ProjectManagement/ProjectOverview/ProjectsOverview";
import TeamMembers from "@/components/ProjectManagement/ProjectOverview/TeamMembers";
import ToDoList from "@/components/ProjectManagement/ProjectOverview/ToDoList";
import TasksOverview from "@/components/ProjectManagement/ProjectOverview/TasksOverview";
import RecentActivity from "@/components/ProjectManagement/ProjectOverview/RecentActivity";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Project Overview</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>Project Management</li>
          <li>Project Overview</li>
        </ul>
      </div>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid item xs={12} md={12} lg={12} xl={6}>
          <ProductDevelopment />

          <RecentActivity />
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={6}>
          <ProjectsRoadmap />

          <ProjectsOverview />

          <TeamMembers />
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid item xs={12} md={12} lg={12} xl={8}>
          <ToDoList />
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={4}>
          <TasksOverview />
        </Grid>
      </Grid>
    </>
  );
}
