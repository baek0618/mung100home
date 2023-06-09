import React, { useCallback, useEffect, useState } from "react";
import styled from "@emotion/styled";
import Modal from "@mui/material/Modal";
// import Button from "@mui/material/Button";
// import Divider from "@mui/material/Divider";
import { useSnackbar } from "notistack";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { db } from "common/firebase";
// import { useStateValue } from "./StateProvider";
// import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setSurvey, setAiResult } from "store/dog";
import { isMobile } from "react-device-detect";

import "survey-react/survey.css";
import "./survey.css";

const SurveyContainer = styled("div")`
  display: flex;
  background-color: white;
  padding: 20px;
  border-radius: 6px;
  max-height: 90%;
  overflow-y: auto;
`;

const SurveyModal = ({ isOpen, handleClose }) => {
  const userCollection = db.collection("data_ugi");
  const dispatch = useDispatch();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  // const [{ basket, user }, dispatch] = useStateValue();
  // const [data_Re, datas] = useState([]);
  // const [results, setResults] = useState([
  //   {
  //     home: ["오피스텔"],
  //     room: ["투룸"],
  //     tkdwn: ["가족중 한사람은 꼭 상주한다."],
  //     tkscor: ["매일 1회 이상"],
  //     yesno: ["아니오"],
  //     ifyes: ["질병 없음"],
  //   },
  // ]);

  const aiAnalysis = (results) => {
    const API_URL = "https://ugiugi-453cd.du.r.appspot.com/react_to_flask";
    axios
      .post(
        API_URL,
        {
          results,
        },
        {
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }
      )
      .then((response) => {
        // datas(response.data);
        dispatch(setAiResult(response.data));
        enqueueSnackbar(
          "AI 추천이 완료되었습니다. 마이페이지를 확인해주세요.",
          { variant: "success" }
        );

        handleClose();
      })
      .catch((error) => {
        console.log(error);
        enqueueSnackbar("Error", { variant: "error" });
        handleClose();
      });
  };

  let json = {
    questions: [
      {
        type: "checkbox",
        name: "home",
        title: "거주지의 형태는 어떤가요?",
        isRequired: true,
        hasSelectAll: false,
        hasNone: false,
        colCount: isMobile ? 2 : 5,
        choicesOrder: "asc",
        choices: ["오피스텔", "다세대", "빌라", "아파트", "전원주택"],
      },
      {
        type: "checkbox",
        name: "room",
        title: "방의 개수는 몇 개 인가요?",
        isRequired: true,
        hasSelectAll: false,
        hasNone: false,
        noneText: "None of the above",
        colCount: isMobile ? 2 : 4,
        choicesOrder: "asc",
        choices: ["원룸", "1.5룸", "투룸", "쓰리룸 이상"],
      },
      {
        type: "checkbox",
        name: "tkdwn",
        title: "집 상주시간은 얼만큼인가요?",
        isRequired: true,
        hasSelectAll: false,
        hasNone: false,
        noneText: "None of the above",
        colCount: isMobile ? 1 : 4,
        choicesOrder: "asc",
        choices: [
          "가족중 한사람은 꼭 상주한다.",
          "대부분의 시간에 가족이 상주한다.(외출 3시간 미만의 수준)",
          "하루 5시간 내외의 빈시간이 있다.",
          "하루 8시간 내외의 빈시간이 있다.",
          "하루 10시간 내외의 빈시간이 있다.",
        ],
      },
      {
        type: "checkbox",
        name: "tkscor",
        title: "산책 가능 시간은 얼만큼 인가요?",
        isRequired: true,
        hasSelectAll: false,
        hasNone: false,
        noneText: "None of the above",
        colCount: isMobile ? 2 : 4,
        choicesOrder: "asc",
        choices: ["1주에 1~2회", "1주에 3~4회", "1주에 5~6회", "매일 1회 이상"],
      },
      {
        type: "checkbox",
        name: "yesno",
        title: "이미 강아지를 키우고 있나요?",
        isRequired: true,
        hasSelectAll: false,
        hasNone: false,
        noneText: "None of the above",
        colCount: 2,
        choicesOrder: "asc",
        choices: ["예", "아니오"],
      },
      {
        type: "checkbox",
        name: "ifyes",
        title: "키우는 강아지의 정보를 입력해주세요",
        isRequired: true,
        hasSelectAll: false,
        hasNone: false,
        noneText: "None of the above",
        colCount: isMobile ? 2 : 3,
        choices: [
          "소형견",
          "중형견",
          "대형견",
          "수컷",
          "암컷",
          "중성화",
          "영유아기",
          "아동청소년+청년기",
          "중장년기",
          "노년기",
          "질병 없음",
          "신체적 장애 있음",
          "심각한 질병있음 (암, 축농증)",
        ],
      },
    ],
  };

  const alertResults = useCallback((sender) => {
    const results = sender.data;
    dispatch(setSurvey(results));
    aiAnalysis(JSON.stringify(sender.data));
  });
  const survey = new Model(json);
  survey.onComplete.add(alertResults);

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <SurveyContainer>
        <div className="App">
          <h1 style={{ marginBottom: "20px" }}>유기견 설문조사</h1>
          <h2>
            7가지의 질문에 대해 답해 주세요. AI가 당신의 유기견을 추천해줍니다
            (중복선택불가)
          </h2>
          <h2 style={{ marginBottom: "20px" }}>
            완료버튼을 누르고 마이페이지로 가세요
          </h2>
          <Survey model={survey} />
        </div>
      </SurveyContainer>
    </Modal>
  );
};

export default SurveyModal;
