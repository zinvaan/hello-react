import React from 'react';
import{
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

const TodoListItem = ({todo, onRemove, onToggle}) => {
  const {id, text, checked} = todo;
  return(
    <div className='TodoListItem'>
      <div className={cn('checkbox', {checked})} onClick={()=>onToggle(id)}>
        {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
        <div className='text'>{text}</div>
      </div>
      <div className='remove' onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline/>
      </div>
    </div>
  );
};

//TodoListItem props(todo, onRemove, onToggle)가 변경되지 않으면
//리렌더링 되지 않는다.
//React.memo(TodoListItem);
export default React.memo(TodoListItem);