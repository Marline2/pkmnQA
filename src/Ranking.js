import React from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { resetAnswer } from "./redux/modules/quiz";
import { getRank, getRankFB } from "./redux/modules/rank";
import Spinner from "./Spinner";

const Ranking = ({ props }) => {
  const dispatch = useDispatch();
  const _ranking = useSelector((state) => state.rank.ranking);
  const is_loaded = useSelector((state) => state.rank.is_loaded);

  const user_rank = React.useRef(null);
  React.useEffect(() => {
    dispatch(getRankFB());
    if (!user_rank.current) {
      console.log("current rank 불러오기 실패!");
      return;
    }
    window.scrollTo({
      top: user_rank.current.offsetTop - 50,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const ranking = _ranking.sort((a, b) => {
    // 높은 수가 맨 앞으로 오도록!
    return b.score - a.score;
  });

  if (!is_loaded) {
    return <Spinner />;
  }
  console.log(user_rank);
  return (
    <div className="App">
      <All>
        <h4>
          <span>{ranking.length}명</span>&nbsp;의 사람들 중 당신은?
        </h4>
        <NullTop />
        {ranking.map((r, idx) => {
          if (r.current) {
            return (
              <Table
                key={idx}
                highlight={true}
                ref={user_rank}
                style={{
                  backgroundColor: "#FEFBED",
                }}
              >
                <Rank>
                  <h3>{idx + 1}등</h3>
                  <hr align="right"></hr>
                </Rank>
                <Comment>
                  <h3>{r.name}</h3>
                  <h5>{r.message}</h5>
                </Comment>
              </Table>
            );
          }
          return (
            <Table key={idx}>
              <Rank>
                <h3>{idx + 1}등</h3>
                <hr align="right"></hr>
              </Rank>
              <Comment>
                <h3>{r.name}</h3>
                <h5>{r.message}</h5>
              </Comment>
            </Table>
          );
        })}

        <Button
          onClick={() => {
            dispatch(resetAnswer());
            window.location.href = "/";
          }}
        >
          다시 하기
        </Button>
        <NullBottom />
      </All>
    </div>
  );
};

const All = styled.div`
  margin: auto;
  text-align: center;
  min-height: 90vh;
  margin-bottom: 20px;

  & h4 {
    position: fixed;
    margin: 0px auto;
    left: 0;
    right: 0;
    top: 0;
    height: 30px;
    padding-top: 10px;
    background-color: #f6f6f6;
  }
  & span {
    background-color: palegreen;
    font-weight: bold;
    border-radius: 20px;
    padding: 0px 10px;
  }
`;
const Table = styled.div`
  display: flex;
  flex-direction: row;
  margin: 50px auto -20px auto;
  border: 1px solid #999999;
  height: 90px;
  width: 250px;
  border-radius: 15px;
`;
const Rank = styled.div`
  display: flex;
  width: 93px;
  flex-direction: row;
  & h3 {
    padding: 10px 25px;
  }
`;
const Comment = styled.div`
  flex-direction: column;
  max-width: 170px;
  margin-left: 10px;
  text-align: left;

  & h3 {
    margin-top: 10px;
    max-width: 145px;
  }
  & h5 {
    margin-top: -15px;
  }
`;
const Button = styled.button`
  position: fixed;
  margin: 20px auto;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  border-radius: 20px;
  width: 200px;
  height: 35px;
  font-weight: bold;
  font-size: 16px;
  border: 1px solid white;
  background-color: #b5b2ff;
`;

const NullBottom = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  margin-top: 20px;
`;

const NullTop = styled.div`
  width: 100%;
  height: 15px;
  background-color: white;
`;

export default Ranking;
