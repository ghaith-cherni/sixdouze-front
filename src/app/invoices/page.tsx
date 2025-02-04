import * as React from "react";
import NextLink from 'next/link';    
import InvoiceTable from "@/components/Invoices/InvoiceTable";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Invoices</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li> 
          <li>Invoices</li>
        </ul>
      </div>

      <InvoiceTable />
    </>
  );
}
