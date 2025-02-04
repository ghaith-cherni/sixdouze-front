import * as React from "react";
import NextLink from 'next/link'; 
import AllProjects from "@/components/ProjectManagement/ProjectsList/AllProjects";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Projects List</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>Project Management</li>
          <li>Projects List</li>
        </ul>
      </div>

      <AllProjects />
    </>
  );
}
