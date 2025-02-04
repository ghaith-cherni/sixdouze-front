import * as React from "react";
import NextLink from 'next/link';      
import CreateInvoice from "@/components/Invoices/CreateInvoice";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>New Invoice</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li> 
          <li>Invoices</li>
          <li>Create Invoice</li>
        </ul>
      </div>

      <CreateInvoice />
    </>
  );
}
