import * as React from "react";
import NextLink from 'next/link';     
import UsersList from "@/components/Users/UsersList";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Users List</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li> 
          <li>Users</li>
          <li>Users List</li>
        </ul>
      </div>

      <UsersList />
    </>
  );
}
