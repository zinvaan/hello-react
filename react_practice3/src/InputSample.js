import React, {useState} from 'react';

function InputSample(){
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });
  // 비구조화 할당을 통해 값 추출
  // 객체 안에 있는 값을 추출해서 변수 혹은 상수로 바로 선언
  const {name, nickname} = inputs;

  const onChange=(event)=>{
    // 우선 event.target 에서 name 과 value 를 추출
    const {value, name} = event.target;
    setInputs({
      ...inputs, // 기존 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value로 설정
    });
  };
  const onRest=()=>{
    setInputs({
      name: '',
      nickname: '',
    })
  };

  return(
    <div>
      <input 
      name="name" 
      placeholder="name" 
      value={name}
      onChange={onChange}
      />
      <input 
      name="nickname" 
      placeholder="nickname" 
      value={nickname}
      onClick={onRest}
      />
      <button onClick={onRest}>초기화</button>
      <div>
        <b>값: {text}</b>
        이름 (닉네임)
      </div>
    </div>
  );
}

export default InputSample;