// Todos 컴포넌트를 위한 컨테이너
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Todos from '../components/Todos';
import { changeInput, insert, toggle, remove } from '../modules/todos';
const TodoComponent = ({
  input,
  todos,
  changeInput,
  insert,
  toggle,
  remove,
}) => {
  return (
    <Todos
      input={input}
      changeInput={changeInput}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
    />
  );
};
const mapStateToProps = (state) => ({
  input: state.todos.input,
  todos: state.todos.todos,
});
const mapDispatchToProps = (dipatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(TodoComponent);
