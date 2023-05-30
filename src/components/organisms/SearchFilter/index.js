import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import SelectLabels from "components/atoms/SelectLabels";
import Button from "@mui/material/Button";

const SearchFilterContainer = styled("div")`
  display: flex;
  flex-direction: column;
  padding: 40px 30px;
  background: #f4f2f7;
  margin: 40px 0;
  border-radius: 6px;
`;
const SelectWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 80%;
  @media all and (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;
const RowBox = styled("div")`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media all and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;
const FilterItemButtonWrapper = styled("div")`
  display: flex;
  width: 80%;
`;
const FilterItemButton = styled(Button)`
  margin-right: 20px;
  padding: 6px 25px;
  border-radius: 16px;
`;
const SearchButton = styled(Button)`
  @media all and (max-width: 1024px) {
    margin-top: 20px;
    width: 100%;
  }
`;

const SearchFilter = ({ changeFilter }) => {
  const [gender, setGender] = useState("");
  const [size, setSize] = useState("");
  const [age, setAge] = useState("");
  const [color, setColor] = useState("");
  const [personality, setPersonality] = useState("");

  const handleGender = (event) => {
    setGender(event.target.value);
  };

  const handleSize = (event) => {
    setSize(event.target.value);
  };
  const handleAge = (event) => {
    setAge(event.target.value);
  };
  const handleColor = (event) => {
    setColor(event.target.value);
  };
  const handlePersonality = (event) => {
    setPersonality(event.target.value);
  };

  // useEffect(() => {
  //   changeFilter({
  //     gender,
  //     size,
  //     age,
  //     color,
  //     personality,
  //   });
  // }, [gender, size, age, color, personality]);

  const handleInitFilter = () => {
    setGender("");
    setSize("");
    setAge("");
    setColor("");
    setPersonality("");
    changeFilter({
      gender: "",
      size: "",
      age: "",
      color: "",
      personality: "",
    });
  };

  const handleSearch = () => {
    changeFilter({
      gender,
      size,
      age,
      color,
      personality,
    });
  };

  return (
    <SearchFilterContainer>
      <RowBox>
        <SelectWrapper>
          <SelectLabels
            value={gender}
            handleChange={handleGender}
            label={"성별"}
            items={["M", "F"]}
          />
          <SelectLabels
            value={size}
            handleChange={handleSize}
            label={"크기"}
            items={["1~3kg", "4~6kg", "7kg 이상"]}
          />
          <SelectLabels
            value={age}
            handleChange={handleAge}
            label={"나이"}
            items={["2019이하", "2020", "2021", "2022"]}
          />
          <SelectLabels
            value={color}
            handleChange={handleColor}
            label={"색상"}
            items={["검정", "흰색", "갈색", "무늬/멀티"]}
          />
          <SelectLabels
            value={personality}
            handleChange={handlePersonality}
            label={"성격"}
            items={["온순", "상관없음"]}
          />
        </SelectWrapper>
        <SearchButton onClick={handleSearch} sx={{ width: "160px" }}>
          검색
        </SearchButton>
      </RowBox>

      <RowBox style={{ marginTop: "20px" }}>
        <FilterItemButtonWrapper>
          {gender && (
            <FilterItemButton
              onClick={() => setGender("")}
              endIcon={<div stlye={{ fontSize: "1.25rem" }}>×</div>}
            >
              {gender}
            </FilterItemButton>
          )}
          {size && (
            <FilterItemButton
              onClick={() => setSize("")}
              endIcon={<div stlye={{ fontSize: "1.25rem" }}>×</div>}
            >
              {size}
            </FilterItemButton>
          )}
          {age && (
            <FilterItemButton
              onClick={() => setAge("")}
              endIcon={<div stlye={{ fontSize: "1.25rem" }}>×</div>}
            >
              {age}
            </FilterItemButton>
          )}
          {color && (
            <FilterItemButton
              onClick={() => setColor("")}
              endIcon={<div stlye={{ fontSize: "1.25rem" }}>×</div>}
            >
              {color}
            </FilterItemButton>
          )}
          {personality && (
            <FilterItemButton
              onClick={() => setPersonality("")}
              endIcon={<div stlye={{ fontSize: "1.25rem" }}>×</div>}
            >
              {personality}
            </FilterItemButton>
          )}
        </FilterItemButtonWrapper>

        <Button
          endIcon={
            <img
              src="/img/icons/reset.png"
              style={{ width: "18px", height: "18px", opacity: "0.75" }}
              alt=""
            />
          }
          sx={{ color: "#828282" }}
          variant="text"
          onClick={handleInitFilter}
        >
          설정 초기화
        </Button>
      </RowBox>
    </SearchFilterContainer>
  );
};

export default SearchFilter;
