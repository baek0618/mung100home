import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { useSnackbar } from "notistack";

const ModalContainer = styled("div")`
  display: flex;
  width: 960px;
  height: 640px;
  background-color: white;
  padding: 40px 60px;
  flex-direction: column;
  position: relative;
  justify-content: center;
`;

const XButton = styled(Button)`
  position: absolute;
  top: 30px;
  right: 30px;
  color: black;
  width: 40px;
  height: 40px;
  font-size: 2.5rem;
  font-weight: bold;
`;

const keyValue = (key, value) => {
  return (
    <div
      style={{ display: "flex", fontSize: "1.125rem", marginBottom: "14px" }}
    >
      <div style={{ width: "40%", color: "#737373" }}>{key}</div>
      <div style={{ width: "60%", color: "#000000" }}>{value}</div>
    </div>
  );
};

const ItemModal = ({ isOpen, handleClose, data }) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const [isWishList, setIsWishList] = useState(false);

  useEffect(() => {
    const getWishList = localStorage.getItem("wishList");
    const parseWishList = getWishList ? JSON.parse(getWishList) : [];
    let targetIndex = -1;
    parseWishList.forEach((item, index) => {
      if (
        item["공고고유번호"] &&
        item["공고고유번호"] === data["공고고유번호"]
      ) {
        targetIndex = index;
      }
    });

    let isExist = targetIndex !== -1;
    if (isExist) {
      setIsWishList(true);
    }
  }, []);

  const handleFavorite = () => {
    const getWishList = localStorage.getItem("wishList");
    const parseWishList = getWishList ? JSON.parse(getWishList) : [];
    let targetIndex = -1;

    parseWishList.forEach((item, index) => {
      if (
        item["공고고유번호"] &&
        item["공고고유번호"] === data["공고고유번호"]
      ) {
        targetIndex = index;
      }
    });

    let isExist = targetIndex !== -1;
    if (isExist) {
      parseWishList.splice(targetIndex, 1);
      enqueueSnackbar("반려견 찜콩을 취소하였습니다.", { variant: "success" });
      setIsWishList(false);
    } else {
      parseWishList.push(data);
      enqueueSnackbar("반려견을 찜콩하였습니다.", { variant: "success" });
      setIsWishList(true);
    }

    const stringWishList = JSON.stringify(parseWishList);
    localStorage.setItem("wishList", stringWishList);
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <ModalContainer>
        <div
          style={{
            color: "black",
            fontSize: "2.313rem",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          강아지 정보
        </div>
        <div style={{ display: "flex" }}>
          <div
            style={{
              width: "40%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={data["이미지경로"]}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                background: "#b1b1b1",
              }}
            />
          </div>
          <div
            style={{
              width: "60%",
              height: "100%",
              paddingLeft: "50px",
              paddingRight: "50px",
              paddingTop: "20px",
            }}
          >
            {keyValue("공고 번호", data["공고고유번호"])}
            {keyValue("품종", data["품종"])}
            {keyValue("성별/중성화", `${data["성별"]}/${data["중성화여부"]}`)}
            {keyValue("추정 나이", data["나이"])}
            {keyValue("몸무게", data["체중"])}
            {keyValue("모색", data["색상"])}
            <Divider
              sx={{
                width: "100%",
                height: "1px",
                background: "#b1b1b1",
                margin: "30px 0",
              }}
            />
            {keyValue("보호소명", data["보호소명"])}
            {keyValue("보호소 전화번호", data["보호소전화번호"])}
            <Button
              sx={{ width: "100%", mt: "20px" }}
              endIcon={
                <span style={{ color: isWishList ? "#d32f2f" : "" }}>♥</span>
              }
              onClick={handleFavorite}
            >
              찜
            </Button>
          </div>
        </div>
        <XButton onClick={handleClose} variant="text">
          ×
        </XButton>
      </ModalContainer>
    </Modal>
  );
};

export default ItemModal;
