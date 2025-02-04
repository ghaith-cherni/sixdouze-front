"use client";

import * as React from "react";
import { Grid, Box, Typography } from "@mui/material";
import Image from "next/image";

const KeyFeatures: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          zIndex: "1",
          pb: { xs: "60px", sm: "60px", md: "80px", lg: "100px", xl: "120px" },
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
          <Box className="section-title text-center">
            <div className="sub-title">
              <span className="text-purple">Key Features</span>
            </div>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "24px", md: "28px", lg: "34px", xl: "36px" },
              }}
            >
              Recommended
            </Typography>
          </Box>

          <Grid
            container
            justifyContent="center"
            columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
          >
            <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
              <Box className="fp-single-key-feature-box">
                <div
                  className="icon"
                  style={{
                    backgroundColor: "#DDE4FF",
                  }}
                >
                  <Image
                    src="/images/front-pages/stacks.svg"
                    alt="stacks"
                    width={55}
                    height={55}
                  />
                </div>
                <h3 className="fw-semibold">Real-Time Updates</h3>
                <p>
                  Provide real-time updates and notifications to keep users
                  informed about important events, changes, or updates within
                  the system.
                </p>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
              <Box className="fp-single-key-feature-box">
                <div
                  className="icon"
                  style={{
                    backgroundColor: "#F3E8FF",
                  }}
                >
                  <Image
                    src="/images/front-pages/code.svg"
                    alt="code"
                    width={55}
                    height={55}
                  />
                </div>
                <h3 className="fw-semibold">Quality Code</h3>
                <p>
                  These features include adherence to coding standards, robust
                  error handling mechanisms, efficient algorithms, scalability,
                  maintainability, and readability.
                </p>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
              <Box className="fp-single-key-feature-box">
                <div
                  className="icon"
                  style={{
                    backgroundColor: "#FFE8D4",
                  }}
                >
                  <Image
                    src="/images/front-pages/support_agent.svg"
                    alt="support_agent"
                    width={55}
                    height={55}
                  />
                </div>
                <h3 className="fw-semibold">24/7 Customer Support</h3>
                <p>
                  Our 24/7 customer support is dedicated to providing
                  round-the-clock assistance, ensuring that help is always
                  available whenever our customers need it.
                </p>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default KeyFeatures;
