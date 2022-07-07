import { firestore } from "../../firebase";

const rank_db = firestore.collection("Quiz_Goomy_Rank");

const ADD_USER_NAME = "rank/ADD_USER_NAME";
// 유저 메시지를 바꾼다
const ADD_USER_MESSAGE = "rank/ADD_USER_MESSAGE";
// 랭킹정보를 추가한다
const ADD_RANK = "rank/ADD_RANK";
// 랭킹정보를 가져온다
const GET_RANK = "rank/GET_RANK";

const IS_LOADED = "rank/IS_LOADED";

const initialState = {
  user_name: "",
  user_message: "",
  user_score: "",
  score_text: [],
  ranking: [],
  is_loaded: false,
};

// Action Creators
export const addUserName = (user_name) => {
  return { type: ADD_USER_NAME, user_name };
};

export const addUserMessage = (user_message) => {
  return { type: ADD_USER_MESSAGE, user_message };
};

export const addRank = (rank_info) => {
  return { type: ADD_RANK, rank_info };
};

export const getRank = (rank_list) => {
  return { type: GET_RANK, rank_list };
};

export const isLoaded = (loaded) => {
  return { type: IS_LOADED, loaded };
};

export const addRankFB = (rank_info) => {
  return function (dispatch) {
    // 데이터를 저장할 동안 스피너가 뜨도록 해줍니다.
    dispatch(isLoaded(false));

    let rank_data = {
      message: rank_info.message,
      name: rank_info.name,
      score: rank_info.score,
    };
    rank_db.add(rank_data).then((doc) => {
      // id를 콘솔로 확인해볼까요?
      console.log(doc.id);
      // id를 추가해요!
      //db에 current가 true로 들어가면 안된다.
      rank_data = { ...rank_data, id: doc.id, current: true };
      // 데이터를 추가해줘요!
      dispatch(addRank(rank_data));
    });
  };
};

export const getRankFB = () => {
  return function (dispatch) {
    dispatch(isLoaded(false));

    rank_db.get().then((docs) => {
      let rank_data = [];

      docs.forEach((doc) => {
        // console.log(doc.data());
        rank_data = [...rank_data, { id: doc.id, ...doc.data() }];
      });

      dispatch(getRank(rank_data));
      dispatch(isLoaded(true));
    });
  };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case "rank/ADD_USER_NAME": {
      return { ...state, user_name: action.user_name };
    }

    case "rank/ADD_USER_MESSAGE": {
      return { ...state, user_message: action.user_message };
    }

    case "rank/ADD_RANK": {
      const _state = state.ranking;

      const rank_list = _state.map((s, idx) => {
        // 기존 ranking 데이터 하나씩
        console.log(s);
        // s.id와 rank_info 콘솔로 보기
        console.log(s.id, action.rank_info);

        // 만약 기존 데이터 (리덕스에 이미 저장되어 있던 데이터!) 중, 액션으로 받아온
        // 추가한 랭킹 정보와 id가 겹치는 게 있는 지 확인하기
        if (s.id === action.rank_info.id) {
          return action.rank_info;
        }
        return s;
      });

      // 랭킹 리스트 확인하기
      console.log(rank_list);

      return { ...state, ranking: rank_list };
    }

    case "rank/GET_RANK": {
      // 리덕스에 있던 데이터에 파이어베이스에서 가져온 데이터를 추가한다.
      // 중복되지 않은 데이터만 추가한다.
      // id가 같은 지 아닌 지로 데이터를 구분해서 추가한다.

      // 일단 랭킹 데이터를 담을 변수를 만들고, 기존 리덕스 값을 가져다가 넣어준다.
      let ranking_data = [...state.ranking];

      // 랭킹 데이터의 id 배열을 하나 만들어준다.
      const rank_ids = state.ranking.map((r, idx) => {
        console.log(r);
        return r.id;
      });

      console.log(rank_ids);
      console.log(state.ranking);

      // 리덕스에 없는 데이터만 가져오기
      const rank_data_fb = action.rank_list.filter((r, idx) => {
        // 가지고 온 값의 id가 리덕스에 있는 아이디 배열에 없으면 추가한다.
        if (rank_ids.indexOf(r.id) === -1) {
          ranking_data = [...ranking_data, r];
        }
      });
      // 데이터 확인해보기!
      console.log(ranking_data);

      return { ...state, ranking: ranking_data };
    }

    case "rank/IS_LOADED": {
      return { ...state, is_loaded: action.loaded };
    }

    default:
      return state;
  }
}
