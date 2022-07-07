const GET_QUIZ = "quiz/get_quiz";
const ADD_ANSWER = "quiz/ADD_ANSWER";
const RESET_ANSWER = "quiz/RESET_ANSWER";

const initialState = {
  name: "미끄메라",
  score_texts: {
    60: "당신이 미끄메라에게 품고 있는 마음은 별로 크지 않는 것 같아요. 조금 더 관심을 갖고, 예뻐해주면 어떨까요?!",
    80: "미끄메라를 좋아하는군요! 따로 정보를 찾아본 적이 있나요? 너무 귀엽죠!?",
    100: "100점 만점에 100점!!! 당신의 관심에 미끄메라는 행복해요!! 쭉 사랑해주세요!",
  },
  answers: [],
  quiz: [
    { question: "미끄메라는 6세대에 첫 등장을 했다.", answer: "O" },
    { question: "미끄메라는 피부가 마르면 죽는다.", answer: "O" },
    { question: "미끄메라의 뿔은 용도가 없다.", answer: "X" },
    { question: "야생의 미끄메라는 5%로 멘탈허브를 갖고 있다.", answer: "X" },
    { question: "미끄메라의 북미 이름은 Goomy이다.", answer: "O" },
    { question: "미끄메라는 30레벨에 미끄네일로 진화한다.", answer: "X" },
    { question: "미끄메라는 독 타입이다.", answer: "X" },
    {
      question: "미끄메라의 뿔을 잡으면, 미끄메라는 쇼크로 움직일 수 없다.",
      answer: "O",
    },
    { question: "미끄메라는 약 3kg이다.", answer: "O" },
    { question: "미끄메라의 머리 쪽 이로치 색상은 노란색이다.", answer: "O" },
  ],
};

export const getQuiz = (quiz_list) => {
  return { type: GET_QUIZ, quiz_list };
};

export const addAnswer = (answer) => {
  return { type: ADD_ANSWER, answer };
};

export const resetAnswer = () => {
  return { type: RESET_ANSWER };
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "quiz/GET_QUIZ": {
      return { ...state, quiz: action.quiz_list };
    }
    case "quiz/ADD_ANSWER": {
      return { ...state, answers: [...state.answers, action.answer] };
    }

    case "quiz/RESET_ANSWER": {
      return { ...state, answers: [] };
    }

    default:
      return state;
  }
}
