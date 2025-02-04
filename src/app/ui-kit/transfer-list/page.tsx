import * as React from "react"; 
import NextLink from 'next/link';  
import BasicTransferList from "@/components/UiKit/TransferList/BasicTransferList";
import EnhancedTransferList from "@/components/UiKit/TransferList/EnhancedTransferList";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Transfer List</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>UI Elements</li>
          <li>Transfer List</li>
        </ul>
      </div>
 
      <BasicTransferList />
   
      <EnhancedTransferList />
    </>
  );
}
