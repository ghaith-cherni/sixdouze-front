import * as React from "react";
import NextLink from 'next/link';          
import GalleryStyle1 from "@/components/Gallery/GalleryStyle1";
import GalleryStyle2 from "@/components/Gallery/GalleryStyle2";
import GalleryStyle3 from "@/components/Gallery/GalleryStyle3";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Gallery</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li> 
          <li>Gallery</li>
        </ul>
      </div>

      <GalleryStyle1 />

      <GalleryStyle2 />

      <GalleryStyle3 />
    </>
  );
}
