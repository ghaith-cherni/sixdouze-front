"use client";

import * as React from "react";
import { Grid, Box, Link } from "@mui/material";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <>
      <Box
        className="fp-footer"
        sx={{
          pt: { xs: "60px", sm: "60px", md: "80px", lg: "100px", xl: "150px" },
        }}
      >
        <Box
          sx={{
            maxWidth: {
              xs: "100%",
              sm: "700px",
              md: "720px",
              lg: "1140px",
              xl: "1320px",
            },
            mx: "auto",
            px: "12px",
          }}
        >
          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
            <Grid item xs={12} sm={6} md={6} lg={3} className="fp-grid-item">
              <div className="single-footer-widget">
                <Link href="/" className="logo">
                  <Image
                    src="/images/logo-big.svg"
                    alt="logo"
                    width={100}
                    height={26}
                  />
                  <Image
                    src="/images/white-logo-big.svg"
                    className="d-none"
                    alt="logo"
                    width={142}
                    height={38}
                  />
                </Link>

                <p>
                  With customizable dashboards tailored to your needs,
                  collaborate effortlessly with your team and stay ahead with
                  real-time updates.
                </p>

                <div className="socials">
                  <a href="#" target="_blank">
                    <i className="ri-facebook-fill"></i>
                  </a>
                  <a href="#" target="_blank">
                    <i className="ri-twitter-x-fill"></i>
                  </a>
                  <a href="#" target="_blank">
                    <i className="ri-linkedin-fill"></i>
                  </a>
                  <a href="#" target="_blank">
                    <i className="ri-dribbble-fill"></i>
                  </a>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={3} className="fp-grid-item">
              <div className="single-footer-widget">
                <h3>Our Products</h3>
                <ul className="custom-links">
                  <li>
                    <Link href="#">Trezo Dashboard</Link>
                  </li>
                  <li>
                    <Link href="#">Tagus Admin</Link>
                  </li>
                  <li>
                    <Link href="#">eCademy LMS</Link>
                  </li>
                  <li>
                    <Link href="#">Admash Template</Link>
                  </li>
                </ul>
              </div>
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={3} className="fp-grid-item">
              <div className="single-footer-widget">
                <h3>Quick Links</h3>

                <ul className="custom-links">
                  <li>
                    <Link href="#">Home</Link>
                  </li>
                  <li>
                    <Link href="#">Features</Link>
                  </li>
                  <li>
                    <Link href="#">Testimonials</Link>
                  </li>
                  <li>
                    <Link href="#">Our Team</Link>
                  </li>
                </ul>
              </div>
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={3} className="fp-grid-item">
              <div className="single-footer-widget">
                <h3>Privacy Policy</h3>
                <ul className="custom-links">
                  <li>
                    <Link href="#">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link href="#">Cookie Policy</Link>
                  </li>
                  <li>
                    <Link href="#">Notice at Collection</Link>
                  </li>
                  <li>
                    <Link href="#">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </Grid>
          </Grid>
        </Box>

        <div className="copyright-area bg-white text-center">
          <div className="container">
            <p>
              © <span>Trezo</span> is Proudly Owned by{" "}
              <a href="https://envytheme.com/" target="_blank">
                EnvyTheme
              </a>
            </p>
          </div>
        </div>
      </Box>
    </>
  );
};

export default Footer;
