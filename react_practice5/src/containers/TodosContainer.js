// Todos 컴포넌트를 위한 컨테이너
import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { bindActionCreators } from 'redux';
import Todos from '../components/Todos';
import { changeInput, insert, toggle, remove } from '../modules/todos';

const TodosContainer = () => {
  const { input, todos } = useSelector(({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }));

  const dispatch = useDispatch();
  const onChangeInput = useCallback(
    (input) => dispatch(changeInput(input)),
    [dispatch],
  );
  const onInsert = useCallback((text) => dispatch(insert(text)), [dispatch]);
  const onToggle = useCallback((id) => dispatch(toggle(id)), [dispatch]);
  const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);

  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
};

export default TodosContainer;
// const TodosContainer = ({
//   input,
//   todos,
//   changeInput,
//   insert,
//   toggle,
//   remove,
// }) => {
//   return (
//     <Todos
//       input={input}
//       todos={todos}
//       onChangeInput={changeInput}
//       onInsert={insert}
//       onToggle={toggle}
//       onRemove={remove}
//     />
//   );
// };
// const mapStateToProps = (state) => ({
//   input: state.todos.input,
//   todos: state.todos.todos,
// });
// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators(
//     {
//       changeInput,
//       insert,
//       toggle,
//       remove,
//     },
//     dispatch,
//   );

// export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
