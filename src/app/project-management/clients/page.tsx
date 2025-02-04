import * as React from "react";
import NextLink from 'next/link';  
import PmClients from "@/components/ProjectManagement/PmClients";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Clients</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>Project Management</li>
          <li>Clients</li>
        </ul>
      </div>

      <PmClients />
    </>
  );
}
