import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import DogItem from "components/molecules/DogItem";
import IconButton from "@mui/material/IconButton";
import SearchFilter from "components/organisms/SearchFilter";
import customHistory from "common/history";
import SurveyModal from "components/organisms/SurveyModal";
import { useSelector, useDispatch } from "react-redux";
import { setWish } from "store/dog";

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
  padding: 0 20px;
`;
const BannerContents = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  text-align: left;
  color: white;
`;
const BannerText = styled("span")`
  font-size: 2rem;
  margin-top: 14px;
  @media all and (max-width: 1024px) {
    font-size: 1.7rem;
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
const DogType = styled("div")`
  display: flex;
  align-items: center;
  width: 300px;
  @media all and (max-width: 1024px) {
    width: 100%;
    justify-content: center;
  }
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

  @media all and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
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
  margin-bottom: 40px;
  @media all and (max-width: 1024px) {
    flex-direction: column;
    height: 240px;
    background-size: cover;
    align-items: center;
    justify-content: center;
    padding: 0 30px;
  }
`;

const ReSurveyButton = styled(Button)`
  @media all and (max-width: 1024px) {
    display: none;
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

// const goToSurveyPage = () => {
//   customHistory.push(process.env.PUBLIC_URL + "/survey");
// };

const MyPage = () => {
  const dispatch = useDispatch();
  const { aiResult, wish } = useSelector((state) => state.dog);
  const [wishList, setWishList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const openSurvey = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    setWishList(wish);
  }, [wish]);

  return (
    <MyPageContainer>
      <BannerContainer>
        <BannerContents>
          <span style={{ fontSize: "3.3331rem", fontWeight: "bold" }}>
            마이페이지
          </span>
          <BannerText>찜한 유기반려견의 정보를 모아보세요!</BannerText>
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

          {aiResult ? (
            <DogItemContainer>
              {aiResult.map((item, index) => (
                <DogItem data={item} rank={index + 1} />
              ))}
            </DogItemContainer>
          ) : (
            <>
              <span>
                입양자 설문을 완료하면 더 자세한 목록을 볼 수 있습니다.
              </span>
            </>
          )}
        </TextContents>

        <TextContents>
          <span
            style={{
              fontSize: "1.25rem",
              marginBottom: "20px",
              fontWeight: "bold",
            }}
          >
            찜꽁한 유기반려견
          </span>
          <DogItemContainer>
            {wishList.map((dog) => (
              <DogItem data={dog} />
            ))}

            {wishList.length === 0 && (
              <span style={{ margin: "50px", width: "100%" }}>
                찜콩한 유기반려견이 없습니다.
              </span>
            )}
          </DogItemContainer>
        </TextContents>
      </HomeContents>
      <SurveyModal isOpen={isOpen} handleClose={() => setIsOpen(false)} />
    </MyPageContainer>
  );
};

export default MyPage;
