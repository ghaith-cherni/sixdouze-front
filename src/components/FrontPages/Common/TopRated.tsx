"use client";

import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Box, Typography, Rating, Chip } from "@mui/material";
import Image from "next/image";
import PlaceIcon from "@mui/icons-material/Place"; // For location icon
import StarIcon from "@mui/icons-material/Star"; // For rating icon
import Link from "next/link";




{/*
    const [salons, setSalons] = React.useState([]);

  React.useEffect(() => {
    const fetchTopRankedSalons = async () => {
      try {
        const response = await axios.get("/api/topRanked");
        setSalons(response.data);
      } catch (error) {
        console.error("Error fetching top-ranked salons:", error);
      }
    };

    fetchTopRankedSalons();
  }, []);

*/ }

// Static data for top-ranked salons
const topRankedSalons = [
  {
    id: 1,
    image: "/images/front-pages/salon1.PNG",
    name: "Luxury Spa & Salon",
    rating: 4.8,
    location: "New York, USA",
    type: "Spa",
  },
  {
    id: 2,
    image: "/images/front-pages/salon2.PNG",
    name: "Glamour Beauty Lounge",
    rating: 4.5,
    location: "Paris, France",
    type: "Beauty Salon",
  },
  {
    id: 3,
    image: "/images/front-pages/salon3.PNG",
    name: "Royal Hair Studio",
    rating: 4.7,
    location: "London, UK",
    type: "Hair Salon",
  },
  {
    id: 4,
    image: "/images/front-pages/salon4.PNG",
    name: "Serenity Hotel Spa",
    rating: 4.9,
    location: "Dubai, UAE",
    type: "Hotel Spa",
  },
];

const TopRated: React.FC = () => {
  return (
    <Box
      className="fp-team-area"
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
         
         mt :-5,
        }}
      >
        <div className="section-title text-left">
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "14px", md: "18px", lg: "24px", xl: "28px" },
              mt :-10,
              mb: 5,
            }}
          >
            Our Top-Rated Salons
          </Typography>
        </div>

        <Swiper
          spaceBetween={25}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            540: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          modules={[Pagination]}
          className="fp-team-slides"
        >
          {topRankedSalons.map((salon) => (
            <SwiperSlide key={salon.id}>
              <Link href={`/salons/${salon.id}`} passHref>
                <Box
                  sx={{
                    border: "1px solid #e0e0e0",
                    borderRadius: "10px",
                    overflow: "hidden",
                    textAlign: "center",
                    backgroundColor: "background.paper",
                    cursor: "pointer", // Add pointer cursor
                    transition: "transform 0.2s, box-shadow 0.2s",
                    "&:hover": {
                      transform: "scale(1.02)", // Slight scale on hover
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", // Add shadow on hover
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: "200px",
                      overflow: "hidden",
                      "&:hover img": {
                        transform: "scale(1.1)", // Zoom in on hover
                      },
                    }}
                  >
                    <Image
                      src={salon.image}
                      alt={salon.name}
                      layout="fill"
                      objectFit="cover"
                      style={{
                        transition: "transform 0.3s ease", // Smooth transition
                      }}
                    />
                  </Box>

                  <Box sx={{ p: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {salon.name}
                    </Typography>

                    <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
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

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mt: 1,
                        color: "text.secondary",
                      }}
                    >
                      <PlaceIcon fontSize="small" />
                      <Typography variant="body2" sx={{ ml: 1 }}>
                        {salon.location}
                      </Typography>
                    </Box>

                    <Chip
                      label={salon.type}
                      sx={{
                        mt: 2,
                        background:
                          "linear-gradient(45deg, #833AB4, #E1306C, #F77737)",
                        color: "white",
                        fontWeight: 600,
                      }}
                    />
                  </Box>
                </Box>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

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
  );
};

export default TopRated;