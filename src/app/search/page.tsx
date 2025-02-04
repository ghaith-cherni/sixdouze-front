import * as React from "react";
import NextLink from 'next/link';
import SearchContent from "@/components/Search/SearchContent";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Search</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li> 
          <li>Search</li>
        </ul>
      </div>

      <SearchContent />
    </>
  );
}
