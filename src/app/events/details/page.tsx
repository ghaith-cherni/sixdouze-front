import * as React from "react";
import NextLink from 'next/link';    
import EventsDetails from "@/components/Events/EventsDetails";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Events Details</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li> 
          <li>Events</li>
          <li>Events Details</li>
        </ul>
      </div>

      <EventsDetails />
    </>
  );
}
