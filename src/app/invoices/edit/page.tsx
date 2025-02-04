import * as React from "react";
import NextLink from 'next/link';      
import EditInvoice from "@/components/Invoices/EditInvoice";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Edit Invoice</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li> 
          <li>Invoices</li>
          <li>Edit Invoice</li>
        </ul>
      </div>

      <EditInvoice />
    </>
  );
}
