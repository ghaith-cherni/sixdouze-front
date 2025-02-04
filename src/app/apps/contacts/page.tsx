import * as React from "react";
import NextLink from 'next/link';  
import Contacts from "@/components/Apps/Contacts";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Contacts</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>Apps</li>
          <li>Contacts</li>
        </ul>
      </div>

      <Contacts />
    </>
  );
}
