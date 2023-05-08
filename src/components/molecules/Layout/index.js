import React from "react";
import styled from "@emotion/styled";
import Menu from "components/molecules/Menu";
import Footer from "components/molecules/Footer";
import { Outlet, useLocation } from "react-router-dom";

const LayoutContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const PageContents = styled("div")`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: center;
`;

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Menu />
      <PageContents>
        <Outlet />
      </PageContents>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
