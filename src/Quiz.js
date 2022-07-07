import React from "react";
import styled from "styled-components";
import Score from "./Score";
import SwipeItem from "./SwipeItem";
import Progress from "./Progress";

import { useSelector, useDispatch } from "react-redux";
import { addAnswer } from "./redux/modules/quiz";

const Quiz = (props) => {
  const dispatch = useDispatch();
  const answers = useSelector((state) => state.quiz.answers);
  const quiz = useSelector((state) => state.quiz.quiz);
  const num = answers.length;

  const onSwipe = (direction) => {
    let _answer = direction === "left" ? "O" : "X";

    if (_answer === quiz[num].answer) {
      // 정답일 경우,
      dispatch(addAnswer(true));
    } else {
      // 오답일 경우,
      dispatch(addAnswer(false));
    }
  };

  if (num > quiz.length - 1) {
    return <Score {...props} />;
    // return <div>퀴즈 끝!</div>;
  }
  return (
    <All>
      <Number>{num + 1}번</Number>
      <Progress />
      {quiz.map((l, idx) => {
        if (num === idx) {
          return <h2 key={idx}>{l.question}</h2>;
        }
      })}
      <Body>
        <ChooseBox>
          <Choose>O</Choose>
          <Choose>X</Choose>
        </ChooseBox>
        {quiz.map((l, idx) => {
          if (idx === num) {
            return <SwipeItem key={idx} onSwipe={onSwipe} />;
          }
        })}
      </Body>
      <h5>
        왼쪽 혹은 오른쪽으로 <br />
        미끄메라를 넘겨주세요!
      </h5>
    </All>
  );
};

const All = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  padding: 16px;
  align-items: center;
  text-align: center;
  & > h2 {
    width: 230px;
  }
  & > h5 {
    background-color: lavenderblush;
    bottom: 20;
    margin-top: -10px;
    width: 100vw;
  }
`;

const Body = styled.div`
  max-width: 400px;
  max-height: 100vh;
  height: 100vh;
  width: 100vw;
  justify-content: flex-start;
`;

const DragItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fiexd;
  max-height: 100vh;
  max-width: 100vw;
  & > img {
    width: 150px;
    height: 150px;
    border-radius: 100px;
    margin-top: -400px;
  }
`;
const Number = styled.h1`
  background-color: lavenderblush;
  border-radius: 10px;
  width: 70px;
  height: 50px;
`;

const ChooseBox = styled.div`
  font-size: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 50px;
`;
const Choose = styled.div`
  margin: 20px 60px;
  font-weight: 600;
  color: rgb(152, 243, 198);
`;

export default Quiz;
