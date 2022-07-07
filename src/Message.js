import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRank, addRankFB } from "./redux/modules/rank";
import img from "./message.jpg";
import styled from "styled-components";
import { firebase } from "./firebase";

const Message = (props) => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.quiz.name);
  const answers = useSelector((state) => state.quiz.answers);
  const user_name = useSelector((state) => state.rank.user_name);
  const input_text = React.useRef(null);
  // 정답만 걸러내기
  let correct = answers.filter((answer) => {
    return answer;
  });

  // 점수 계산하기
  let score = (correct.length / answers.length) * 100;

  return (
    <div className="App">
      <All>
        <img src={img} />
        <h3>
          <It>{name}</It>&nbsp;에게 남기는 한 마디
        </h3>
        <Comment
          ref={input_text}
          rows="4"
          cols="50"
          placeholder=" 내가 미끄메라에게
                     하고 싶은 말은... "
        />
        <Button
          onClick={() => {
            let rank_info = {
              score: parseInt(score),
              name: user_name,
              message: input_text.current.value,
              current: true,
            };
            // 랭킹 정보 넣기
            dispatch(addRankFB(rank_info));
            // 주소 이동
            props.history.push("/ranking");
          }}
        >
          남기고 랭킹 보러가기
        </Button>
      </All>
    </div>
  );
};
const All = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 420px;
  height: 100vh;
  margin: auto;
  & img {
    width: 270px;
    height: 200px;
    border-radius: 90px;
    margin-top: -100px;
    margin-bottom: 20px;
  }
`;
const It = styled.span`
  background-color: palegreen;
  padding: 3px 8px;
  border-radius: 25px;
`;
const Comment = styled.textarea`
  width: 240px;
  height: 50px;
  word-wrap: break-word;
  border-radius: 25px;
  padding: 20px 2px 0px 12px;
  margin-top: 20px;
`;
const Button = styled.button`
  margin-top: 30px;
  background-color: #96a5ff;
  border-radius: 25px;
  width: 200px;
  height: 35px;
  border: 1px solid white;
  font-weight: bold;
`;
export default Message;
