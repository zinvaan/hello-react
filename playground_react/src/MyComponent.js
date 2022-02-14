import React from 'react';

const MyComponent = ({name, children}) => { 
    //함수형 컴포넌트에서 props사용 할 때
    //파라미터 부분에서 비구조화 할당 문법 사용.
    return (
    <div>
        안녕하세요. 제 이름은 {name}입니다.<br/>
        children 값은 {children}입니다.
    </div>);
};

MyComponent.defaultProps ={
    name: '기본 이름'
};

export default MyComponent;