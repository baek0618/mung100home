import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import DogItem from "components/molecules/DogItem";
import SearchFilter from "components/organisms/SearchFilter";
import Pagination from "@mui/material/Pagination";
import customHistory from "common/history";
import dummy from "common/db.json";
import SurveyModal from "components/organisms/SurveyModal";
import { useSelector, useDispatch } from "react-redux";

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
  background: url("/img/SearchBanner.png") no-repeat;
  background-size: cover;
  padding: 0 20px;
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
const BannerTitle = styled("div")`
  font-size: 4.5831rem;
  font-weight: bold;
  @media all and (max-width: 1024px) {
    font-size: 2.6rem;
  }
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
  @media all and (max-width: 1024px) {
    padding: 25px 20px;
  }
`;
const TextTitle = styled("span")`
  margin-bottom: 20px;
  font-size: 2.313rem;
  font-weight: bold;
`;

const DogTypeWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  padding: 40px 0;
  margin-top: 20px;
  @media all and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
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

  @media all and (max-width: 1024px) {
    width: 200px;
    height: 200px;
    margin-bottom: 20px;
  }
`;
const MyDogType = styled("div")`
  width: 100%;
  border-radius: 20px;
  padding: 0 50px;
  background: url("/img/after_page.png") no-repeat;
  height: 170px;
  display: flex;
  align-items: center;
  margin-top: 40px;
  position: relative;
  margin-bottom: 30px;
  @media all and (max-width: 1024px) {
    flex-direction: column;
    height: 240px;
    background-size: cover;
    align-items: center;
    justify-content: center;
    padding: 0 30px;
  }
`;
const MyDogText = styled("div")`
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  color: white;
  @media all and (max-width: 1024px) {
    padding-left: 0px;
    margin-top: 20px;
  }
`;
const ReSurveyButton = styled(Button)`
  @media all and (max-width: 1024px) {
    display: none;
  }
`;
const DogImage = styled("img")`
  width: 55%;
  height: 85%;
  object-fit: contain;
`;
const DogName = styled("div")`
  color: #3f3f3f;
  font-size: 1.125rem;
  font-weight: bold;
  margin-top: 20px;
`;

const DogItemContainer = styled("div")`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 4%;
  grid-row-gap: 20px;

  @media all and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
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
  font-size: 1.188rem;
  @media all and (max-width: 1024px) {
    width: 31%;
    font-size: 0.92rem;
  }
`;
const PaginationWrapper = styled("div")`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const CustomPagination = styled(Pagination)`
  margin-top: 50px;
`;
const GoToSurveyButton = styled(Button)`
  @media all and (max-width: 1024px) {
    display: none;
  }
`;

const AiDogType = styled("div")`
  display: flex;
  align-items: center;
  width: 300px;
  justify-content: center;
`;
const AiDogImage = styled("img")`
  height: 100px;
  object-fit: contain;
  margin-right: 20px;
`;
const AiDogName = styled("div")`
  color: white;
  font-size: 1.25rem;
  font-weight: bold;
`;

const goToInfoPage = () => {
  customHistory.push("/info");
  window.scrollTo(0, 0);
};

const Home = () => {
  const limit = 12;
  const { aiResult } = useSelector((state) => state.dog);
  const [db, setDb] = useState(dummy);
  const [page, setPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const openSurvey = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    setCurrentItems(db.slice(0 + (page - 1) * limit, page * limit));
  }, [page, db]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleFilterState = (newState) => {
    let newDb = [...dummy];
    Object.keys(newState).forEach((filterKey) => {
      let targetValue;
      if (newState[filterKey] !== "") {
        switch (filterKey) {
          case "gender":
            targetValue = newState[filterKey];
            newDb = newDb.filter((dogData) => dogData["성별"] === targetValue);
            break;
          case "size":
            targetValue = newState[filterKey];
            switch (targetValue) {
              case "1~3kg":
                newDb = newDb.filter(
                  (dogData) => dogData["체중"].replaceAll("(Kg)", "") < "4"
                );
                break;
              case "4~6kg":
                newDb = newDb.filter(
                  (dogData) =>
                    dogData["체중"].replaceAll("(Kg)", "") >= "4" &&
                    dogData["체중"].replaceAll("(Kg)", "") < "7"
                );
                break;
              case "7kg 이상":
                newDb = newDb.filter(
                  (dogData) => dogData["체중"].replaceAll("(Kg)", "") >= "7"
                );
                break;
              default:
                break;
            }
            break;
          case "age":
            targetValue = newState[filterKey].toString();
            switch (targetValue) {
              case "2019이하":
                newDb = newDb.filter(
                  (dogData) =>
                    dogData["나이"].replaceAll("(년생)", "") <= "2019"
                );
                break;
              case "2020":
                newDb = newDb.filter(
                  (dogData) =>
                    dogData["나이"].replaceAll("(년생)", "").toString() ===
                    "2020"
                );
                break;
              case "2021":
                newDb = newDb.filter(
                  (dogData) =>
                    dogData["나이"].replaceAll("(년생)", "").toString() ===
                    "2021"
                );
                break;
              case "2022":
                newDb = newDb.filter(
                  (dogData) =>
                    dogData["나이"].replaceAll("(년생)", "").toString() ===
                    "2022"
                );
                break;
              default:
                break;
            }
            break;

          case "color":
            targetValue = newState[filterKey].toString();
            switch (targetValue) {
              case "검정":
                newDb = newDb.filter((dogData) => dogData["색상"] === "검정");
                break;
              case "흰색":
                newDb = newDb.filter((dogData) => dogData["색상"] === "흰색");
                break;
              case "갈색":
                newDb = newDb.filter((dogData) => dogData["색상"] === "갈색");
                break;
              case "무늬/멀티":
                newDb = newDb.filter(
                  (dogData) =>
                    dogData["색상"] === "무늬" || dogData["색상"].includes("/")
                );
                break;
              default:
                break;
            }
            break;
          case "personality":
            targetValue = newState[filterKey];
            if (targetValue === "온순") {
              newDb = newDb.filter((dogData) =>
                dogData["특징"].includes(targetValue)
              );
            }
            break;
          default:
            break;
        }
      }
    });
    setDb(newDb);
  };

  return (
    <SearchContainer>
      <BannerContainer>
        <BannerContents>
          <BannerTitle>
            당신에게 딱 맞는
            <br />
            유기 반려견을 찾아보세요!
          </BannerTitle>
          <span style={{ fontSize: "1.625rem", marginTop: "14px" }}>
            유기견에게 새로운 우주를 찾아주기 위한 입양자 설문을 시작해볼까요?
          </span>
          <Button
            sx={{
              fontSize: "4.5rem",
              fontWeight: "800",
              background: "white",
              color: "#5f49a6",
              width: "380px",
              maxWidth: "80%",
              padding: "0px 100px",
              fontFamily: `'Poppins', sans-serif`,
              mt: "60px",
              ":hover": {
                color: "white",
              },
            }}
            onClick={openSurvey}
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
            <GoToSurveyButton
              variant="text"
              sx={{ p: "5px 20px" }}
              endIcon={<img src="/img/icons/recom_arrow.png" alt="" />}
              onClick={openSurvey}
            >
              <span style={{ color: "#5f49a6", textDecoration: "underline" }}>
                입양자 설문하러가기
              </span>
            </GoToSurveyButton>
          </div>

          <DogTypeWrapper>
            <DogType>
              <DogImage src="/img/bti1.png" alt="" />
              <DogName>만능 멍멍이</DogName>
            </DogType>
            <DogType>
              <DogImage src="/img/bti2.png" alt="" />
              <DogName>나랑 같이 뛸래?</DogName>
            </DogType>
            <DogType>
              <DogImage src="/img/bti3.png" alt="" />
              <DogName>손길이 필요해</DogName>
            </DogType>
          </DogTypeWrapper>
        </TextContents>

        <TextContents>
          <TextTitle>유기반려견 찾기</TextTitle>

          {aiResult ? (
            <>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>
                  설문 결과를 기반으로 딱 맞는 유기반려견을 찾아보세요!
                </span>
              </div>
              <MyDogType>
                <AiDogType>
                  <AiDogImage src="/img/bti1.png" alt="" />
                  <AiDogName>만능 멍멍이</AiDogName>
                </AiDogType>
                <MyDogText>
                  <AiDogName>
                    당신과 잘 맞는 '만능 멍멍이' 유형의 강아지를 만나보세요!
                  </AiDogName>
                  <span style={{ marginTop: "8px" }}>
                    아래 목록은 설문결과가 반영된 목록입니다.
                  </span>
                </MyDogText>
                <ReSurveyButton
                  variant="text"
                  style={{
                    justifySelf: "flex-end",
                    alignSelf: "flex-end",
                    position: "absolute",
                    right: "30px",
                    fontSize: "0.875rem",
                    marginBottom: "5px",
                  }}
                  onClick={openSurvey}
                >
                  <span style={{ color: "white" }}>{`진단 다시 받기 >`}</span>
                </ReSurveyButton>
              </MyDogType>
              <DogItemContainer>
                {aiResult.map((item, index) => (
                  <DogItem data={item} rank={index + 1} />
                ))}
              </DogItemContainer>
            </>
          ) : (
            <>
              <span>
                입양자 설문을 완료하면 더 자세한 목록을 볼 수 있습니다.
              </span>
              <SurveyButton onClick={openSurvey}>설문 START</SurveyButton>
            </>
          )}

          <SearchFilter changeFilter={handleFilterState} />

          <DogItemContainer>
            {currentItems.map((item) => (
              <DogItem data={item} />
            ))}
          </DogItemContainer>
          <PaginationWrapper>
            <CustomPagination
              shape={"circular"}
              variant="outlined"
              count={Math.round(db.length / 15)}
              color="primary"
              page={page}
              onChange={handlePageChange}
            />
          </PaginationWrapper>
        </TextContents>

        <TextContents>
          <TextTitle>입양정보</TextTitle>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>입양하기 전 꼭 확인해야할 입양 정보를 확인하세요.</span>
            <Button
              variant="text"
              sx={{ p: "5px 20px" }}
              onClick={goToInfoPage}
            >
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
      <SurveyModal isOpen={isOpen} handleClose={() => setIsOpen(false)} />
    </SearchContainer>
  );
};

export default Home;
