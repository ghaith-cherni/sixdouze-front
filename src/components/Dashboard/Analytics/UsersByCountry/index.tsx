"use client";

import React from "react";
import {
  Card,
  Box,
  Typography,
  Menu,
  MenuItem,
  IconButton,
  Grid,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Image from "next/image";
import WorldMapContent from "./WorldMapContent";

const UsersByCountry: React.FC = () => {
  // Dropdown
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
            mb: "35px",
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
            Users by Country
          </Typography>

          <Box>
            <IconButton
              onClick={handleClick}
              size="small"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              sx={{
                borderRadius: "0px",
                padding: "1px 2px",
                fontSize: "14px",
              }}
            >
              This Week <KeyboardArrowDownIcon sx={{ fontSize: "20px" }} />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,

                sx: {
                  overflow: "visible",
                  boxShadow: "0 4px 45px #0000001a",
                  mt: 0,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem>This Day</MenuItem>
              <MenuItem>This Week</MenuItem>
              <MenuItem>This Month</MenuItem>
              <MenuItem>This Year</MenuItem>
            </Menu>
          </Box>
        </Box>

        <Box sx={{ textAlign: "center", mb: "28px" }}>
          <WorldMapContent />
        </Box>

        <Grid container columnSpacing={{ xs: 0 }} className="uc-content">
          <Grid item xs={6}>
            <Box
              sx={{
                display: "flex",
                gap: "10px",
                mb: "15px",
                pb: "15px",
              }}
              className="border-bottom"
            >
              <Box sx={{ flexShrink: "0", mt: "3px" }}>
                <Image
                  src="/images/flags/usa.svg"
                  alt="usa"
                  width={20}
                  height={20}
                />
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontWeight: "500",
                    display: "block",
                    fontSize: "12px",
                    marginBottom: "5px",
                    lineHeight: "normal",
                  }}
                >
                  United States
                </Typography>

                <Typography
                  component="h5"
                  sx={{
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "normal",
                  }}
                >
                  12,800{" "}
                  <Typography
                    component="span"
                    sx={{ fontSize: "12px" }}
                    className="text-body"
                  >
                    35.6%
                  </Typography>
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Box
              sx={{
                display: "flex",
                gap: "10px",
                mb: "15px",
                pb: "15px",
              }}
              className="border-bottom"
            >
              <Box sx={{ flexShrink: "0", mt: "3px" }}>
                <Image
                  src="/images/flags/uk.svg"
                  alt="uk"
                  width={20}
                  height={20}
                />
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontWeight: "500",
                    display: "block",
                    fontSize: "12px",
                    marginBottom: "5px",
                    lineHeight: "normal",
                  }}
                >
                  United Kingdom
                </Typography>

                <Typography
                  component="h5"
                  sx={{
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "normal",
                  }}
                >
                  6,750{" "}
                  <Typography
                    component="span"
                    sx={{ fontSize: "12px" }}
                    className="text-body"
                  >
                    18.7%
                  </Typography>
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Box
              sx={{
                display: "flex",
                gap: "10px",
                mb: "15px",
                pb: "15px",
              }}
              className="border-bottom"
            >
              <Box sx={{ flexShrink: "0", mt: "3px" }}>
                <Image
                  src="/images/flags/canada.svg"
                  alt="canada"
                  width={20}
                  height={20}
                />
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontWeight: "500",
                    display: "block",
                    fontSize: "12px",
                    marginBottom: "5px",
                    lineHeight: "normal",
                  }}
                >
                  Canada
                </Typography>
                <Typography
                  component="h5"
                  sx={{
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "normal",
                  }}
                >
                  2,500{" "}
                  <Typography
                    component="span"
                    sx={{ fontSize: "12px" }}
                    className="text-body"
                  >
                    6.3%
                  </Typography>
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Box
              sx={{
                display: "flex",
                gap: "10px",
                mb: "15px",
                pb: "15px",
              }}
              className="border-bottom"
            >
              <Box sx={{ flexShrink: "0", mt: "3px" }}>
                <Image
                  src="/images/flags/australia.svg"
                  alt="australia"
                  width={20}
                  height={20}
                />
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontWeight: "500",
                    display: "block",
                    fontSize: "12px",
                    marginBottom: "5px",
                    lineHeight: "normal",
                  }}
                >
                  Australia
                </Typography>
                <Typography
                  component="h5"
                  sx={{
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "normal",
                  }}
                >
                  2,200{" "}
                  <Typography
                    component="span"
                    sx={{ fontSize: "12px" }}
                    className="text-body"
                  >
                    5.4%
                  </Typography>
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default UsersByCountry;
