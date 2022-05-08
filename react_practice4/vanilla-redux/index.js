import {createStore} from 'redux';

const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');
//액션 함수 정의
//1.의미: 프로젝트의 상태에 변화를 일으키는 것을 액션이라고 한다.
//2.액션 이름은 문자열 형태로 대문자로 작성한다.
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
//이 액션 이름을 사용하여 액션 객체를 만드는
//액션 생성 함수를 작성한다.
//액션 객체는 반드시 type값을 가지고 있어야 한다.
const toggleSwitch=()=>({type: TOGGLE_SWITCH});
const increase=(difference)=>({type: INCREASE, difference});
const decrease=()=>({type: DECREASE});
//이 프로젝트에서 사용할 초깃값을 정의한다.
const initialState={
  toggle: false,
  counter: 0,
};
//리듀서 함수 정의
//리듀서는 변화를 일으키는 함수이다.
//함수의 파라미터로는 state와 action 값을 받아 온다.
//state가 undefined일 대는 initialState를 기본값으로 사용한다.
function reducer(state=initialState, action){
  //action.type에 따라 다른 작업을 처리한다.
  switch(action.type){
    case TOGGLE_SWITCH:
      return{
        ...state, //불변성 유지를 위함.
        toggle: !state.toggle
      };
    case INCREASE:
      return{
        ...state,
        counter: state.counter + action.difference,
      };
    case DECREASE:
      return{
        ...state,
        counter: state.counter -1,
      };
    default:
      return state;
  }
};
//store 만들기
const store = createStore(reducer);
//render함수 만들기
//상태가 업데이트 될 때마다 호출되며,
//html을 사용하여 만들어진 UI의 속성을 상태에 따라 변경해준다.
const render=()=>{
  const state = store.getState(); //현재 상태를 불러오기
  //토글 처리
  if(state.toggle){
    divToggle.classList.add('active');
  }
  else{
    divToggle.classList.remove('active');
  }
  //카운터 처리
  counter.innerText = state.counter;
};
render();
//store 상태가 바뀔 때 마다 render 함수가 호출되도록 해 줄 것.
//이 작업은 내장함수 subscribe를 사용한다.
//subscribe 함수의 파라미터는 함수 형태의 값을 전달해준다.
//이렇게 전달된 함수는 추후 액션이 발생하여
//상태가 업데이트 될 때마다 호출된다.
store.subscribe(render);
//액션을 발생시키는 것을 디스패치라고 한다.
//디스패치를 할 때는 스토어의 내장함수 dispatch를 사용한다.
//파라미터는 액션 객체를 넣어 주면 된다.
divToggle.onClick=()=>{
  store.dispatch(toggleSwitch());
};
btnIncrease.onClick=()=>{
  store.dispatch(increase(1));
};
btnDecrease.onClick=()=>{
  store.dispatch(decrease());
};