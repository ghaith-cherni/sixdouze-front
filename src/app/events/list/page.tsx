import * as React from "react";
import NextLink from 'next/link';    
import EventsList from "@/components/Events/EventsList";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Events List</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li> 
          <li>Events</li>
          <li>List</li>
        </ul>
      </div>

      <EventsList />
    </>
  );
}
