// rootReducer
// createStore 함수를 사용하여 store를 만들 때는
// Reducer를 하나만 사용해야 한다.
// 기존에 만들었던 리듀서를 하나로 합쳐 주는 작업을 해줘야 한다.
// combineReducers라는 유틸 함수를 사용하여 처리한다.
import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
