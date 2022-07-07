import React from "react";
import styled from "styled-components";

const Answer = (props) => {
  return (
    <All>
      <h1>미끄메라</h1>
      <h2 style={{ marginTop: "-20px", backgroundColor: "#96A5FF" }}>
        누메라, Goomy
      </h2>
      <h3>드래곤 타입</h3>
      <h4>
        6세대 이후 등장
        <br />
        가장 약한 드래곤 포켓몬
        <br />
        키 30cm, 몸무게 2.8kg.
        <br />
        레벨 40때 미끄네일로 진화하며,
        <br />
        5%확률로 아름다운허물을 지니고 있다.
        <br />
        이로치색깔은 머리 노랑색, 몸통 분홍색.
      </h4>
      <h3>특이 사항</h3>
      <h4>
        대부분 수분이라 몸이 마르면 죽으며,
        <br />
        뿔로 주변 상황을 살핀다. 또한,
        <br />
        매우 민감하여 잡으면 쇼크로 움직일 수 없다.
        <br />
        <br />
        미끌한 점막으로 몸을 지키는데,
        <br />
        이는 세균투성이이므로 만지면 반드시
        <br />
        손을 씻자!
      </h4>
      <button
        onClick={() => {
          props.history.push("/message");
        }}
      >
        메세지 작성하러 가기!
      </button>
    </All>
  );
};

const All = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  padding: 16px;

  & h1 {
    background-color: palegreen;
  }

  & h3 {
    border: 1px solid black;
    border-radius: 8px;
    background-color: #faf4c0;
    width: 130px;
    text-align: center;
    font-size: 18px;
    margin: -5px 0;
  }

  & button {
    width: 180px;
    text-align: center;
    margin: auto;
    border-radius: 8px;
    background-color: white;
  }
`;

export default Answer;
