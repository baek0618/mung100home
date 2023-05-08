import React from "react";
import styled from "@emotion/styled";

const FooterContainer = styled("div")`
  display: flex;
  width: 100%;
  background-color: #f9f9fa;
  height: 160px;
  min-height: 160px;
  justify-self: flex-end;
  align-self: flex-end;
  justify-content: center;
  align-items: center;
`;

const FooterContents = styled("div")`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  width: 100%;
  font-size: 14px;
  color: #3f3f3f;
`;

const Title = styled("div")`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContents>
        <Title>멍백홈</Title>
        <span style={{ marginBottom: "10px" }}>
          사업자 등록 완료 후 수정예정
        </span>
        <span>사업자 등록 완료 후 수정예정</span>
      </FooterContents>
    </FooterContainer>
  );
};

export default Footer;
