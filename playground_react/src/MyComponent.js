import React from 'react';
import PropTypes from 'prop-types'; //props의 타입을 지정하기: propTypes를 사용

const MyComponent = ({name, favoriteNumber, children}) => { 
    //함수형 컴포넌트에서 props사용 할 때
    //파라미터 부분에서 비구조화 할당 문법 사용.
    return (
    <div>
        안녕하세요. 제 이름은 {name}입니다.<br/>
        children 값은 {children}입니다.<br/>
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
    </div>);
};

MyComponent.defaultProps ={
    name: '기본 이름'
};

MyComponent.propTypes = {
    name: PropTypes.string, //name 값이 문자열 형태로 전달되어야 함을 의미.
    favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;