import React from "react";
import styled from "@emotion/styled";

const DogItemContainer = styled("div")`
  display: flex;
  flex-direction: column;
  border-radius: 9px;
  height: 300px;
  /* width: 260px; */
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  overflow: hidden;
  margin-bottom: 20px;
`;

const DogImage = styled("img")`
  display: flex;
  width: 100%;
  height: 60%;
  background-color: #aeaeae;
`;
const DogData = styled("div")`
  display: flex;
  flex-direction: column;
  color: #748482;
  font-size: 14px;
  padding: 8px 15px;
`;
const Name = styled("div")`
  font-size: 18px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 6px;
`;

const DogItem = () => {
  return (
    <DogItemContainer>
      <DogImage
        src={
          "http://www.animal.go.kr/files/shelter/2022/04/202207031107693_s.jpg"
        }
      />
      <DogData>
        <Name>말티즈</Name>
        <span>2021(년생) 추정</span>
        <span>흰색 / 4.4(Kg) / M</span>
        <span>Y / 목줄없고 온순함.</span>
      </DogData>
    </DogItemContainer>
  );
};

export default DogItem;
