import React, {useCallback, useState} from "react";
import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert=({onInsert})=>{
  const [value, setValue] = useState('');

  const onChange = useCallback((event)=>{
    setValue(event.target.value);
  }, []);
  const onSubmit = useCallback((event)=>{
    event.preventDefault();
    onInsert(value);
    setValue('');
  },[onInsert, value]);
    return(
      <form className="TodoInsert" onSubmit={onSubmit}>
        <input 
        placeholder="할 일을 입력하세요."
        value={value}
        onChange={onChange}
        />
        <button type="submit">
            <MdAdd/>
        </button>
      </form>
    )
}

export default TodoInsert;