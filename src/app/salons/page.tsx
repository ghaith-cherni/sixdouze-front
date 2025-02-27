"use client";

import * as React from "react";
import { Grid, Box, Typography, Rating, Chip } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import PlaceIcon from "@mui/icons-material/Place";
import StarIcon from "@mui/icons-material/Star";

// Mock data for salons
const salons = [
  {
    id: 1,
    name: "Nabeul Beauty Salon",
    rating: 4.5,
    location: "08 Boulevard de l'Environnement, Paris",
    distance: ">50 km",
    images: [
      "/images/front-pages/salon1.jpg",
      "/images/front-pages/salon2.jpg",
      "/images/front-pages/salon3.jpg",
    ],
    services: [
      {
        type: "Spa",
        list: [
          { name: "Hammam Aquarius", duration: "1 hr", price: "TND 40" },
          { name: "Massage Relaxant", duration: "1 hr", price: "TND 90" },
          {
            name: "Epilation Sourcils + Lèvres + Menton (cire)",
            duration: "30 mins",
            price: "TND 20",
          },
        ],
      },
      {
        type: "Nails",
        list: [
          { name: "Pose Vernis Semi-Permanent", duration: "1 hr", price: "TND 45" },
          { name: "Pose Vernis + Limage", duration: "45 mins", price: "TND 20" },
          { name: "Décoration Ongle / Unité", duration: "10 mins", price: "TND 6" },
        ],
      },
    ],
  },
  // Add more salons here
];

const SalonsPage: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Sidebar (1/3 of the page) */}
      <Box
        sx={{
          width: "33.33%",
          height: "100%",
          overflowY: "auto",
          p: 3,
          borderRight: "1px solid #e0e0e0",
        }}
      >
        {salons.map((salon) => (
          <Box key={salon.id} sx={{ mb: 4 }}>
            {/* Salon Images Swiper */}
            <Swiper
              spaceBetween={10}
              pagination={{ clickable: true }}
              modules={[Pagination]}
              style={{ width: "100%", borderRadius: "10px", overflow: "hidden" }}
            >
              {salon.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: "200px",
                      borderRadius: "10px",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={image}
                      alt={`${salon.name} image ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Salon Name and Rating */}
            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                {salon.name}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Rating
                  value={salon.rating}
                  precision={0.1}
                  readOnly
                  emptyIcon={<StarIcon sx={{ opacity: 0.5 }} />}
                />
                <Typography variant="body2" sx={{ ml: 1 }}>
                  {salon.rating}
                </Typography>
              </Box>
            </Box>

            {/* Location and Distance */}
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <PlaceIcon fontSize="small" />
              <Typography variant="body2" sx={{ ml: 1 }}>
                {salon.location}
              </Typography>
              <Chip
                label={salon.distance}
                size="small"
                sx={{ ml: 1, backgroundColor: "primary.light", color: "white" }}
              />
            </Box>

            {/* Services List */}
            <Box sx={{ mt: 2 }}>
              {salon.services.map((service, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                    {service.type}
                  </Typography>
                  {service.list.map((item, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 1,
                      }}
                    >
                      <Typography variant="body2">{item.name}</Typography>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography variant="body2" sx={{ mr: 2 }}>
                          {item.duration}
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          {item.price}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>

      {/* Right Side (2/3 of the page) - Blank for now */}
      <Box sx={{ width: "66.67%", height: "100%" }}></Box>
    </Box>
  );
};

export default SalonsPage;