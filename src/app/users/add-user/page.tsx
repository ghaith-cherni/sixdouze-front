import * as React from "react";
import NextLink from 'next/link';     
import AddUser from "@/components/Users/AddUser";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Add User</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li> 
          <li>Users</li>
          <li>Add User</li>
        </ul>
      </div>

      <AddUser />
    </>
  );
}
