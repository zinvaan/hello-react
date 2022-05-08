//가장 먼저 해야 할 일은 액션타입을 정의하는 것이다.
//액션 타입은 대문자로 정의하고,
//문자열 내용은 '모듈이름/액션이름'과 같은 형태로 작성한다.
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
//액션타입을 정의한 다음에는 액션 생성 함수를 만들어 준다.
//export 키워드를 사용하여 추후 이 함수를 다른 파일에서
//불러와 사용할 수 있다.
export const increase=()=>({type:INCREASE,});
export const decrease=()=>({type:DECREASE,});
//counter 모듈의 초기 상태와 리듀서 함수를 만들자.
//초기 상태에는 number 값을 설정
const initialState={
  number: 0,
};
//리듀서 함수에는 현재 상태를 참조하여,1
//새로운 객체를 생성해서 반환하는 코드를 작성하였다.
function counter(state=initialState, action){
  switch(action.type){
    case INCREASE:
      return{
        number: state.number+1,
      };
    case DECREASE:
      return{
        number: state.number-1,
      };
    default:
      return state;
  }
}

export default counter;