import * as React from "react";
import NextLink from 'next/link';    
import EditAnEvent from "@/components/Events/EditAnEvent";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Edit An Event</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li> 
          <li>Events</li>
          <li>Edit An Event</li>
        </ul>
      </div>

      <EditAnEvent />
    </>
  );
}
