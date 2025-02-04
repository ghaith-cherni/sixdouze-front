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
  Grid,
  IconButton
} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import styles from "../DeviceSessions/DeviceSessions.module.css";

// Dynamically import react-apexcharts with Next.js dynamic import
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const DeviceSessions: React.FC = () => {
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

  const series = [55, 44, 30, 12];

  const options: ApexOptions = {
    labels: ["Desktop", "Mobile", "Tablet", "Others"],
    colors: ["#37D80A", "#605DFF", "#BF85FB", "#FE7A36"],
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
      },
    },
    stroke: {
      width: 1,
      show: true,
      colors: ["#ffffff"],
    },
    legend: {
      show: false,
      fontSize: "12px",
      position: "bottom",
      horizontalAlign: "center",
      itemMargin: {
        horizontal: 8,
        vertical: 7,
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
    tooltip: {
      y: {
        formatter: function (val: any) {
          return val + "%";
        },
      },
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
            Device Sessions
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
                fontSize: '14px'
              }}
            >
              Last Week <KeyboardArrowDownIcon sx={{ fontSize: "20px" }} />
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

        <Grid
          container
          columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}
          alignItems="center"
        >
          <Grid item xs={12} md={12} lg={5}>
            <Box
              style={{
                marginLeft: "-15px",
                marginRight: "-15px",
              }}
            >
              {isChartLoaded && (
                <Chart
                  options={options}
                  series={series}
                  type="pie"
                  height={400}
                  width={"100%"}
                />
              )}
            </Box>
          </Grid>

          <Grid item xs={12} md={12} lg={7}>
            <Box className={styles.content}>
              {/* Desktop */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
                className={`ds-item ${styles.item}`}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: "success.main",
                      width: "10px",
                      height: "10px",
                      borderRadius: "100px",
                    }}
                  ></Box>

                  <Box>
                    <Typography
                      sx={{
                        fontSize: "12px",
                      }}
                    >
                      Desktop
                    </Typography>
                    <Typography
                      component="h5"
                      sx={{
                        fontWeight: "600",
                        fontSize: "16px",
                      }}
                    >
                      45.2%
                    </Typography>
                  </Box>
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontSize: "12px",
                    }}
                  >
                    Sessions
                  </Typography>

                  <Typography
                    component="h5"
                    sx={{
                      fontWeight: "600",
                      fontSize: "14px",
                    }}
                    className="text-body"
                  >
                    8,732
                  </Typography>
                </Box>
              </Box>

              {/* Mobile */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
                className={`ds-item ${styles.item}`}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: "primary.main",
                      width: "10px",
                      height: "10px",
                      borderRadius: "100px",
                    }}
                  ></Box>

                  <Box>
                    <Typography
                      sx={{
                        fontSize: "12px",
                      }}
                    >
                      Mobile
                    </Typography>
                    <Typography
                      component="h5"
                      sx={{
                        fontWeight: "600",
                        fontSize: "16px",
                      }}
                    >
                      48.7%
                    </Typography>
                  </Box>
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontSize: "12px",
                    }}
                  >
                    Sessions
                  </Typography>

                  <Typography
                    component="h5"
                    sx={{
                      fontWeight: "600",
                      fontSize: "14px",
                    }}
                    className="text-body"
                  >
                    9,416
                  </Typography>
                </Box>
              </Box>

              {/* Tablet */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
                className={`ds-item ${styles.item}`}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: "info.main",
                      width: "10px",
                      height: "10px",
                      borderRadius: "100px",
                    }}
                  ></Box>

                  <Box>
                    <Typography
                      sx={{
                        fontSize: "12px",
                      }}
                    >
                      Tablet
                    </Typography>
                    <Typography
                      component="h5"
                      sx={{
                        fontWeight: "600",
                        fontSize: "16px",
                      }}
                    >
                      32.3%
                    </Typography>
                  </Box>
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontSize: "12px",
                    }}
                  >
                    Sessions
                  </Typography>

                  <Typography
                    component="h5"
                    sx={{
                      fontWeight: "600",
                      fontSize: "14px",
                    }}
                    className="text-body"
                  >
                    1,042
                  </Typography>
                </Box>
              </Box>

              {/* Others */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
                className={`ds-item ${styles.item}`}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: "error.main",
                      width: "10px",
                      height: "10px",
                      borderRadius: "100px",
                    }}
                  ></Box>

                  <Box>
                    <Typography
                      sx={{
                        fontSize: "12px",
                      }}
                    >
                      Others
                    </Typography>
                    <Typography
                      component="h5"
                      sx={{
                        fontWeight: "600",
                        fontSize: "16px",
                      }}
                    >
                      15.4%
                    </Typography>
                  </Box>
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontSize: "12px",
                    }}
                  >
                    Sessions
                  </Typography>

                  <Typography
                    component="h5"
                    sx={{
                      fontWeight: "600",
                      fontSize: "14px",
                    }}
                    className="text-body"
                  >
                    135
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Typography
          sx={{
            fontSize: "12px",
            mt: '25px !important',
            display: 'block'
          }}
        >
          This data helps you understand which devices are most commonly used and how engagement metrics vary between them.
        </Typography>
      </Card>
    </>
  );
};

export default DeviceSessions;
