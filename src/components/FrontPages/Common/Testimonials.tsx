"use client";

import * as React from "react";
import { Grid, Box, Typography } from "@mui/material";
import Image from "next/image";

const Testimonials: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          pb: { xs: "60px", sm: "70px", md: "80px", lg: "100px", xl: "120px" },
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
              <span className="text-purple">Testimonials</span>
            </div>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "24px", md: "28px", lg: "34px", xl: "36px" },
              }}
            >
              Inspiring Feedback: What Users Love About Trezo Dashboard
            </Typography>
          </div>

          <Grid
            container
            alignItems="center"
            columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
          >
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
              <div className="fp-single-testimonial-item bg-white border-radius">
                <div className="ratings">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>

                <p>
                  Trezo Dashboard Template has transformed how we manage our
                  data. Its intuitive design and customizable features have
                  streamlined our analytics process, enabling us to make
                  informed decisions faster than ever before.
                </p>

                <div className="info">
                  <Image
                    src="/images/front-pages/user1.jpg"
                    className="rounded-circle"
                    alt="user-image"
                    width={50}
                    height={50}
                  />
                  <div>
                    <h5>Sarah Thompson</h5>
                    <span>Data Analyst</span>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
              <div className="fp-single-testimonial-item bg-white border-radius">
                <div className="ratings">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-half-fill"></i>
                </div>

                <p>
                  As a developer, I appreciate the flexibility and robustness of
                  Trezo Dashboard Template. It offers a wide range of features
                  that cater to our diverse needs, and its clean codebase has
                  made customization a breeze. Highly recommended!
                </p>

                <div className="info">
                  <Image
                    src="/images/front-pages/user2.jpg"
                    className="rounded-circle"
                    alt="user-image"
                    width={50}
                    height={50}
                  />
                  <div>
                    <h5>John Smith</h5>
                    <span>Software Engineer</span>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
              <div className="fp-single-testimonial-item bg-white border-radius">
                <div className="ratings">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-line"></i>
                </div>

                <p>
                  Trezo Dashboard Template has been a lifesaver for our
                  organization. It's helped us streamline our reporting
                  processes and communicate insights effectively across
                  departments. The time saved has allowed us to focus more on
                  strategic initiatives.
                </p>

                <div className="info">
                  <Image
                    src="/images/front-pages/user3.jpg"
                    className="rounded-circle"
                    alt="user-image"
                    width={50}
                    height={50}
                  />
                  <div>
                    <h5>Alex Rodriguez</h5>
                    <span>Marketing Director</span>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
              <div className="fp-single-testimonial-item bg-white border-radius">
                <div className="ratings">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-half-fill"></i>
                  <i className="ri-star-line"></i>
                </div>

                <p>
                  I can't recommend the Trezo Template enough. It's helped us
                  gain a deeper understanding of our business metrics and
                  identify areas for improvement. The responsive support team is
                  a bonus, we are always ready to assist whenever needed.
                </p>

                <div className="info">
                  <Image
                    src="/images/front-pages/user4.jpg"
                    className="rounded-circle"
                    alt="user-image"
                    width={50}
                    height={50}
                  />
                  <div>
                    <h5>Kevin Brown</h5>
                    <span>Jessica Martinez</span>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
              <div className="fp-single-testimonial-item bg-white border-radius">
                <div className="ratings">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>

                <p>
                  Using Trezo Dashboard Template has been a game-changer for our
                  team. The ability to customize widgets to suit our specific
                  needs has allowed us to gain deeper insights into our
                  performance metrics and drive business growth.
                </p>

                <div className="info">
                  <Image
                    src="/images/front-pages/user5.jpg"
                    className="rounded-circle"
                    alt="user-image"
                    width={50}
                    height={50}
                  />
                  <div>
                    <h5>Olivia Adams</h5>
                    <span>Marketing Coordinator</span>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
              <div className="fp-single-testimonial-item bg-white border-radius">
                <div className="ratings">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-line"></i>
                  <i className="ri-star-line"></i>
                </div>

                <p>
                  As a startup, we needed a dashboard solution that was both
                  powerful and cost-effective. Trezo Dashboard Template checked
                  all the boxes for us. It's helped us stay agile and
                  competitive in a fast-paced market.
                </p>

                <div className="info">
                  <Image
                    src="/images/front-pages/user6.jpg"
                    className="rounded-circle"
                    alt="user-image"
                    width={50}
                    height={50}
                  />
                  <div>
                    <h5>Daniel Lee</h5>
                    <span>Co-founder, StartupX</span>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Testimonials;
