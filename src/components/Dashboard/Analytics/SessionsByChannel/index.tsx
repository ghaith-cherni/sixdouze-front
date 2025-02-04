"use client";

import React, { useEffect, useState } from "react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import {
  Card,
  Box,
  Typography,
  Menu,
  MenuItem,
  IconButton
} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// Dynamically import react-apexcharts with Next.js dynamic import
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SessionsByChannel: React.FC = () => {
  // Dropdown
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [976, 651, 818, 459, 320, 209];

  const options: ApexOptions = {
    labels: [
      "Email",
      "Organic Search",
      "Direct Browse",
      "Paid Search",
      "Social",
      "Referral",
    ],
    colors: ["#3584FC", "#37D80A", "#BF85FB", "#90C7FF", "#605DFF", "#FE7A36"],
    stroke: {
      width: 1,
      show: true,
      colors: ["#ffffff"],
    },
    legend: {
      show: false,
      position: "top",
      fontSize: "12px",
      horizontalAlign: "center",
      itemMargin: {
        horizontal: 8,
        vertical: 0,
      },
      labels: {
        colors: "#64748B",
      },
      markers: {
        shape: 'diamond',
        offsetX: -2,
        offsetY: -0.5,
      },
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          labels: {
            show: true,
            name: {
              color: "#64748B",
            },
            value: {
              show: true,
              color: "#3A4252",
              fontSize: "28px",
              fontWeight: "600",
            },
            total: {
              show: true,
              color: "#64748B",
            },
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: false,
    },
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
            mb: "25px",
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
            Sessions By Channel
          </Typography>

          <Box>
            <IconButton
              onClick={handleClick}
              size="small"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              sx={{
                borderRadius: '0px',
                padding: '1px 2px',
                fontSize: '14px', 
              }}
            >
              Last 30 Days <KeyboardArrowDownIcon sx={{ fontSize: "20px" }} />
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
              <MenuItem>Last Day</MenuItem>
              <MenuItem>Last Week</MenuItem>
              <MenuItem>Last Month</MenuItem> 
              <MenuItem>Last Year</MenuItem> 
            </Menu>
          </Box>
        </Box>

        <Box
          sx={{
            marginTop: "-15px",
          }}
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="donut"
              height={310}
              width={"100%"}
            />
          )}
        </Box>

        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              display: "inline-block",
              textAlign: "start",
              margin: "15px 15px 0",
            }}
          >
            <Typography
              component="span"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "13px",
                mb: "8px",
              }}
            >
              <Typography
                component="span"
                className="bg-primary"
                sx={{
                  width: "11px",
                  height: "11px",
                  borderRadius: "3px",
                }}
              ></Typography>
              Email
            </Typography>

            <Typography
              variant="h6"
              mb={0}
              fontSize={18}
              fontWeight={500}
              lineHeight={1}
              className="text-black"
            >
              976
            </Typography>
          </Box>

          <Box
            sx={{
              display: "inline-block",
              textAlign: "start",
              margin: "15px 15px 0",
            }}
          >
            <Typography
              component="span"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "13px",
                mb: "8px",
              }}
            >
              <Typography
                component="span"
                className="bg-secondary"
                sx={{
                  width: "11px",
                  height: "11px",
                  borderRadius: "3px",
                }}
              ></Typography>
              Organic Search
            </Typography>

            <Typography
              variant="h6"
              mb={0}
              fontSize={18}
              fontWeight={500}
              lineHeight={1}
              className="text-black"
            >
              651
            </Typography>
          </Box>

          <Box
            sx={{
              display: "inline-block",
              textAlign: "start",
              margin: "15px 15px 0",
            }}
          >
            <Typography
              component="span"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "13px",
                mb: "8px",
              }}
            >
              <Typography
                component="span"
                className="bg-purple"
                sx={{
                  width: "11px",
                  height: "11px",
                  borderRadius: "3px",
                }}
              ></Typography>
              Direct Browse
            </Typography>

            <Typography
              variant="h6"
              mb={0}
              fontSize={18}
              fontWeight={500}
              lineHeight={1}
              className="text-black"
            >
              818
            </Typography>
          </Box>

          <Box
            sx={{
              display: "inline-block",
              textAlign: "start",
              margin: "15px 15px 0",
            }}
          >
            <Typography
              component="span"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "13px",
                mb: "8px",
              }}
            >
              <Typography
                component="span"
                className="bg-info"
                sx={{
                  width: "11px",
                  height: "11px",
                  borderRadius: "3px",
                }}
              ></Typography>
              Paid Search
            </Typography>

            <Typography
              variant="h6"
              mb={0}
              fontSize={18}
              fontWeight={500}
              lineHeight={1}
              className="text-black"
            >
              459
            </Typography>
          </Box>

          <Box
            sx={{
              display: "inline-block",
              textAlign: "start",
              margin: "15px 15px 0",
            }}
          >
            <Typography
              component="span"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "13px",
                mb: "8px",
              }}
            >
              <Typography
                component="span"
                className="bg-success"
                sx={{
                  width: "11px",
                  height: "11px",
                  borderRadius: "3px",
                }}
              ></Typography>
              Social
            </Typography>

            <Typography
              variant="h6"
              mb={0}
              fontSize={18}
              fontWeight={500}
              lineHeight={1}
              className="text-black"
            >
              320
            </Typography>
          </Box>

          <Box
            sx={{
              display: "inline-block",
              textAlign: "start",
              margin: "15px 15px 0",
            }}
          >
            <Typography
              component="span"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "13px",
                mb: "8px",
              }}
            >
              <Typography
                component="span"
                className="bg-orange"
                sx={{
                  width: "11px",
                  height: "11px",
                  borderRadius: "3px",
                }}
              ></Typography>
              Referral
            </Typography>

            <Typography
              variant="h6"
              mb={0}
              fontSize={18}
              fontWeight={500}
              lineHeight={1}
              className="text-black"
            >
              209
            </Typography>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default SessionsByChannel;
