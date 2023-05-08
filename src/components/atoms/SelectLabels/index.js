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

const SelectLabels = ({ label }) => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <SelectContainer>
      <LabelText>{label}</LabelText>
      <Select
        sx={{ width: "160px", color: "#333333" }}
        value={age}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </SelectContainer>
  );
};

export default SelectLabels;
