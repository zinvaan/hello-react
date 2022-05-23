// Ducks 패턴을 사용하여 액션타입, 액션 생성함수 , 리듀서를 작성한 코드를
// 모듈이라고 한다.
// const ACTION_TYPE = 'module_name/ACRION_NAME'
/*
  Action 타입
*/
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
/*
  Action 생성함수
*/
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
/*
  state 초깃값
*/
const initalState = {
  number: 0,
};
/*
  Reducer
*/
function counter(state = initalState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}

export default counter;
