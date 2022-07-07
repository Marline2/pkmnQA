import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";

const Progress = (props) => {
  // 퀴즈 리스트 가지고 오기
  const quiz_list = useSelector((state) => state.quiz.quiz);
  // 유저 답 리스트 가지고 오기
  const answers = useSelector((state) => state.quiz.answers);
// 답 리스트 갯수 세기
  let count = answers.length;

  return (
    <ProgressBar>
      <HighLight width={(count / quiz_list.length) * 100 + "%"} />
    </ProgressBar>
  );
};

const ProgressBar = styled.div`
  width: 80%;
  margin: -5px auto;
  background: #eee;
  height: 20px;
  display: flex;
  align-items: center;
  border-radius: 10px;
`;

const HighLight = styled.div`
  background: #FCEFAC;
  height: 20px;
  width: ${(props) => props.width};
  transition: width 1s;
  border-radius: 10px;
`;


export default Progress;