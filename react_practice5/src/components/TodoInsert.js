// 새로운 항목을 입력하고 추가할 수 있는 컴포넌트 입니다.
// state를 통해 input의 상태를 관리합니다.
import React, { useState, useCallback } from "react";
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert= ({ onInsert }) => {
  const [value, setValue] = useState('');
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  },[]);
  const onSubmit = useCallback((e) => {
    e.preventDefault();
    onInsert(value);
    setValue('');
  },[onInsert, value]);
  return (
    <form className="TodoInsert" onSubmit={onSubmit} >
      <input value={value} onChange={onChange} placeholder="할 일을 입력하세요."/>
      <button type="submit">+</button>
    </form>
  );
};

export default TodoInsert;