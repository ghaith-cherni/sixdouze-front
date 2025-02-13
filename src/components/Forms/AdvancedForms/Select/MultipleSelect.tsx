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
  Checkbox,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Hair & styling",
  "Eyebrows & eyelashes",
  "Massage",
  "Nails",
  "Aromatherapy Massage",
];

interface MultipleSelectProps {
  selectedTreatments: string[];
  setSelectedTreatments: (treatments: string[]) => void;
}

const MultipleSelect: React.FC<MultipleSelectProps> = ({
  selectedTreatments,
  setSelectedTreatments,
}) => {
  const handleChange = (event: SelectChangeEvent<typeof selectedTreatments>) => {
    const {
      target: { value },
    } = event;
    setSelectedTreatments(
      typeof value === "string" ? value.split(",") : value
    );
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
        Choose your Treatments
      </Typography>

      <FormControl fullWidth>
        <InputLabel id="demo-multiple-checkbox-label">Treatments</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={selectedTreatments}
          onChange={handleChange}
          input={<OutlinedInput label="Treatments" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
          sx={{
            "& fieldset": {
              border: "1px solid #D5D9E2",
              borderRadius: "7px",
            },
          }}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={selectedTreatments.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default MultipleSelect;