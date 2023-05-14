import React from "react";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import DogItem from "components/molecules/DogItem";
import IconButton from "@mui/material/IconButton";
import SearchFilter from "components/organisms/SearchFilter";
import Pagination from "@mui/material/Pagination";

const SearchContainer = styled("div")`
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

const DogTypeWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  padding: 40px 0;
  margin-top: 20px;
`;
const DogType = styled("div")`
  width: 300px;
  background: white;
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 26px;
  box-shadow: 0 0 4px 0px gray;
`;
const DogImage = styled("img")`
  width: 55%;
  height: 85%;
  object-fit: contain;
`;
const DogName = styled("div")`
  color: #3f3f3f;
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
`;

const DogItemContainer = styled("div")`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 4%;
`;

const SurveyButton = styled(Button)`
  width: 200px;
  margin-top: 20px;
  border-radius: 24px;
  padding: 16px;
`;

const AdoptionButtonWrapper = styled("div")`
  display: flex;
  flex-wrap: wrap;
  margin-top: 25px;
  justify-content: space-between;
`;
const AdoptionInfoButton = styled(Button)`
  width: 30%;
  font-weight: bold;
  font-size: 19px;
`;
const PaginationWrapper = styled("div")`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const CustomPagination = styled(Pagination)`
  margin-top: 50px;
`;

const Search = () => {
  return (
    <SearchContainer>
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
          <TextTitle>멍bti 유형이란?</TextTitle>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>
              입양자 설문을 통해 입력해주신 정보를 토대로 알맞은 강아지 유형을
              안내드립니다.
              <br />
              설문을 완료하신 후, 아래 유형을 눌러 특징을 확인해보세요!
            </span>
            <Button
              variant="text"
              sx={{ p: "5px 20px" }}
              endIcon={<img src="./img/icons/recom_arrow.png" alt="" />}
            >
              <span style={{ color: "#5f49a6", textDecoration: "underline" }}>
                입양자 설문하러가기
              </span>
            </Button>
          </div>

          <DogTypeWrapper>
            <DogType>
              <DogImage src="./img/bti1.png" alt="" />
              <DogName>만능 멍멍이</DogName>
            </DogType>
            <DogType>
              <DogImage src="./img/bti2.png" alt="" />
              <DogName>나랑 같이 뛸래?</DogName>
            </DogType>
            <DogType>
              <DogImage src="./img/bti3.png" alt="" />
              <DogName>손길이 필요해</DogName>
            </DogType>
          </DogTypeWrapper>
        </TextContents>

        <TextContents>
          <TextTitle>유기반려견 찾기</TextTitle>
          <span>입양자 설문을 완료하면 더 자세한 목록을 볼 수 있습니다.</span>
          <SurveyButton>설문 START</SurveyButton>

          <SearchFilter />

          <DogItemContainer>
            <DogItem />
            <DogItem />
            <DogItem />
            <DogItem />
            <DogItem />
            <DogItem />
          </DogItemContainer>
          <PaginationWrapper>
            <CustomPagination
              shape={"circular"}
              variant="outlined"
              count={10}
              color="primary"
            />
          </PaginationWrapper>
        </TextContents>

        <TextContents>
          <TextTitle>입양정보</TextTitle>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>입양하기 전 꼭 확인해야할 입양 정보를 확인하세요.</span>
            <Button variant="text" sx={{ p: "5px 20px" }}>
              <span style={{ color: "#5f49a6", textDecoration: "underline" }}>
                더 자세한 정보 보기
              </span>
            </Button>
          </div>

          <AdoptionButtonWrapper>
            <AdoptionInfoButton style={{ color: "#5f49a6" }} variant="outlined">
              나와 맞는 강아지 찾기
            </AdoptionInfoButton>
            <AdoptionInfoButton style={{ color: "#5f49a6" }} variant="outlined">
              입양 전 고려할 것
            </AdoptionInfoButton>
            <AdoptionInfoButton style={{ color: "#5f49a6" }} variant="outlined">
              보호소를 통한 입양과정
            </AdoptionInfoButton>
          </AdoptionButtonWrapper>

          <AdoptionButtonWrapper>
            <AdoptionInfoButton style={{ color: "#5f49a6" }} variant="outlined">
              필요한 물품
            </AdoptionInfoButton>
            <AdoptionInfoButton style={{ color: "#5f49a6" }} variant="outlined">
              입양 후 과정
            </AdoptionInfoButton>
            <span style={{ width: "30%" }} />
          </AdoptionButtonWrapper>
        </TextContents>
      </HomeContents>
    </SearchContainer>
  );
};

export default Search;
