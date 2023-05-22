import React, { useState } from "react";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import ItemModal from "components/molecules/ItemModal";

const DogItemContainer = styled(Button)`
  display: flex;
  flex-direction: column;
  border-radius: 9px;
  height: 300px;
  /* width: 260px; */
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  overflow: hidden;
  margin-bottom: 20px;
  position: relative;
  cursor: pointer;
  padding: 0;
`;

const DogImage = styled("img")`
  display: flex;
  width: 100%;
  height: 60%;
  background-color: #aeaeae;
  object-fit: cover;
`;
const DogData = styled("div")`
  display: flex;
  flex-direction: column;
  color: #748482;
  font-size: 14px;
  padding: 8px 15px;
  text-align: left;
  width: 100%;
`;
const Name = styled("div")`
  font-size: 18px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 6px;
`;
const DogRank = styled("div")`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #643ace;
  color: white;
  font-size: 15px;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DogItem = ({ rank, data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <DogItemContainer variant="text" onClick={handleItemModal}>
        {data && (
          <>
            <DogImage src={data["이미지경로"]} />
            <DogData>
              <Name>{data["공고고유번호"]}</Name>
              <span>{data["나이"]}</span>
              <span>
                {data["품종"]} / {data["색상"]} / {data["체중"]}
              </span>
              <span>
                {data["성별"]} / {data["중성화여부"]}
              </span>
            </DogData>
            {rank && <DogRank>{rank}위</DogRank>}
          </>
        )}
      </DogItemContainer>

      {data && (
        <ItemModal
          isOpen={isOpen}
          handleClose={() => setIsOpen(false)}
          data={data}
        />
      )}
    </>
  );
};

export default DogItem;
