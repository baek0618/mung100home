import React from "react";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import DogItem from "components/molecules/DogItem";
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
  height: 560px;
  background-color: tan;
  background: url("./img/SearchBanner.png") no-repeat;
  background-size: cover;
`;
const BannerContents = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  text-align: center;
  color: white;
  align-items: center;
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
  margin-top: 40px;
  position: relative;
`;
const MyDogText = styled("div")`
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  color: white;
`;

const SurveyComplete = () => {
  return (
    <MyPageContainer>
      <BannerContainer>
        <BannerContents>
          <span style={{ fontSize: "55pt", fontWeight: "bold" }}>
            당신에게 딱 맞는
            <br />
            유기 반려견을 찾아보세요!
          </span>
          <span style={{ fontSize: "26px", marginTop: "14px" }}>
            유기견에게 새로운 우주를 찾아주기 위한 입양자 설문을 시작해볼까요?
          </span>
          <Button
            sx={{
              fontSize: "72px",
              fontWeight: "1000",
              background: "white",
              color: "#5f49a6",
              width: "380px",
              padding: "0px 100px",
              mt: "60px",
              ":hover": {
                color: "white",
              },
            }}
          >
            Start!
          </Button>
        </BannerContents>
      </BannerContainer>
      <HomeContents>
        {/* page head */}

        {/* contents */}
        <TextContents style={{ borderTop: "none" }}>
          <TextTitle>유기반려견 찾기</TextTitle>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>설문 결과를 기반으로 딱 맞는 유기반려견을 찾아보세요!</span>
          </div>

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

          <span
            style={{
              fontSize: "20px",
              marginTop: "30px",
              marginBottom: "20px",
              fontWeight: "bold",
            }}
          >
            나와 딱 맞는 유기반려견 Top 4
          </span>
          <DogItemContainer>
            <DogItem rank={1} />
            <DogItem rank={2} />
            <DogItem rank={3} />
            <DogItem rank={4} />
          </DogItemContainer>

          <SearchFilter />

          <DogItemContainer>
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

export default SurveyComplete;
