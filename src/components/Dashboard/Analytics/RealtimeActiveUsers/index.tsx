"use client";

import React, { useEffect, useState } from "react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { Card, Box, Typography, Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import styles from "@/components/Dashboard/Analytics/RealtimeActiveUsers/RealtimeActiveUsers.module.css";

// Dynamically import react-apexcharts with Next.js dynamic import
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const RealtimeActiveUsers: React.FC = () => {
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Users",
      data: [
        100, 90, 85, 95, 100, 100, 90, 85, 95, 100, 100, 90, 85, 95, 100, 100,
        90, 85, 95, 100, 100, 90, 85, 95, 100, 100, 90, 85, 95, 100,
      ],
    },
  ];
  const options: ApexOptions = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: ["#757DFF"],
    plotOptions: {
      bar: {
        columnWidth: "100%",
      },
    },
    grid: {
      show: false,
      borderColor: "#ECEEF2",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 3,
      show: true,
      colors: ["transparent"],
    },
    xaxis: {
      axisTicks: {
        show: false,
        color: "#ECEEF2",
      },
      axisBorder: {
        show: false,
        color: "#ECEEF2",
      },
      labels: {
        show: false,
        style: {
          colors: "#8695AA",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      tickAmount: 5,
      max: 100,
      min: 0,
      labels: {
        show: false,
        style: {
          colors: "#64748B",
          fontSize: "12px",
        },
      },
      axisBorder: {
        show: false,
        color: "#ECEEF2",
      },
      axisTicks: {
        show: false,
        color: "#ECEEF2",
      },
    },
    legend: {
      show: false,
      position: "top",
      fontSize: "12px",
      horizontalAlign: "left",
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
  };

  return (
    <>
      <Card
        sx={{
          bgcolor: "#4936F5 !important",
          position: 'relative',
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          padding: { xs: "18px", sm: "20px", lg: "25px" },
        }}
        className="rmui-card"
      >
        <Typography
          variant="h5"
          sx={{ color: "#fff !important", fontSize: "15px", mb: "5px", lineHeight: 'normal', }}
        >
          Realtime Active Users
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontSize: 36,
            fontWeight: 700,
            lineHeight: 'normal',
            mb: { sx: "25px", md: "35px" },
          }}
          className="text-white"
        >
          4,890
        </Typography>

        <Typography
          sx={{
            fontSize: "14px", 
            color: "#fff !important",
            pb: "5px",
            borderBottom: "1px solid #605DFF",
          }}
        >
          Page views per second
        </Typography>

        <div
          style={{
            marginLeft: "-30px",
            marginRight: "-17px",
          }}
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="bar"
              height={170}
              width={"100%"}
            />
          )}
        </div>

        <Typography
          sx={{
            fontSize: "13px",
            fontWeight: "600",
            color: "#fff !important",
            pb: "5px",
            borderBottom: "1px solid #605DFF",
            mb: "10px",
          }}
        >
          Top Active Pages
        </Typography>

        <Box>
          <Box
            sx={{
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              pb: "5px",
              mb: "5px",
              borderBottom: "1px solid #605DFF",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "10px",
              }}
            >
              /reports/trends-analysis{" "}
              <Link href="#" className="text-white">
                <i className="ri-external-link-line"></i>
              </Link>
            </Box>

            <Box>1520</Box>
          </Box>

          <Box
            sx={{
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              pb: "5px",
              mb: "5px",
              borderBottom: "1px solid #605DFF",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "10px",
              }}
            >
              /monitoring/user-activity{" "}
              <Link href="#" className="text-white">
                <i className="ri-external-link-line"></i>
              </Link>
            </Box>
            <Box>980</Box>
          </Box>

          <Box
            sx={{
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              pb: "5px",
              mb: "5px",
              borderBottom: "1px solid #605DFF",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "10px",
              }}
            >
              /specific/industry-comparisons{" "}
              <Link href="#" className="text-white">
                <i className="ri-external-link-line"></i>
              </Link>
            </Box>
            <Box>856</Box>
          </Box>

          <Box
            sx={{
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              pb: "5px",
              mb: "5px",
              borderBottom: "1px solid #605DFF",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "10px",
              }}
            >
              /global-reach-2023/statistics{" "}
              <Link href="#" className="text-white">
                <i className="ri-external-link-line"></i>
              </Link>
            </Box>
            <Box>735</Box>
          </Box>

          <Box
            sx={{
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              pb: "5px",
              mb: "5px",
              borderBottom: "1px solid #605DFF",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "10px",
              }}
            >
              /security-alerts/2024-update{" "}
              <Link href="#" className="text-white">
                <i className="ri-external-link-line"></i>
              </Link>
            </Box>
            <Box>520</Box>
          </Box>
        </Box>

        <div className="text-end">
          <Link href="#">
            <Button
              variant="outlined"
              sx={{
                borderColor: "#605DFF",
                color: "#fff !important",
                mt: "20px",
              }}
            >
              All Real-Time Report <i className="ri-arrow-right-s-line"></i>
            </Button>
          </Link>
        </div>

        <div className={styles.shape}>
          <Image src="/images/shape.png" alt="shape" width={119} height={160} />
        </div>
      </Card>
    </>
  );
};

export default RealtimeActiveUsers;
