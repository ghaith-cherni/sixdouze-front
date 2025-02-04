import * as React from "react";
import NextLink from 'next/link';   
import EventsGrid from "@/components/Events/EventsGrid";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Events Grid</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li> 
          <li>Events Grid</li>
        </ul>
      </div>

      <EventsGrid />
    </>
  );
}
