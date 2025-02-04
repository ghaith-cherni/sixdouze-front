"use client";

import * as React from "react";
import NextLink from 'next/link';     
import PrivacyPolicy from "@/components/Settings/PrivacyPolicy";

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
          <li>Privacy Policy</li>
        </ul>
      </div>

      <PrivacyPolicy />
    </>
  );
}
