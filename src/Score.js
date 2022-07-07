import badImg from './badScore.jpg';

import React from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { addRank } from "./redux/modules/rank";
import Answer from './Answer';

const Score = (props) => {
  const name = useSelector((state) => state.quiz.name);
  const score_texts = useSelector((state) => state.quiz.score_texts);

  const answers = useSelector((state) => state.quiz.answers);

  // 정답만 걸러내기
  let correct = answers.filter((answer) => {
    return answer;
  });

  // 점수 계산하기
  let score = (correct.length / answers.length) * 100;

  // 점수별로 텍스트를 띄워줄 준비!
  let score_text = "";

  // Object.keys는 딕셔너리의 키값을 배열로 만들어주는 친구예요!
  Object.keys(score_texts).map((s, idx) => {
    // 첫번째 텍스트 넣어주기
    if (idx === 0) {
      score_text = score_texts[s];
    }
    // 실제 점수와 기준 점수(키로 넣었던 점수) 비교해서 텍스트를 넣자!
    score_text = parseInt(s) <= score ? score_texts[s] : score_text;
  });

  return (
    <div className="App">
      <All>
        <Body>
          <img src={badImg} />
          <h3>
            <span>{name}</span>
            &nbsp;퀴즈에 대한 <br /><br />내 점수는&nbsp;
            <span>{score}</span>점
          </h3>
          <p>{score_text}</p>
          <ButtonBox>
            <Button0 onClick={()=>{
              props.history.push('/answer');
            }}>정답 보기</Button0>
            <Button1 onClick={() => {

              props.history.push("/message");
            }}
              outlined>{name}에게 한 마디</Button1>
          </ButtonBox>
        </Body>
      </All>
    </div>
  );
}
const All = styled.div`
  display:flex;
  flex-direction: column;
  box-sizing:border-box;
  height: 100vh;
  width: 100vw;
  overflow:hidden;
  padding: 16px;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 220px;
  max-height: 570px;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  padding: 0px 10vw;
  margin: auto auto;
  text-align: center;
  & > img{
    width:200px;
    height:200px;
  };
  & > h3{
    margin-top: 0px;
  };
  & >h3 >span{
    background-color: palegreen;
    padding: 3px 8px;
    border-radius: 25px;
  }
`;
const ButtonBox = styled.div`
  margin-top:-40px;
`;
const Button0 = styled.button`
    margin: 50px auto 20px auto;
    width: 130px;
    height: 35px;
    border-radius: 30px;
    background-color: #96A5FF;
    border: 1px solid #96A5FF;
    font-weight: bold;
`;
const Button1 = styled.button`
    width: 240px;
    height: 40px;
    border-radius: 30px;
    background-color: #ffffff;
    border: 2px solid #96A5FF;
    font-weight: bold;
    margin: -37px auto 0px 0px;
`;

export default Score;
