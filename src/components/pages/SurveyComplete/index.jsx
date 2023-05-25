import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import DogItem from "components/molecules/DogItem";
import SearchFilter from "components/organisms/SearchFilter";
import Pagination from "@mui/material/Pagination";
import customHistory from "common/history";
import dummy from "common/db.json";

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
  font-size: 1.125rem;
`;
const TextTitle = styled("span")`
  margin-bottom: 20px;
  font-size: 2.313rem;
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
  font-size: 1.25rem;
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
const PaginationWrapper = styled("div")`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const CustomPagination = styled(Pagination)`
  margin-top: 50px;
`;

const goToSurveyPage = () => {
  customHistory.push(process.env.PUBLIC_URL + "/survey");
};

const SurveyComplete = () => {
  const limit = 12;

  const [page, setPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    setCurrentItems(dummy.slice(0 + (page - 1) * limit, page * limit));
  }, [page]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <MyPageContainer>
      <BannerContainer>
        <BannerContents>
          <span style={{ fontSize: "4.5831rem", fontWeight: "bold" }}>
            당신에게 딱 맞는
            <br />
            유기 반려견을 찾아보세요!
          </span>
          <span style={{ fontSize: "1.625rem", marginTop: "14px" }}>
            유기견에게 새로운 우주를 찾아주기 위한 입양자 설문을 시작해볼까요?
          </span>
          <Button
            sx={{
              fontSize: "4.5rem",
              fontWeight: "1000",
              background: "white",
              color: "#5f49a6",
              width: "380px",
              maxWidth: "80%",
              padding: "0px 100px",
              mt: "60px",
              ":hover": {
                color: "white",
              },
            }}
            onClick={goToSurveyPage}
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
                fontSize: "0.875rem",
                marginBottom: "5px",
              }}
              onClick={goToSurveyPage}
            >
              <span style={{ color: "white" }}>{`진단 다시 받기 >`}</span>
            </Button>
          </MyDogType>

          <span
            style={{
              fontSize: "1.25rem",
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

          {/* <DogItemContainer>
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
          </PaginationWrapper> */}

          <DogItemContainer>
            {currentItems.map((item) => (
              <DogItem data={item} />
            ))}
          </DogItemContainer>
          <PaginationWrapper>
            <CustomPagination
              shape={"circular"}
              variant="outlined"
              count={Math.round(dummy.length / 15)}
              color="primary"
              page={page}
              onChange={handlePageChange}
            />
          </PaginationWrapper>
        </TextContents>
      </HomeContents>
    </MyPageContainer>
  );
};

export default SurveyComplete;
