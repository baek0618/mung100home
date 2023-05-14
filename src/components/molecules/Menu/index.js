import React from "react";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import customHistory from "common/history";

const HeadContainer = styled("div")`
  display: flex;
  height: 160px;
  width: 100%;
  align-items: center;
  box-shadow: 0px 2px 6px gray, 0px 0px 1px gray;
  z-index: 2;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 10px;
`;
const HeadWrapper = styled("div")`
  display: flex;
  max-width: 1200px;
  width: 100%;
  height: 100%;
`;
const Logo = styled(IconButton)`
  width: 340px;
  height: 80px;
`;
const MenuContainer = styled("div")`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const UserMenuWrapper = styled("div")`
  display: flex;
  height: 30px;
  width: 100%;
  margin-bottom: 10px;
  align-items: center;
  justify-content: flex-end;
`;
const MenuWrapper = styled("div")`
  display: flex;
  height: 50px;
  width: 100%;
  justify-content: flex-end;
`;
const MenuButton = styled(Button)`
  width: 100px;
  height: 100%;
  margin-left: 20px;
  color: #323232;
`;
const Divider = styled("div")`
  width: 1px;
  background-color: #e5e5e5;
  height: 80%;
`;

const goToHomePage = () => {
  customHistory.push(process.env.PUBLIC_URL + `/`);
};

const goToSearchPage = () => {
  customHistory.push(process.env.PUBLIC_URL + "/search");
};

const goToMyPage = () => {
  customHistory.push(process.env.PUBLIC_URL + "/myPage");
};

const goToSurveyCompletePage = () => {
  customHistory.push(process.env.PUBLIC_URL + "/surveyComplete");
};
const goToLoginPage = () => {
  customHistory.push(process.env.PUBLIC_URL + "/login");
};

const Menu = () => {
  return (
    <HeadContainer>
      <HeadWrapper>
        <Logo onClick={goToHomePage}>
          <img src="./img/main_logo.png" alt="logo" style={{ width: "100%" }} />
        </Logo>
        <MenuContainer>
          <UserMenuWrapper>
            <MenuButton
              onClick={goToLoginPage}
              sx={{ color: "#828282" }}
              variant="text"
            >
              로그인
            </MenuButton>
            <Divider />
            <MenuButton
              style={{ marginLeft: 0 }}
              sx={{ marginLeft: 0, color: "#828282" }}
              variant="text"
            >
              회원가입
            </MenuButton>
          </UserMenuWrapper>
          <MenuWrapper>
            <MenuButton
              onClick={goToHomePage}
              sx={{ fontWeight: "bold" }}
              variant="text"
            >
              멍백홈소개
            </MenuButton>
            <MenuButton
              onClick={goToSearchPage}
              sx={{ fontWeight: "bold" }}
              variant="text"
            >
              유기견 검색
            </MenuButton>
            <MenuButton
              onClick={goToSurveyCompletePage}
              sx={{ fontWeight: "bold" }}
              variant="text"
            >
              유기견 검색 (설문 후)
            </MenuButton>
            <MenuButton sx={{ fontWeight: "bold" }} variant="text">
              정보·소식
            </MenuButton>
            <MenuButton
              onClick={goToMyPage}
              sx={{ fontWeight: "bold" }}
              variant="text"
            >
              마이페이지
            </MenuButton>
          </MenuWrapper>
        </MenuContainer>
      </HeadWrapper>
    </HeadContainer>
  );
};

export default Menu;
