// Ducks 패턴을 사용하여 액션타입, 액션 생성함수 , 리듀서를 작성한 코드를
// 모듈이라고 한다.
// const ACTION_TYPE = 'module_name/ACRION_NAME'
/*
  redux-actions 라이브러리 사용하여
  createAction, handleActions 함수 사용하기
*/
import { createAction, handleActions } from 'redux-actions';
/*
  Action 타입
*/
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
/*
  Action 생성함수,
  createAction 함수 사용하여 액션 업데이트 함수 설정하기
  createAction을 사용하면 매번 객체를 직접 만들어 줄 필요 없이
  더욱 간단하게 액션 생성함수를 선언할 수 있다.
*/
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });
/*
  state 초깃값
*/
const initalState = {
  number: 0,
};
/*
  Reducer
  handleAction(액션에 대한 업데이트 함수, 초기상태)
*/
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initalState,
);
// function counter(state = initalState, action) {
//   switch (action.type) {
//     case INCREASE:
//       return {
//         number: state.number + 1,
//       };
//     case DECREASE:
//       return {
//         number: state.number - 1,
//       };
//     default:
//       return state;
//   }
// }

export default counter;
