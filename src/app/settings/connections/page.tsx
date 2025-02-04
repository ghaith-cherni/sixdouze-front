"use client";

import * as React from "react";
import NextLink from 'next/link';     
import Connections from "@/components/Settings/Connections";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Settings</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li> 
          <li>Settings</li>
          <li>Connections</li>
        </ul>
      </div>

      <Connections />
    </>
  );
}
