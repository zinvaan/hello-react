import React from 'react';

const MyComponent = props => { //props 값은 컴포넌트 함수의 파라미터로 받아와 사용할 수 있다.
    return <div>안녕하세요. 제 이름은 {props.name}입니다.</div>;
};

MyComponent.defaultProps ={
    name: '기본 이름'
};

export default MyComponent;