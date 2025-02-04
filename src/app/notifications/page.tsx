"use client";

import * as React from "react";
import NextLink from 'next/link';     
import NotificationsTable from "@/components/Notifications/NotificationsTable";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Notifications</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li> 
          <li>Notifications</li>
        </ul>
      </div>

      <NotificationsTable />
    </>
  );
}
