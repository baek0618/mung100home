import React, { useCallback } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { db } from "common/firebase";
// import { useStateValue } from "./StateProvider";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import "survey-react/survey.css";

const SurveyPage = () => {
  const userCollection = db.collection("data_ugi");

  // const [{ basket, user }, dispatch] = useStateValue();

  let json = {
    questions: [
      {
        type: "checkbox",
        name: "home",
        title: "거주지의 형태는 어떤가요?",
        isRequired: true,
        hasSelectAll: false,
        hasNone: false,
        colCount: 5,
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
        colCount: 4,
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
        colCount: 4,
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
        colCount: 4,
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
        name: "yesno",
        title: "키우는 강아지의 정보를 입력해주세요",
        isRequired: true,
        hasSelectAll: false,
        hasNone: false,
        noneText: "None of the above",
        colCount: 3,
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
    const results = JSON.stringify(sender.data);
    const res = setDoc(doc(db, "data_ugi", "abcd"), { results })
      .then((data) => {
        console.log("data", data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  });
  const survey = new Model(json);
  survey.onComplete.add(alertResults);

  return (
    <div className="App">
      <h1>유기견 설문조사</h1>
      <h2>
        7가지의 질문에 대해 답해 주세요. AI가 당신의 유기견을 추천해줍니다
        (중복선택불가){" "}
      </h2>
      <h2>완료버튼을 누르고 마이페이지로 가세요</h2>
      <Survey model={survey} />;
    </div>
  );
};

export default SurveyPage;
