import React from "react";
import styled from "styled-components";


const Spinner = (props) => {
  return (
    <Outter>
      <h1>로딩중...</h1>
    </Outter>
  );
};

const Outter = styled.div`
  background-color: #df502f70;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  & h1 {
    border: 1px solid black;
    padding: 10px;
    background-color:white;
    border-radius:10px;
  }
`;
export default Spinner;

