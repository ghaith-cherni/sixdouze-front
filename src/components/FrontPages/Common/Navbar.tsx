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
      if (window.scrollY >150) {
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
          src="images\sixdouze_logo_elsi_font.png"
          alt="logo"
          width={250}
          height={150}
        />
        <Image
          src="images\sixdouze_logo_elsi_font.png"
          className="d-none"
          alt="logo"
          width={500}
          height={200}
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
        <div className="other-options" style={{ display: 'flex', alignItems: 'center', gap: '50px' }}>
        
          {/* "Partner With Us" button */}
            <Link
                href="/dashboard/ecommerce/"
                className="fp-btn "
                style={{
                  background: 'linear-gradient(45deg,rgb(123, 54, 186),rgb(230, 19, 89),rgb(238, 31, 148),rgb(241, 88, 50))',
                  paddingLeft: '40px',
                  paddingRight: '10px',
                  display: 'flex',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <i className="material-symbols-outlined" style={{ marginLeft: '-10px' }}>person</i>
                Partner With Us
          </Link>
          {/* Login button */}
          <Link
            href="/authentication/sign-in/"
            className="fp-outlined-btn"
          >
            <i className="material-symbols-outlined">login</i>
            Login
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