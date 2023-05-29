import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { useSnackbar } from "notistack";
import { useSelector, useDispatch } from "react-redux";
import { setWish } from "store/dog";

const ModalContainer = styled("div")`
  display: flex;
  width: 960px;
  height: 640px;
  background-color: white;
  padding: 40px 60px;
  flex-direction: column;
  position: relative;
  justify-content: center;
  max-width: 90%;
  @media all and (max-width: 1024px) {
    flex-direction: column;
    padding: 20px 30px;
    height: auto;
  }
`;

const DogContent = styled("div")`
  display: flex;
  @media all and (max-width: 1024px) {
    flex-direction: column;
  }
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
const DogImage = styled("div")`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media all and (max-width: 1024px) {
    width: 100%;
    height: 240px;
  }
`;

const DogInfo = styled("div")`
  width: 60%;
  height: 100%;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 20px;

  @media all and (max-width: 1024px) {
    width: 100%;
    padding: 20px;
  }
`;
const RowBox = styled("div")`
  display: flex;
  font-size: 1.125rem;
  margin-bottom: 14px;
  @media all and (max-width: 1024px) {
    margin-bottom: 7px;
  }
`;
const CustomDivider = styled(Divider)`
  @media all and (max-width: 1024px) {
    margin: 15px 0;
  }
`;
const ModalTitle = styled("div")`
  color: black;
  font-size: 2.313rem;
  font-weight: bold;
  margin-bottom: 20px;

  @media all and (max-width: 1024px) {
    font-size: 1.8rem;
  }
`;

const keyValue = (key, value) => {
  return (
    <RowBox>
      <div style={{ width: "40%", color: "#737373" }}>{key}</div>
      <div style={{ width: "60%", color: "#000000" }}>{value}</div>
    </RowBox>
  );
};

const ItemModal = ({ isOpen, handleClose, data }) => {
  const dispatch = useDispatch();
  const { wish } = useSelector((state) => state.dog);

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const [isWishList, setIsWishList] = useState(false);

  useEffect(() => {
    let targetIndex = -1;
    wish.forEach((item, index) => {
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
    } else {
      setIsWishList(false);
    }
  }, [wish, data]);

  const handleFavorite = () => {
    const parseWishList = [...wish];
    let targetIndex = -1;

    wish.forEach((item, index) => {
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
    dispatch(setWish(parseWishList));
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <ModalContainer>
        <ModalTitle>강아지 정보</ModalTitle>
        <DogContent>
          <DogImage>
            <img
              src={data["이미지경로"]}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                background: "#b1b1b1",
                maxHeight: "480px",
              }}
            />
          </DogImage>
          <DogInfo>
            {keyValue("공고 번호", data["공고고유번호"])}
            {keyValue("품종", data["품종"])}
            {keyValue("성별/중성화", `${data["성별"]}/${data["중성화여부"]}`)}
            {keyValue("추정 나이", data["나이"])}
            {keyValue("몸무게", data["체중"])}
            {keyValue("모색", data["색상"])}
            <CustomDivider
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
          </DogInfo>
        </DogContent>
        <XButton onClick={handleClose} variant="text">
          ×
        </XButton>
      </ModalContainer>
    </Modal>
  );
};

export default ItemModal;
