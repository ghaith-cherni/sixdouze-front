"use client";

import * as React from "react";
import {
  FormControl,
  InputLabel,
  Box,
  Typography,
  MenuItem,
  OutlinedInput,
  ListItemText,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useEffect, useState } from "react";

const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "France",
  "Germany",
  "Australia",
  "Japan",
  "India",
  "Brazil",
  "South Africa",
];

const PositionPicker: React.FC<{
  selectedPosition: string;
  setSelectedPosition: (position: string) => void;
}> = ({ selectedPosition, setSelectedPosition }) => {
  const [currentLocation, setCurrentLocation] = useState<string>("");

  // Get the user's current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation(`Lat: ${latitude}, Long: ${longitude}`);
          setSelectedPosition(`Lat: ${latitude}, Long: ${longitude}`);
        },
        (error) => {
          console.error("Error getting location:", error);
          setCurrentLocation("Unable to get current location");
        }
      );
    } else {
      setCurrentLocation("Geolocation not supported");
    }
  }, [setSelectedPosition]);

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedPosition(event.target.value);
  };

  return (
    <Box>
      <Typography
        component="label"
        sx={{
          fontWeight: "500",
          fontSize: "14px",
          mb: "15px",
          display: "block",
        }}
        className="text-black"
      >
        Choose Your Location
      </Typography>

      <FormControl fullWidth>
        <InputLabel id="position-picker-label">Location</InputLabel>
        <Select
          labelId="position-picker-label"
          id="position-picker"
          value={selectedPosition}
          onChange={handleChange}
          input={<OutlinedInput label="Location" />}
          sx={{
            "& fieldset": {
              border: "1px solid #D5D9E2",
              borderRadius: "7px",
            },
          }}
        >
          {/* Default option: Current Location */}
          <MenuItem value={currentLocation}>
            <ListItemText primary="Current Location" />
          </MenuItem>

          {/* List of countries */}
          {countries.map((country) => (
            <MenuItem key={country} value={country}>
              <ListItemText primary={country} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default PositionPicker;