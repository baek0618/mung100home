import React, { useState } from "react";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import customHistory from "common/history";
import Dialog from "@mui/material/Dialog";

const HeadContainer = styled("div")`
  display: flex;
  height: 140px;
  width: 100%;
  align-items: center;
  box-shadow: 0px 2px 6px gray, 0px 0px 1px gray;
  z-index: 2;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 10px;
  @media all and (max-width: 1024px) {
    height: 120px;
  }
`;
const HeadWrapper = styled("div")`
  display: flex;
  max-width: 1200px;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  padding: 0 20px;
  @media all and (max-width: 1024px) {
    align-items: center;
  }
`;
const Logo = styled(IconButton)`
  width: 340px;
  height: 80px;

  @media all and (max-width: 1024px) {
    width: 260px;
    height: 60px;
  }
`;
const MenuContainer = styled("div")`
  display: flex;
  flex-direction: column;
  flex: 1;
  @media all and (max-width: 1024px) {
    display: none;
  }
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

  @media all and (max-width: 1024px) {
    display: none;
  }
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
const HamburgerMenu = styled(IconButton)`
  width: 45px;
  height: 45px;
  display: none;
  @media all and (max-width: 1024px) {
    display: flex;
  }
`;

const MobileMenuContainer = styled("div")`
  width: 300px;
  background-color: white;
  border-radius: 6px;
`;
const MenuItem = styled(Button)`
  width: 100%;
  padding: 20px 25px;
  font-size: 1.125rem;
  font-weight: bold;
`;

const Menu = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const goToHomePage = () => {
    customHistory.push(process.env.PUBLIC_URL + `/`);
    setDialogOpen(false);
  };
  const goToMyPage = () => {
    customHistory.push(process.env.PUBLIC_URL + "/myPage");
    setDialogOpen(false);
  };
  const goToInfoPage = () => {
    customHistory.push(process.env.PUBLIC_URL + "/info");
    setDialogOpen(false);
  };

  return (
    <HeadContainer>
      <HeadWrapper>
        <Logo onClick={goToHomePage}>
          <img src="./img/main_logo.png" alt="logo" style={{ width: "100%" }} />
        </Logo>
        <MenuContainer>
          <UserMenuWrapper>
            {/* <MenuButton
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
            </MenuButton> */}
          </UserMenuWrapper>
          <MenuWrapper>
            <MenuButton
              onClick={goToHomePage}
              sx={{ fontWeight: "bold" }}
              variant="text"
            >
              유기견 검색
            </MenuButton>
            {/* <MenuButton
              onClick={goToSurveyCompletePage}
              sx={{ fontWeight: "bold" }}
              variant="text"
            >
              유기견 검색 (설문 후)
            </MenuButton> */}
            <MenuButton
              onClick={goToInfoPage}
              sx={{ fontWeight: "bold" }}
              variant="text"
            >
              입양정보
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
        <HamburgerMenu onClick={() => setDialogOpen(true)}>
          <img
            style={{ width: "100%", height: "100%" }}
            src="./img/icons/hamburger.png"
            alt=""
          />
        </HamburgerMenu>
      </HeadWrapper>

      <Dialog onClose={() => setDialogOpen(false)} open={dialogOpen}>
        <MobileMenuContainer>
          <MenuItem onClick={goToHomePage} variant="text">
            유기견 검색
          </MenuItem>
          <MenuItem onClick={goToInfoPage} variant="text">
            입양정보
          </MenuItem>
          <MenuItem onClick={goToMyPage} variant="text">
            마이페이지
          </MenuItem>
        </MobileMenuContainer>
      </Dialog>
    </HeadContainer>
  );
};

export default Menu;
