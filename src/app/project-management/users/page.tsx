import * as React from "react";
import NextLink from 'next/link';  
import UsersTable from "@/components/ProjectManagement/UsersTable";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Users</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>Project Management</li>
          <li>Users</li>
        </ul>
      </div>

      <UsersTable />
    </>
  );
}
