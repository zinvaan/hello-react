const CHANGE_INPUT = 'todos3/CHANGE_INPUT';
const INSERT = 'todos3/INSERT';
const TOGGLE = 'todos3/TOGGLE';
const REMOVE = 'todos3/REMOVE';

export const changeInput = (input) => ({
  type: CHANGE_INPUT,
  input,
});
let id = 3;
export const insert = (text) => ({
  type: INSERT,
  todo: {
    id: id++,
    text,
    done: false,
  },
});
export const toggle = (id) => ({
  type: TOGGLE,
  id,
});
export const remove = (id) => ({
  type: REMOVE,
  id,
});
const initialState = {
  input: '',
  todos: [
    { id: 1, text: '리덕스 기초 배우기', done: true },
    { id: 2, text: 'ㅣ액트와 리덕스 사용하기', done: false },
  ],
};

function todos3(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input,
      };
    case INSERT:
      return {
        ...state,
        todos: state.todos.concat(action.todo),
      };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo,
        ),
      };
    case REMOVE:
    default:
  }
}

export default todos3;
