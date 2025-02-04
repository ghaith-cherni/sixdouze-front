import * as React from "react"; 
import NextLink from 'next/link';  
import TypographyTypes from "@/components/UiKit/Typography/TypographyTypes";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Typography</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>UI Elements</li>
          <li>Typography</li>
        </ul>
      </div>
  
      <TypographyTypes />
    </>
  );
}
