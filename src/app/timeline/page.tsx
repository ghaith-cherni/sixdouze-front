import * as React from "react";
import NextLink from 'next/link';        
import BasicTimeline from "@/components/Timeline/BasicTimeline";
import AdvancedTimeline from "@/components/Timeline/AdvancedTimeline";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Timeline</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li> 
          <li>Timeline</li>
        </ul>
      </div>

      <BasicTimeline />

      <AdvancedTimeline />
    </>
  );
}
