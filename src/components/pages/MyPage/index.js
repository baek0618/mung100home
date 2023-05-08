import React from "react";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import DogItem from "components/molecules/DogItem";
import IconButton from "@mui/material/IconButton";
import SearchFilter from "components/organisms/SearchFilter";

const MyPageContainer = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;
const BannerContainer = styled("div")`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 300px;
  background-color: tan;
  background: url("./img/SearchBanner.png") no-repeat;
  background-size: cover;
`;
const BannerContents = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  text-align: left;
  color: white;
`;

const HomeContents = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;
const TextContents = styled("div")`
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  border-top: 1px solid #c8c8c8;
  color: #3f3f3f;
  font-size: 18px;
`;
const TextTitle = styled("span")`
  margin-bottom: 20px;
  font-size: 37px;
  font-weight: bold;
`;
const DogType = styled("div")`
  display: flex;
  align-items: center;
  width: 300px;
`;
const DogImage = styled("img")`
  height: 100px;
  object-fit: contain;
  margin-right: 20px;
`;
const DogName = styled("div")`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;
const DogItemContainer = styled("div")`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 4%;
  grid-row-gap: 20px;
`;

const MyDogType = styled("div")`
  width: 100%;
  border-radius: 20px;
  padding: 0 50px;
  background: url("./img/after_page.png") no-repeat;
  height: 170px;
  display: flex;
  align-items: center;
  position: relative;
`;
const MyDogText = styled("div")`
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  color: white;
`;

const MyPage = () => {
  return (
    <MyPageContainer>
      <BannerContainer>
        <BannerContents>
          <span style={{ fontSize: "40pt", fontWeight: "bold" }}>
            마이페이지
          </span>
          <span style={{ fontSize: "24pt", marginTop: "14px" }}>
            찜한 유기반려견의 정보를 모아보세요!
          </span>
        </BannerContents>
      </BannerContainer>
      <HomeContents>
        {/* page head */}

        {/* contents */}
        <TextContents style={{ borderTop: "none" }}>
          <TextTitle>나의 멍BTI</TextTitle>
          <MyDogType>
            <DogType>
              <DogImage src="./img/bti1.png" alt="" />
              <DogName>만능 멍멍이</DogName>
            </DogType>
            <MyDogText>
              <DogName>
                당신과 잘 맞는 '만능 멍멍이' 유형의 강아지를 만나보세요!
              </DogName>
              <span style={{ marginTop: "8px" }}>
                아래 목록은 설문결과가 반영된 목록입니다.
              </span>
            </MyDogText>
            <Button
              variant="text"
              style={{
                justifySelf: "flex-end",
                alignSelf: "flex-end",
                position: "absolute",
                right: "30px",
                fontSize: "14px",
                marginBottom: "5px",
              }}
            >
              <span style={{ color: "white" }}>{`진단 다시 받기 >`}</span>
            </Button>
          </MyDogType>
        </TextContents>

        <TextContents>
          <span
            style={{
              fontSize: "20px",
              marginBottom: "20px",
              fontWeight: "bold",
            }}
          >
            찜꽁한 유기반려견
          </span>
          <DogItemContainer>
            <DogItem />
            <DogItem />
            <DogItem />
            <DogItem />
            <DogItem />
            <DogItem />
            <DogItem />
            <DogItem />
            <DogItem />
            <DogItem />
            <DogItem />
          </DogItemContainer>
        </TextContents>
      </HomeContents>
    </MyPageContainer>
  );
};

export default MyPage;
