import * as React from "react"; 
import NextLink from 'next/link'; 
import { Grid } from "@mui/material"; 
import ContinuousSlider from "@/components/UiKit/Slider/ContinuousSlider";
import SliderSizes from "@/components/UiKit/Slider/SliderSizes";
import DiscreteSlider from "@/components/UiKit/Slider/DiscreteSlider";
import DiscreteSliderSteps from "@/components/UiKit/Slider/DiscreteSliderSteps";
import DiscreteSliderMarks from "@/components/UiKit/Slider/DiscreteSliderMarks";
import DiscreteSliderValues from "@/components/UiKit/Slider/DiscreteSliderValues";
import DiscreteSliderLabel from "@/components/UiKit/Slider/DiscreteSliderLabel";
import RangeSlider from "@/components/UiKit/Slider/RangeSlider";
import MinimumDistanceSlider from "@/components/UiKit/Slider/MinimumDistanceSlider";
import CustomizedSlider from "@/components/UiKit/Slider/CustomizedSlider";
import VerticalSlider from "@/components/UiKit/Slider/VerticalSlider";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-card">
        <h5>Slider</h5>

        <ul className="breadcrumb">
          <li>
            <NextLink href="/dashboard/ecommerce/">
              <i className="material-symbols-outlined">home</i>
              Dashboard
            </NextLink>
          </li>
          <li>UI Elements</li>
          <li>Slider</li>
        </ul>
      </div>

      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
        <Grid item xs={12} md={6} lg={6} xl={6}>
          <ContinuousSlider />

          <DiscreteSlider />

          <DiscreteSliderMarks />

          <DiscreteSliderLabel />

          <MinimumDistanceSlider />
          
          <VerticalSlider />
        </Grid>

        <Grid item xs={12} md={6} lg={6} xl={6}>
          <SliderSizes />

          <DiscreteSliderSteps />

          <DiscreteSliderValues />

          <RangeSlider />

          <CustomizedSlider />
        </Grid>
      </Grid>
    </>
  );
}
