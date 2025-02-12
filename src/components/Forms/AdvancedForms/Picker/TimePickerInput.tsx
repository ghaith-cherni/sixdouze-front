"use client";

import React from "react";
import { Typography, Box } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { Dayjs } from "dayjs";

interface TimePickerInputProps {
  selectedTime: Dayjs | null;
  setSelectedTime: (time: Dayjs | null) => void;
}

const TimePickerInput: React.FC<TimePickerInputProps> = ({
  selectedTime,
  setSelectedTime,
}) => {
  return (
    <Box>
      <Typography
        component="h5"
        sx={{
          fontWeight: "500",
          fontSize: "14px",
          mb: "15px",
        }}
        className="text-black"
      >
        Pick A Time
      </Typography>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker
          value={selectedTime}
          onChange={(newValue) => setSelectedTime(newValue)}
          sx={{
            width: "100%",
            "& fieldset": {
              border: "1px solid #D5D9E2",
              borderRadius: "7px",
            },
          }}
        />
      </LocalizationProvider>
    </Box>
  );
};

export default TimePickerInput;