import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

// const SAMPLE_ACTION = 'auth/SAMPLE_ACTION';
const CHANGE_FILED = 'auth/CHANGE_FILED';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

// export const sampleAction = createAction(SAMPLE_ACTION);
export const changeField = createAction(
  CHANGE_FILED,
  ({ form, key, value }) => ({
    form, // register, login
    key, // username, password, passwordConfirm
    value, // 실제 바꾸려는 값
  }),
);
export const initializeForm = createAction(INITIALIZE_FORM, form => form); // register/login
const initialState = {
  register: {
    username: '',
    password: '',
    passwordConfirm: '',
  },
  login: {
    username: '',
    password: '',
  },
};

const auth = handleActions(
  {
    // [SAMPLE_ACTION]: (state, action) => state,
    [CHANGE_FILED]: (state, {payload: {form, key, value}})=>
    produce(state, draft => {
      draft[form][key] = value; // ex) state.register.username을 바꾼다.
    }),
    [INITIALIZE_FORM]: (state, {payload: form})=>({
      ...state,
      [form]: initialState[form],
    }),
  },
  initialState,
);

export default auth;
