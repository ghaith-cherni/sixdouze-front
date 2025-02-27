"use client";

import React, { useState, ReactNode } from "react";
import { usePathname } from "next/navigation";
import TopNavbar from "./../components/Layout/TopNavbar/index";
import Footer from "@/components/Layout/Footer";
import ControlPanel from "@/components/Layout/ControlPanel";
import LeftSidebarMenu from "@/components/Layout/LeftSidebarMenu";


interface LayoutProviderProps {
  children: ReactNode;
}

const LayoutProvider: React.FC<LayoutProviderProps> = ({ children }) => {
  const [active, setActive] = useState<boolean>(false);
  const pathname = usePathname();

  const toggleActive = () => {
    setActive(!active);
  };

  const isAuthPage = [
    "/authentication/sign-in/",
    "/authentication/sign-up/",
    "/authentication/forgot-password/",
    "/authentication/reset-password/",
    "/authentication/confirm-email/",
    "/authentication/lock-screen/",
    "/authentication/logout/",
    "/",
    "/front-pages/contact/",
  ].includes(pathname);

  return (
    <>
      <div>
        {!isAuthPage && (
          <>
            <TopNavbar toggleActive={toggleActive} />
          </>
        )}

        <div  >
          {children}

          {!isAuthPage && <Footer />}
        </div>
      </div>

    </>
  );
};

export default LayoutProvider;
