import React from "react";

const TodoItem=()=>{
  return(
    <div>
      <input type="checkbox"/>
      <span>예제 텍스트</span>
      <button>삭제</button>
    </div>
  );
};

const Todos=({
  input,
  todos,
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
})=>{
  const onSubmit=(event)=>{
    event.preventDefault();
  };
  return(
    <div>
      <form onSubmit={onSubmit}>
        <input/>
        <button type="submit">등록</button>
      </form>
      <div>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </div>
    </div>
  )
};

export default Todos;