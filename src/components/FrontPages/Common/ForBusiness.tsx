"use client";

import * as React from "react";
import { Grid, Box } from "@mui/material";
import Image from "next/image";

const ForBusiness: React.FC = () => {
  return (
    <>
      <Box
        className="fp-widgets-area"
        sx={{
          pb: { xs: "60px", sm: "60px", md: "80px", lg: "100px", xl: "150px" },
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
            position: "relative",
            zIndex: "1",
          }}
        >
          <Grid
            container
            alignItems="center"
            columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
          >
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <div className="fp-widgets-image">
                <div className="image">
                  <Image
                    src="/images/front-pages/order-summary.png"
                    alt="business-owners-image"
                    width={662}
                    height={807}
                  />
                </div>
                <div className="image2">
                  <Image
                    src="/images/front-pages/courses-sales.jpg"
                    alt="business-growth-image"
                    width={330}
                    height={295}
                  />
                </div>
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <div className="fp-widgets-content">
                <h2>
                  Grow Your Business with Us: Join Our Platform Today!
                </h2>

                <ul className="features-list">
                  <li>
                    <i className="material-symbols-outlined">done_outline</i>
                    <h3 className="fw-semibold">Reach More Customers</h3>
                    <p>
                      Showcase your salon, spa, or hotel to thousands of
                      potential customers looking for beauty and wellness
                      services.
                    </p>
                  </li>

                  <li>
                    <i className="material-symbols-outlined">done_outline</i>
                    <h3 className="fw-semibold">Boost Your Revenue</h3>
                    <p>
                      Increase bookings and revenue by connecting with clients
                      who are ready to book your services.
                    </p>
                  </li>

                  <li>
                    <i className="material-symbols-outlined">done_outline</i>
                    <h3 className="fw-semibold">Easy to Manage</h3>
                    <p>
                      Our platform makes it simple to manage your business
                      profile, bookings, and customer reviews in one place.
                    </p>
                  </li>

                  <li>
                    <i className="material-symbols-outlined">done_outline</i>
                    <h3 className="fw-semibold">Flexible for All Businesses</h3>
                    <p>
                      Whether you're a small local salon or a luxury hotel spa,
                      our platform is designed to fit your needs.
                    </p>
                  </li>
                </ul>
              </div>
            </Grid>
          </Grid>

          {/* Shape Images */}
          <div className="shape1">
            <Image
              src="/images/front-pages/shape1.png"
              alt="shape1"
              width={530}
              height={530}
            />
          </div>
          <div className="shape2">
            <Image
              src="/images/front-pages/shape2.png"
              alt="shape2"
              width={447}
              height={453}
            />
          </div>
        </Box>
      </Box>
    </>
  );
};

export default ForBusiness;