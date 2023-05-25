import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import styled from "@emotion/styled";

const SelectContainer = styled("div")`
  display: flex;
  flex-direction: column;
  color: #3f3f3f;
  width: 160px;
  @media all and (max-width: 1024px) {
    margin-bottom: 20px;
    width: 100%;
  }
`;
const LabelText = styled("div")`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 5px;
`;

const SelectLabels = ({ value, handleChange, label, items }) => {
  return (
    <SelectContainer>
      <LabelText>{label}</LabelText>
      <Select
        id={label}
        sx={{ width: "100%", color: "#333333" }}
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
