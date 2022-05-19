// 화면 가운데 정렬, 앱 타이틀을 보여주는 컴포넌트
// children으로 내부 JSX를 props로 받아와 렌더링 해준다.
import React from "react";
import './TodoTemplate.scss';

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정관리</div>
      <div className="content">{ children }</div>
    </div>
  )
};

export default TodoTemplate;