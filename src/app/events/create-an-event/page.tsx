import * as React from "react";
import NextLink from 'next/link';    
import CreateAnEvent from "@/components/Events/CreateAnEvent";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Create An Event</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li> 
          <li>Events</li>
          <li>Create An Event</li>
        </ul>
      </div>

      <CreateAnEvent />
    </>
  );
}
