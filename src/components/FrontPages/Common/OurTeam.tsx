"use client";

import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const OurTeam: React.FC = () => {
  return (
    <>
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
          }}
        >
          <div className="section-title text-center">
            <div className="sub-title">
              <span className="text-purple">Our Team</span>
            </div>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "24px", md: "28px", lg: "34px", xl: "36px" },
              }}
            >
              Introducing Our Exceptional Team. Meet the Minds Driving Our
              Success
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
            <SwiperSlide>
              <div className="fp-single-team-member">
                <div className="image border-radius">
                  <Image
                    src="/images/front-pages/team1.jpg"
                    className="border-radius"
                    alt="team-image"
                    width={570}
                    height={570}
                  />
                </div>

                <div className="content border-radius">
                  <div>
                    <h3>Michael Johnson</h3>
                    <span className="d-block">CEO</span>
                  </div>

                  <div className="socials">
                    <a href="#" target="_blank">
                      <i className="ri-facebook-fill"></i>
                    </a>
                    <a href="#" target="_blank">
                      <i className="ri-twitter-x-fill"></i>
                    </a>
                    <a href="#" target="_blank">
                      <i className="ri-linkedin-fill"></i>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="fp-single-team-member">
                <div className="image border-radius">
                  <Image
                    src="/images/front-pages/team2.jpg"
                    className="border-radius"
                    alt="team-image"
                    width={570}
                    height={570}
                  />
                </div>
                <div className="content border-radius">
                  <div>
                    <h3>Emily Davis</h3>
                    <span className="d-block">Project Manager</span>
                  </div>
                  <div className="socials">
                    <a href="#" target="_blank">
                      <i className="ri-facebook-fill"></i>
                    </a>
                    <a href="#" target="_blank">
                      <i className="ri-twitter-x-fill"></i>
                    </a>
                    <a href="#" target="_blank">
                      <i className="ri-linkedin-fill"></i>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="fp-single-team-member">
                <div className="image border-radius">
                  <Image
                    src="/images/front-pages/team3.jpg"
                    className="border-radius"
                    alt="team-image"
                    width={570}
                    height={570}
                  />
                </div>
                <div className="content border-radius">
                  <div>
                    <h3>Daniel Lee</h3>
                    <span className="d-block">Sales Team Lead</span>
                  </div>
                  <div className="socials">
                    <a href="#" target="_blank">
                      <i className="ri-facebook-fill"></i>
                    </a>
                    <a href="#" target="_blank">
                      <i className="ri-twitter-x-fill"></i>
                    </a>
                    <a href="#" target="_blank">
                      <i className="ri-linkedin-fill"></i>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="fp-single-team-member">
                <div className="image border-radius">
                  <Image
                    src="/images/front-pages/team4.jpg"
                    className="border-radius"
                    alt="team-image"
                    width={570}
                    height={570}
                  />
                </div>
                <div className="content border-radius">
                  <div>
                    <h3>Olivia John</h3>
                    <span className="d-block">Frontend Lead</span>
                  </div>
                  <div className="socials">
                    <a href="#" target="_blank">
                      <i className="ri-facebook-fill"></i>
                    </a>
                    <a href="#" target="_blank">
                      <i className="ri-twitter-x-fill"></i>
                    </a>
                    <a href="#" target="_blank">
                      <i className="ri-linkedin-fill"></i>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
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
    </>
  );
};

export default OurTeam;
