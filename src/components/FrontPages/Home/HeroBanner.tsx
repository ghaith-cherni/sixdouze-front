"use client";

import * as React from "react";
import { Box, Button, Grid } from "@mui/material";
import { useState } from "react";
import DatePickerInput from "@/components/Forms/AdvancedForms/Picker/DatePickerInput";
import TimePickerInput from "@/components/Forms/AdvancedForms/Picker/TimePickerInput";
import MultipleSelect from "@/components/Forms/AdvancedForms/Select/MultipleSelect";
import PositionPicker from "@/components/Forms/AdvancedForms/Picker/PositionPicker";
import dayjs, { Dayjs } from "dayjs";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";


const HeroBanner: React.FC = () => {
  const router = useRouter();

  // State for selected treatments, date, time, and position
  const [selectedTreatments, setSelectedTreatments] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [selectedTime, setSelectedTime] = useState<Dayjs | null>(null);
  const [selectedPosition, setSelectedPosition] = useState<string>("");

  // Handle form submission
  const handleSubmit = async () => {
    // Format the date and time (if selected)
    const formattedDate = selectedDate ? selectedDate.format("YYYY-MM-DD") : "";
    const formattedTime = selectedTime ? selectedTime.format("HH:mm") : "";

    // Prepare the data to send to the API
    const data = {
      treatments: selectedTreatments,
      date: formattedDate,
      time: formattedTime,
      position: selectedPosition,
    };

    try {
      // Send data to the API using Axios
      const response = await axios.post("/api/search-salons", data);

      if (response.status === 200) {
        // Redirect to the results page with the search data
        router.push(
          `/search-results?treatments=${selectedTreatments.join(
            ","
          )}&date=${formattedDate}&time=${formattedTime}&position=${selectedPosition}`
        );
      } else {
        alert("Failed to search for salons. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <Box
      className="fp-banner-area"
      sx={{
        mb: { xs: "60px", sm: "60px", md: "80px", lg: "100px", xl: "150px" },
         marginBottom: "-50px",
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
            marginTop: "-30px",
          }}
        >
          <h1>Find The Best Beauty Salons Near You</h1>

          <Box
            className="fp-banner-content"
            sx={{
              mx: "auto",
              textAlign: "center",
              background: "rgba(255, 255, 255, 0.2)", // Semi-transparent white
              backdropFilter: "blur(10px)", // Blur effect
              borderRadius: "20px", // Rounded corners
              padding: "10px", // Add some padding
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", // Subtle shadow
              border: "2px solid rgba(255, 255, 255, 0.51)", // Light border 
              paddingBottom: "-30px"
              }}
              >
          <Grid
            container
            spacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
          >
            <Grid item xs={12} md={12} lg={12} xl={3}>
              <MultipleSelect
                selectedTreatments={selectedTreatments}
                setSelectedTreatments={setSelectedTreatments}
              />
            </Grid>

            <Grid item xs={12} md={12} lg={12} xl={3}>
              <DatePickerInput
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />
            </Grid>

            <Grid item xs={12} md={12} lg={12} xl={3}>
              <TimePickerInput
                selectedTime={selectedTime}
                setSelectedTime={setSelectedTime}
              />
            </Grid>

            <Grid item xs={12} md={12} lg={12} xl={3}>
              <PositionPicker
                selectedPosition={selectedPosition}
                setSelectedPosition={setSelectedPosition}
              />
            </Grid>
          </Grid>

          {/* Submit Button */}
          <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{
            mt: 3,
            background: "linear-gradient(45deg,rgb(120, 82, 146),rgb(218, 80, 126),rgb(203, 129, 92))",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            textTransform: "none",
            fontSize: "16px",
            transition: "transform 0.2s, box-shadow 0.2s",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
            },
          }}
        >
          Search
        </Button>
        </Box>
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
  );
};

export default HeroBanner;