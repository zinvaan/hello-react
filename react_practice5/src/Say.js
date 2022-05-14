import React, { useState } from 'react';

const Say = () => {
  const [form, setForm] = useState({
    username:'',
    message:'',
  });
  const { username, message } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };
  const onClick = () => {
    alert(username + ':' +message);
    setForm({
      username:'',
      message:'',
    })
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter'){
      onClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input 
      name='username' 
      type='text' 
      placeholder='사용자명' 
      value={username} 
      onChange={onChange} 
      />
      <input 
      name='message' 
      type='text' 
      placeholder='아무거나 입력해 보세요.' 
      value={message} 
      onChange={onChange}
      onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default Say;