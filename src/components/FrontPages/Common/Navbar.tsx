"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const pathname = usePathname();

  const [isToggleNavbar, setToggleNavbar] = useState(true);
  const handleToggleNavbar = () => {
    setToggleNavbar(!isToggleNavbar);
  };

  useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId?.classList.add("sticky");
      } else {
        elementId?.classList.remove("sticky");
      }
    });
  });

  return (
    <>
      <div id="navbar" className="fp-navbar-area transition">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand" href="/">
              <Image
                src="/images/logo-big.svg"
                alt="logo"
                width={142}
                height={38}
              />
              <Image
                src="/images/white-logo-big.svg"
                className="d-none"
                alt="logo"
                width={142}
                height={38}
              />
            </Link>

            <button className="navbar-toggler">
              <span className="burger-menu" onClick={handleToggleNavbar}>
                <span className="top-bar"></span>
                <span className="middle-bar"></span>
                <span className="bottom-bar"></span>
              </span>
            </button>

            <div
              className={`collapse navbar-collapse ${
                isToggleNavbar ? "" : "show"
              }`}
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    href="/"
                    className={`nav-link ${pathname === "/" ? "active" : ""}`}
                  >
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href="/front-pages/features/"
                    className={`nav-link ${
                      pathname === "/front-pages/features/" ? "active" : ""
                    }`}
                  >
                    Features
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href="/front-pages/team/"
                    className={`nav-link ${
                      pathname === "/front-pages/team/" ? "active" : ""
                    }`}
                  >
                    Our Team
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href="/front-pages/faq/"
                    className={`nav-link ${
                      pathname === "/front-pages/faq/" ? "active" : ""
                    }`}
                  >
                    FAQ's
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href="/front-pages/contact/"
                    className={`nav-link ${
                      pathname === "/front-pages/contact/" ? "active" : ""
                    }`}
                  >
                    Contact
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href="/dashboard/ecommerce/"
                    className={`nav-link ${
                      pathname === "/contact/" ? "active" : ""
                    }`}
                  >
                    Admin
                  </Link>
                </li>
              </ul>

              <div className="other-options">
                <Link
                  href="/authentication/sign-in/"
                  className="fp-outlined-btn"
                >
                  <i className="material-symbols-outlined">login</i>
                  Login
                </Link>

                <Link href="/authentication/sign-up/" className="fp-btn">
                  <i className="material-symbols-outlined">person</i>
                  Register
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
