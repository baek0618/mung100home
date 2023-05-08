import React from "react";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";

const HomeContainer = styled("div")`
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
  height: 500px;
  background-color: tan;
  background: url("./img/info_home.png") no-repeat;
  background-size: cover;
`;
const BannerContents = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  color: #5f49a6;
`;
const HomeContents = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const AdoptionInfoHead = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background: white;
  box-shadow: 0px 2px 6px gray, 0px 0px 1px gray;
  width: 100%;
`;
const AdoptionInfoCategoryWrapper = styled("div")`
  display: flex;
  justify-content: space-evenly;
  max-width: 1200px;
  width: 100%;
`;
const AdoptionInfoCategory = styled(Button)`
  /* width: 200px; */
  border-radius: 25px;
  font-size: 19px;
  font-weight: bold;
  padding: 10px 25px;
`;
const TextContents = styled("div")`
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  border-top: 1px solid #c8c8c8;
  padding: 50px 150px;
  font-size: 18px;
  line-height: normal;
  line-height: 24pt;
  font-family: "NotoSansKR-Regular";
`;

const TextTitle = styled("span")`
  color: #5f49a6;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 36px;
  margin-bottom: 40px;
`;
const NumberRow = styled("div")`
  display: flex;
  padding: 20px 0;
`;
const RowNumber = styled("div")`
  width: 60px;
  font-size: 22px;
  font-weight: bold;
  color: #5f49a6;
  line-height: normal;
`;
const RowText = styled("div")`
  width: calc(100% - 60px);
  font-size: 19px;
  line-height: normal;
  color: #333333;
`;
const SubTitle = styled("div")`
  font-size: 22px;
  margin-bottom: 10px;
`;
const DogTypeWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  padding: 40px 0;
`;
const DogType = styled("div")`
  width: 240px;
  background: white;
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 26px;
  box-shadow: 0 0 4px 0px gray;
`;
const DogImage = styled("img")`
  width: 65%;
  height: 55%;
  object-fit: contain;
`;
const DogName = styled("div")`
  color: #3f3f3f;
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
`;

const Home = () => {
  return (
    <HomeContainer>
      <BannerContainer>
        <BannerContents>
          <span style={{ fontSize: "55pt", fontWeight: "bold" }}>
            Adoption Information
          </span>
          <span style={{ fontSize: "23pt", marginTop: "10px" }}>
            유기견을 입양하기 전의 충분한 숙고는 파양을 방지합니다.
          </span>
        </BannerContents>
      </BannerContainer>
      <HomeContents>
        {/* page head */}
        <AdoptionInfoHead>
          <span
            style={{
              fontSize: "37px",
              fontWeight: "bold",
              marginBottom: "40px",
              color: "#3f3f3f",
            }}
          >
            입양 정보
          </span>
          <AdoptionInfoCategoryWrapper>
            <AdoptionInfoCategory>나와 맞는 강아지 찾기</AdoptionInfoCategory>
            <AdoptionInfoCategory>입양전 고려할 것</AdoptionInfoCategory>
            <AdoptionInfoCategory>보호소를 통합 입양과정</AdoptionInfoCategory>
            <AdoptionInfoCategory>필요한 물품</AdoptionInfoCategory>
            <AdoptionInfoCategory>입양 후 과정</AdoptionInfoCategory>
          </AdoptionInfoCategoryWrapper>
        </AdoptionInfoHead>

        {/* contents */}
        <TextContents>
          <TextTitle>나와 맞는 강아지 찾기</TextTitle>
          <span>
            명백홈에서는 입양자분의 환경과 성향을 고려하여 최고의 짝꿍을 찾아
            매칭합니다.
            <br />
            집의 형태, 크기, 입양자의 하루 일과, 가족 구성원, 기존 반려견의 유무
            등 다양한 조건을 참고하여 가장 오래 행복하게 지낼 수 있는 강아지를
            검토합니다.
            <br />
            이후 강아지의 성향인 멍bti와 입양자의 성격매칭을 통해 파양율이 적은
            강아지를 추천합니다.
            <br />
            <br />
            대표적인 멍bti는 3가지 입니다.
          </span>
          <DogTypeWrapper>
            <DogType>
              <DogImage src="./img/bti1.png" alt="" />
              <DogName>만능 멍멍이</DogName>
            </DogType>
            <DogType>
              <DogImage src="./img/bti2.png" alt="" />
              <DogName>나랑 같이 뛸래?</DogName>
            </DogType>
            <DogType>
              <DogImage src="./img/bti3.png" alt="" />
              <DogName>손길이 필요해</DogName>
            </DogType>
          </DogTypeWrapper>
        </TextContents>

        {/* 입양전 고려할 것 */}
        <TextContents>
          <TextTitle>입양전 고려할 것</TextTitle>
          <NumberRow>
            <RowNumber>01</RowNumber>
            <RowText>
              강아지는 장난감이 아닌 소중한 생명입니다. 새로운 생명을 가족으로
              맞이하기 전 환경적 준비와 마음의 각오를 해야 합니다.
            </RowText>
          </NumberRow>

          <NumberRow>
            <RowNumber>02</RowNumber>
            <RowText>
              강아지 입양에 대한 가족 구성원의 합의가 필요합니다.
            </RowText>
          </NumberRow>

          <NumberRow>
            <RowNumber>03</RowNumber>
            <RowText>
              하루 일정 시간 이상 강아지를 돌봐줄 시간이 필요합니다. 식사와
              산책, 교감을 할 수 있어야 하며, 강아지를 오랜 시간 방치하지 않도록
              주의해야 합니다.
            </RowText>
          </NumberRow>

          <NumberRow>
            <RowNumber>04</RowNumber>
            <RowText>
              강아지의 평균 수명은 10~15년 이상입니다. 결혼, 임신, 유학, 이사
              등으로 인해 환경적 변화가 생겨도 반려견을 끝까지 책임질 수 있어야
              합니다.
            </RowText>
          </NumberRow>

          <NumberRow>
            <RowNumber>05</RowNumber>
            <RowText>강아지에 대한 꾸준한 공부가 필요합니다.</RowText>
          </NumberRow>

          <NumberRow>
            <RowNumber>06</RowNumber>
            <RowText>
              강아지를 키우기 위해 매달 일정 금액이 필요합니다. (사료, 간식,
              장난감, 미용, 샴푸, 병원비 등)
            </RowText>
          </NumberRow>

          <NumberRow>
            <RowNumber>07</RowNumber>
            <RowText>
              강아지를 위해 중성화 수술, 예방접종을 해주어야 합니다. (안되어
              있는 경우에 한해 )
            </RowText>
          </NumberRow>

          <NumberRow>
            <RowNumber>08</RowNumber>
            <RowText>
              강아지가 아플 경우, 병원을 방문할 수 있어야합니다. 또한 강아지를
              말을 할 수 없으므로 정기적 검진이 중요합니다.
            </RowText>
          </NumberRow>

          <NumberRow>
            <RowNumber>09</RowNumber>
            <RowText>
              강아지가 벽지나 가구 등 집안 물품을 망가뜨릴 수 있습니다. 인내심을
              가지고 강아지가 적용할 수 있도록 기다려주어야 합니다.
            </RowText>
          </NumberRow>
        </TextContents>

        {/* 보호소를 통한 입양과정 안내 */}
        <TextContents>
          <TextTitle>보호소를 통한 입양과정 안내</TextTitle>
          <NumberRow>
            <RowNumber>01</RowNumber>
            <RowText>
              입양하고자 하는 강아지의 정보를 꼼꼼히 확인합니다.
            </RowText>
          </NumberRow>

          <NumberRow>
            <RowNumber>02</RowNumber>
            <RowText>
              강아지 정보에 있는 보호소 전화번호 또는 이메일로 입양의사를
              밝힙니다.
            </RowText>
          </NumberRow>

          <NumberRow>
            <RowNumber>03</RowNumber>
            <RowText>방문 일정을 조율하고, 면담 및 입양 결정을 합니다.</RowText>
          </NumberRow>

          <NumberRow>
            <RowNumber>04</RowNumber>
            <RowText>
              입양 동의서 등 보호소에서 요구하는 서류작성을 합니다.
            </RowText>
          </NumberRow>

          <NumberRow>
            <RowNumber>05</RowNumber>
            <RowText>
              강아지를 안전히 집으로 데리고갈 이동장, 담요 등을 챙겨 강아지
              입양을 진행합니다.
            </RowText>
          </NumberRow>
        </TextContents>

        {/* 입양 전후 준비할 물품 안내 */}
        <TextContents>
          <TextTitle>입양 전후 준비할 물품 안내</TextTitle>
          <NumberRow>
            <RowNumber>01</RowNumber>
            <RowText>
              <SubTitle>인식표</SubTitle>
              반려견 동물 등록 후 등록번호를 새긴 인식표를 준비합니다.
            </RowText>
          </NumberRow>

          <NumberRow>
            <RowNumber>02</RowNumber>
            <RowText>
              <SubTitle>식사를 위한 준비</SubTitle>
              강아지 종/상태/나이에 맞는 사료와 적절한 크기의 밥그릇, 물그릇을
              준비합니다.
              <br />
              강아지의 적응을 위해 강아지용 간식을 준비하는 것도 좋은
              반법입니다.
            </RowText>
          </NumberRow>

          <NumberRow>
            <RowNumber>03</RowNumber>
            <RowText>
              <SubTitle>휴식를 위한 준비</SubTitle>
              강아지가 쉴 수 있는 방석이나 집,켄넬 등을 준비합니다.
              <br />
              강아지가 쇼파나 침대에 올라갈 경우를 대비하여 계단을 준비하는 것도
              좋은 방법입니다.
            </RowText>
          </NumberRow>

          <NumberRow>
            <RowNumber>04</RowNumber>
            <RowText>
              <SubTitle>배변을 위한 준비</SubTitle>
              강아지가 정해진 장소에 배변할 수 있도록 배변 패드, 배변판을
              준비합니다.
            </RowText>
          </NumberRow>

          <NumberRow>
            <RowNumber>05</RowNumber>
            <RowText>
              <SubTitle>산책을 위한 준비</SubTitle>
              강아지가 새로운 공간에 적응한 후 산책을 시켜주는 것이 좋습니다.
              <br />
              적정한 크기의 리드줄과 하네스, 그리고 배변봉투를 준비합니다.
              <br />
              문을 열어둔 사이 강아지가 탈출하지 못하도록 현관문에 안전문을
              설치하는 것이 좋습니다.
            </RowText>
          </NumberRow>

          <NumberRow>
            <RowNumber>06</RowNumber>
            <RowText>
              <SubTitle>미용을 위한 준비</SubTitle>
              샴푸, 트리트먼트, 빗, 귀세척 용액, 발톱깎이, 칫솔과 치약 등 미용과
              세면을 위한 제품을 준비합니다.
            </RowText>
          </NumberRow>

          <NumberRow>
            <RowNumber>07</RowNumber>
            <RowText>
              <SubTitle>장난감 등의 준비</SubTitle>
              강아지가 새로운 가족들과 친해질 수 있도록 장난감을 준비하는 것도
              적응을 위한 좋은 방법입니다.
            </RowText>
          </NumberRow>

          <NumberRow>
            <RowNumber>08</RowNumber>
            <RowText>
              <SubTitle>건강을 위한 준비</SubTitle>
              주기적으로 바르거나 먹일 수 있는 심장사상충약을 구비해둡니다.
              <br />
              어리거나 건강에 이상이 있는 강아지를 입양한다면 이에 맞는 영양제,
              분유를 준비합니다.
              <br />
              관절이 좋지않은 강아지일 경우 바닥 매트를 구매하여 까는 것이
              좋습니다.
            </RowText>
          </NumberRow>

          <NumberRow>
            <RowNumber>09</RowNumber>
            <RowText>
              <SubTitle>그 외</SubTitle>
              강아지 이동을 위한 이동장, 캐리어가 필요합니다.
              <br />
              종종 공간분리를 위한 울타리가 필요할 수 있습니다.
            </RowText>
          </NumberRow>
        </TextContents>
      </HomeContents>
    </HomeContainer>
  );
};

export default Home;
