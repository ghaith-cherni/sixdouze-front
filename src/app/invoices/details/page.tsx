import * as React from "react";
import NextLink from 'next/link';     
import Details from "@/components/Invoices/Details";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Invoice Details</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li> 
          <li>Invoices</li>
          <li>Invoice Details</li>
        </ul>
      </div>

      <Details />
    </>
  );
}
