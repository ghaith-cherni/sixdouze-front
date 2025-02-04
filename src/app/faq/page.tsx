import * as React from "react";
import NextLink from 'next/link';         
import FaqContent from "@/components/Faq/FaqContent";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>FAQ's</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li> 
          <li>FAQ's</li>
        </ul>
      </div>

      <FaqContent />
    </>
  );
}
