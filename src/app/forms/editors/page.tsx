import * as React from "react";  
import NextLink from 'next/link';   
import RteEditors from "@/components/Forms/Editors/RteEditors";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Editors</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>Forms</li>
          <li>Editors</li>
        </ul>
      </div>

      <RteEditors />
    </>
  );
}
