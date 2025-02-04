import * as React from "react";
import NextLink from 'next/link';    
import TeamMembers from "@/components/Users/TeamMembers";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Team Members</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li> 
          <li>Users</li>
          <li>Team Members</li>
        </ul>
      </div>

      <TeamMembers />
    </>
  );
}
