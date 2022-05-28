import React, { useState } from 'react';
import './App.css';

const Modal = () => {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
};

const App = () => {
  const [title, setTitle] = useState([
    '남자 코트 추천',
    '강남 우동맛집',
    '파이썬 독학',
  ]);
  const [number, setNumber] = useState(0);
  const onClickButton = () => {
    setNumber(number + 1);
  };
  const onClickModify = () => {
    let copy = [...title];
    copy[0] = '여자코트 추천';
    setTitle(copy);
  };
  const onClickSort = () => {
    let copy = [...title];
    setTitle(copy.sort());
    console.log(title);
  };
  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <button onClick={onClickSort}>가나다순정렬</button>
      <button className="nodify-button" onClick={onClickModify}>
        수정하기
      </button>
      <div className="list">
        <h4>
          {title[0]}{' '}
          <span className="like-button" onClick={onClickButton}>
            👍
          </span>
          {number}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <Modal />
    </div>
  );
};

export default App;
