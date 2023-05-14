import React from "react";
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
`;
const RowBox = styled("div")`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
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

const SearchFilter = () => {
  return (
    <SearchFilterContainer>
      <RowBox>
        <SelectWrapper>
          <SelectLabels label={"성별"} />
          <SelectLabels label={"크기"} />
          <SelectLabels label={"나이"} />
          <SelectLabels label={"색상"} />
          <SelectLabels label={"성격"} />
        </SelectWrapper>
        <Button sx={{ width: "160px" }}>검색</Button>
      </RowBox>

      <RowBox style={{ marginTop: "20px" }}>
        <FilterItemButtonWrapper>
          <FilterItemButton>test</FilterItemButton>
          <FilterItemButton>test</FilterItemButton>
        </FilterItemButtonWrapper>
        <Button
          endIcon={
            <img
              src="./img/icons/reset.png"
              style={{ width: "20px", height: "20px" }}
              alt=""
            />
          }
          sx={{ color: "#828282" }}
          variant="text"
        >
          설정 초기화
        </Button>
      </RowBox>
    </SearchFilterContainer>
  );
};

export default SearchFilter;
