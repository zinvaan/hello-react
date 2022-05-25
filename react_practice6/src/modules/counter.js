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
