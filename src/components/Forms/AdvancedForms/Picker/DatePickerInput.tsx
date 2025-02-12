"use client";

import React from "react";
import { Typography, Box } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";

interface DatePickerInputProps {
  selectedDate: Dayjs | null;
  setSelectedDate: (date: Dayjs | null) => void;
}

const DatePickerInput: React.FC<DatePickerInputProps> = ({
  selectedDate,
  setSelectedDate,
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
        Pick A Date
      </Typography>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          value={selectedDate}
          onChange={(newValue) => setSelectedDate(newValue)}
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

export default DatePickerInput;