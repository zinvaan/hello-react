/*
  counter 리덕스 모듈
*/
import { createAction, handleActions } from 'redux-actions';
/*
  Action type 선언
*/
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
/*
  Action 생성함수 선언
*/
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
/*
  redux-thunk로 카운터 값을 비동기적으로 변경시키기
  1초 뒤에 icrease 혹은 decrease 함수를 dispatch 한다.
*/
export const increaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(increase());
  }, 1000);
};
export const decreaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(decrease());
  }, 1000);
};
/*
  초깃값 설정
*/
const initialState = 0;
/*
  reducer
*/
const counter = handleActions(
  {
    [INCREASE]: (state) => state + 1,
    [DECREASE]: (state) => state - 1,
  },
  initialState,
);

export default counter;
