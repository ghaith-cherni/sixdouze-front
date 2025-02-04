"use client";

import React from "react";
import { Card, Box, Typography } from "@mui/material";
import CustomDropdown from "./CustomDropdown";

const TopProductsBySales: React.FC = () => {
  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          padding: { xs: "18px", sm: "20px", lg: "25px" },
        }}
        className="rmui-card"
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: "20px",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              fontWeight: 700,
            }}
            className="text-black"
          >
            Top Products by Sales
          </Typography>

          <Box>
            <CustomDropdown
              options={["This Week", "This Month", "This Year"]} // Need to change the options also in CustomDropdown file
              onSelect={(value) => console.log(value)}
              defaultLabel="This Week"
            />
          </Box>
        </Box>

        <Box className="crm-sr-list">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "12.8px",
              paddingTop: "12.8px",
            }}
            className="border-top"
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <Box
                className="text-primary"
                sx={{
                  bgcolor: "primary.100",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "4px",
                  width: "48px",
                  height: "48px",
                }}
              >
                <i className="material-symbols-outlined">smartphone</i>
              </Box>

              <Box>
                <Typography
                  variant="h6"
                  className="text-black"
                  fontWeight="500 !important"
                  fontSize="14px"
                >
                  Samsung Galaxy
                </Typography>

                <Typography
                  component="span"
                  sx={{ fontSize: "13px", display: "block" }}
                >
                  Samsung
                </Typography>
              </Box>
            </Box>

            <Typography
              component="div"
              color="success"
              fontWeight={500}
              className="text-black"
            >
              $96,455
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "12.8px",
              paddingTop: "12.8px",
            }}
            className="border-top"
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <Box
                className="text-purple bg-purple-100"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "4px",
                  width: "48px",
                  height: "48px",
                }}
              >
                <i className="material-symbols-outlined">tap_and_play</i>
              </Box>

              <Box>
                <Typography
                  variant="h6"
                  className="text-black"
                  fontWeight="500 !important"
                  fontSize="14px"
                >
                  iPhone 15 Plus
                </Typography>

                <Typography
                  component="span"
                  sx={{ fontSize: "13px", display: "block" }}
                >
                  Apple inc.
                </Typography>
              </Box>
            </Box>

            <Typography component="div" fontWeight={500} className="text-black">
              $89,670
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "12.8px",
              paddingTop: "12.8px",
            }}
            className="border-top"
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <Box
                className="text-danger"
                sx={{
                  bgcolor: "error.100",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "4px",
                  width: "48px",
                  height: "48px",
                }}
              >
                <i className="material-symbols-outlined">edgesensor_low</i>
              </Box>

              <Box>
                <Typography
                  variant="h6"
                  className="text-black"
                  fontWeight="500 !important"
                  fontSize="14px"
                >
                  Vivo V30
                </Typography>

                <Typography
                  component="span"
                  sx={{ fontSize: "13px", display: "block" }}
                >
                  Vivo Ltd.
                </Typography>
              </Box>
            </Box>

            <Typography component="div" fontWeight={500} className="text-black">
              $75,329
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "12.8px",
              paddingTop: "12.8px",
            }}
            className="border-top"
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <Box
                className="text-success"
                sx={{
                  bgcolor: "success.100",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "4px",
                  width: "48px",
                  height: "48px",
                }}
              >
                <i className="material-symbols-outlined">watch</i>
              </Box>

              <Box>
                <Typography
                  variant="h6"
                  className="text-black"
                  fontWeight="500 !important"
                  fontSize="14px"
                >
                  Watch Series 7
                </Typography>

                <Typography
                  component="span"
                  sx={{ fontSize: "13px", display: "block" }}
                >
                  Apple
                </Typography>
              </Box>
            </Box>

            <Typography component="div" fontWeight={500} className="text-black">
              $98,256
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "12.8px",
              paddingTop: "12.8px",
            }}
            className="border-top"
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <Box
                className="text-primary"
                sx={{
                  bgcolor: "primary.100",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "4px",
                  width: "48px",
                  height: "48px",
                }}
              >
                <i className="material-symbols-outlined">headphones</i>
              </Box>

              <Box>
                <Typography
                  variant="h6"
                  className="text-black"
                  fontWeight="500 !important"
                  fontSize="14px"
                >
                  Sony WF-SP800N
                </Typography>

                <Typography
                  component="span"
                  sx={{ fontSize: "13px", display: "block" }}
                >
                  Sony
                </Typography>
              </Box>
            </Box>

            <Typography component="div" fontWeight={500} className="text-black">
              $65,987
            </Typography>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default TopProductsBySales;
