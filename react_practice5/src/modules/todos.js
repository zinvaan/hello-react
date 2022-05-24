/*
  redux-actions 라이브러리 사용하여
  createAction, handleActions 함수 사용하기
*/
import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
/*
  Action 타입
*/
const CHANGE_INPUT = 'todos/CHANGE_INPUT'; //input value 변경
const INSERT = 'todos/INSERT'; //새로운 todo 등록
const TOGGLE = 'todos/TOGGLE'; //todo를 체크/체크해제
const REMOVE = 'todos/REMOVE'; //todo를 제거
/*
  Action 생성함수
  createAction 함수 사용하여 액션 업데이트 함수 설정하기
  createAction을 사용하면 매번 객체를 직접 만들어 줄 필요 없이
  더욱 간단하게 액션 생성함수를 선언할 수 있다.
*/
export const changeInput = createAction(CHANGE_INPUT, (input) => input);
let id = 3;
export const insert = createAction(INSERT, (text) => ({
  id: id++,
  text,
  done: false,
}));
export const toggle = createAction(TOGGLE, (id) => id);
export const remove = createAction(REMOVE, (id) => id);
// export const changeInput = (input) => ({
//   type: CHANGE_INPUT,
//   input,
// });
// let id = 3;
// export const insert = (text) => ({
//   type: INSERT,
//   todo: {
//     id: id++,
//     text,
//     done: false, // checked 유무
//   },
// });
// export const toggle = (id) => ({
//   type: TOGGLE,
//   id,
// });
// export const remove = (id) => ({
//   type: REMOVE,
//   id,
// });
/*
  state 초깃값
*/
const initalState = {
  input: '',
  todos: [
    {
      id: 1,
      text: '리덕스 기초 배우기',
      done: true,
    },
    {
      id: 2,
      text: '리액트와 리덕스 사용하기',
      done: false,
    },
  ],
};
/*
  Reducer
  handleAction(액션에 대한 업데이트 함수, 초기상태);
  액션생성함수는 액션에 필요한 추가 데이터를 모두 payload라는 이름으로 사용한다.
  따라서 action.id, action.todo를 사용하는 대신에 모두 공통적으로 action.payload 값을
  조회하도록 리듀서를 구현해주어야 한다.

*/
const todos = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) =>
      produce(state, (draft) => {
        draft.input = input;
      }),
    //  ...state,
    //  input: input
    [INSERT]: (state, { payload: todo }) =>
      produce(state, (draft) => {
        draft.todos.push(todo);
      }),
    // ({
    // ...state,
    // todos: state.todos.concat(todo),
    // }),
    [TOGGLE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const todo = draft.todos.find((todo) => todo.id === id);
        todo.done = !todo.done;
      }),
    // ({
    //   ...state,
    //   todos: state.todos.map((todo) =>
    //     todo.id === id ? { ...todo, done: !todo.done } : todo,
    //   ),
    // }),
    [REMOVE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const index = draft.todos.findIndex((todo) => todo.id === id);
        draft.todos.splice(index, 1);
      }),
    // ({
    //   ...state,
    //   todos: state.todos.filter((todo) => todo.id !== id),
    // }),
  },
  initalState,
);
// function todos(state = initalState, action) {
//   switch (action.type) {
//     case CHANGE_INPUT:
//       return {
//         ...state,
//         input: action.input,
//       };
//     case INSERT:
//       return {
//         ...state,
//         todos: state.todos.concat(action.todo),
//       };
//     case TOGGLE:
//       return {
//         ...state,
//         todos: state.todos.map((todo) =>
//           todo.id === action.id ? { ...todo, done: !todo.done } : todo,
//         ),
//       };
//     case REMOVE:
//       return {
//         ...state,
//         todos: state.todos.filter((todo) => todo.id !== action.id),
//       };
//     default:
//       return state;
//   }
// }

export default todos;
