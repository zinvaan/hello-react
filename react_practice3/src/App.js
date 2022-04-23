import React, {useState} from 'react';
import TodoInsert from './components/TodoInsert';
import TodoTemplate from './components/TodoTemplate';
import TodoList from './components/TodoList';

const App=()=>{
  const [todos, setTodos] = useState([
    {id:1, title:'리액트의 기초 알아보기', checked: true},
    {id:2, title:'컴포넌트 스타일링 해보기', checked: true},
    {id:3, title:'일정 관리 앱 만들어 보기', checked: false},
  ]);
  return(
    <TodoTemplate>
      <TodoInsert/>
      <TodoList todos={todos}/>
    </TodoTemplate>
  );
};

export default App;
