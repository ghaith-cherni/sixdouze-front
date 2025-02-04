import * as React from "react"; 
import NextLink from 'next/link'; 
import SettingsForm from "@/components/Social/Settings/SettingsForm";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Settings</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>Social</li>
          <li>Profile</li>
          <li>Settings</li>
        </ul>
      </div>

      <SettingsForm />
    </>
  );
}
