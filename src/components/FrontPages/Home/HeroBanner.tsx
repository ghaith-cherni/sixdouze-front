"use client";

import * as React from "react";
import { Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";


const HeroBanner: React.FC = () => {

  const [service, setService] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", { service, location, date });
  };
  return (
    <>
      <Box
        className="fp-banner-area"
        sx={{
          mb: { xs: "60px", sm: "60px", md: "80px", lg: "100px", xl: "150px" },
        }}
      >
        <Box
          sx={{
            maxWidth: {
              xs: "100%",
              sm: "720px",
              md: "960px",
              lg: "1140px",
              xl: "1320px",
            },
            mx: "auto",
            px: "12px",
            position: "relative",
            zIndex: "1",
          }}
        >
          <Box
            className="fp-banner-content"
            sx={{
              mx: "auto",
              textAlign: "center",
            }}
          >
            <h1>Find The Best Beauty Salons Near You</h1>
            <div className="flex justify-center gap-4">
        <input 
          type="text" 
          placeholder="Service (e.g., Haircut)" 
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="p-2 border rounded"
        />
        <input 
          type="text" 
          placeholder="Location" 
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 border rounded"
        />
        <input 
          type="date" 
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-2 border rounded"
        />
        <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded">
          Search
        </button>
      </div>

            <Link href="/dashboard/ecommerce/" className="fp-banner-button">
              <i className="material-symbols-outlined">person</i>
              Get started - It is free
            </Link>
          </Box>



          {/* Shape Images */}
          <div className="shape1">
            <Image
              src="/images/front-pages/shape3.png"
              alt="shape3"
              width={685}
              height={685}
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
          <div className="shape3">
            <Image
              src="/images/front-pages/shape4.png"
              alt="shape4"
              width={171}
              height={171}
            />
          </div>
          <div className="shape4">
            <Image
              src="/images/front-pages/shape5.png"
              alt="shape5"
              width={658}
              height={656}
            />
          </div>
        </Box>
      </Box>
    </>
  );
};

export default HeroBanner;
