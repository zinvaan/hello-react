import React from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListItem.scss';
import cn from 'classnames'

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo;
  const onClickRemove = () => {
    onRemove(id);
  };
  const onClickToggle = () => {
    onToggle(id);
  }
  return (
    <div className="TodoListItme">
      <div className={cn('checkbox',{ checked })} onClick={onClickToggle}>
        {checked ? <MdCheckBox/>:<MdCheckBoxOutlineBlank/>}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={onClickRemove}>
        <MdRemoveCircleOutline/>
      </div>
    </div>
  )
};

export default TodoListItem;