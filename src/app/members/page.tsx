"use client";

import * as React from "react";
import NextLink from 'next/link';      
import MembersTable from "@/components/Members/MembersTable";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Members</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li> 
          <li>Members</li>
        </ul>
      </div>

      <MembersTable />
    </>
  );
}
