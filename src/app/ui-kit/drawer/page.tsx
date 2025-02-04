import * as React from "react"; 
import NextLink from 'next/link';  
import TemporaryDrawer from "@/components/UiKit/Drawer/TemporaryDrawer";
import AnchorTemporaryDrawer from "@/components/UiKit/Drawer/AnchorTemporaryDrawer";
import SwipeableTemporaryDrawer from "@/components/UiKit/Drawer/SwipeableTemporaryDrawer";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Drawer</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>UI Elements</li>
          <li>Drawer</li>
        </ul>
      </div>

      <TemporaryDrawer />

      <AnchorTemporaryDrawer />

      <SwipeableTemporaryDrawer />
    </>
  );
}
