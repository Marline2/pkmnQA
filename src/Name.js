import img from "./who.jpg";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserName } from "./redux/modules/rank";
import styled from "styled-components";

const Name = (props) => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.quiz.name);
  const input_text = React.useRef(null);

  return (
    <div className="App">
      <All>
        <Body>
          <img src={img} />
          <Title>
            <h3>
              나는&nbsp;
              <It>{name}</It>를
              <br />
              얼마나 알고 있을까?
            </h3>
          </Title>
          <Input ref={input_text} type="text" placeholder="내 이름" />
          <Button
            onClick={() => {
              // 이름 저장
              dispatch(addUserName(input_text.current.value));
              // 페이지 이동
              props.history.push("/quiz");
            }}
          >
            시작하기
          </Button>
        </Body>
      </All>
    </div>
  );
};
const It = styled.span`
  background-color: palegreen;
  padding: 3px 8px;
  border-radius: 25px;
`;
const All = styled.div`
  display: flex;
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  padding: 16px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 220px;
  max-height: 570px;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  width: 100vw;
  padding: 0px 10vw;
  margin: auto auto;
  & img {
    width: 200px;
    height: 250px;
    margin: auto;
  }
`;

const Title = styled.div`
  line-height: 2;
  text-align: center;
  margin-top: -60px;
`;
const Input = styled.input`
  margin: 20px auto -20px auto;
  border-radius: 40px;
  padding: 10px;
  border: 2px solid #d1b2ff;
  width: 50%;
  padding-top: 10px;
`;

const Button = styled.button`
  margin: 40px auto;
  width: 150px;
  height: 25px;
  border-radius: 30px;
  background-color: #96a5ff;
  border: 1px solid #96a5ff;
  font-weight: bold;
`;
export default Name;
