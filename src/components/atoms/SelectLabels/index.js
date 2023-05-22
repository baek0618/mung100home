import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import styled from "@emotion/styled";

const SelectContainer = styled("div")`
  display: flex;
  flex-direction: column;
  color: #3f3f3f;
`;
const LabelText = styled("div")`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const SelectLabels = ({ value, handleChange, label, items }) => {
  return (
    <SelectContainer>
      <LabelText>{label}</LabelText>
      <Select
        id={label}
        sx={{ width: "160px", color: "#333333" }}
        value={value}
        onChange={handleChange}
        defaultValue={""}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {items.map((item) => (
          <MenuItem value={item}>{item}</MenuItem>
        ))}
      </Select>
    </SelectContainer>
  );
};

export default SelectLabels;
