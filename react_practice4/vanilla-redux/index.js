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
const increase=()=>({type: INCREASE, difference});
const decrease=()=>({type: DECREASE});