import * as React from "react";
import NextLink from "next/link";
import ChatContent from "@/components/Apps/Chat/ChatContent";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Chat</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>Apps</li>
          <li>Chat</li>
        </ul>
      </div>

      <ChatContent />
    </>
  );
}
