import React from 'react';

function App() {
  const name = '리액트';
  return(
    <div style={{
      // 카멜표기법으로 작성해야 한다.
      backgroundColor: 'black', // background-color를 camelCase로 표기
      color: 'aqua',
      fontSize: '48px', // font-size를 camelCase로 표기
      fontWeight: 'bold', // font-weigth를 camelCase로 표기
      padding: 16 // 단위 생략하면 px로 지정된다.
    }}> {name} </div>
  )

  // const style = {
  //   // 카멜표기법으로 작성해야 한다.
  //   backgroundColor: 'black', // background-color를 camelCase로 표기
  //   color: 'aqua',
  //   fontSize: '48px', // font-size를 camelCase로 표기
  //   fontWeight: 'bold', // font-weigth를 camelCase로 표기
  //   padding: 16 // 단위 생략하면 px로 지정된다.
  // };
  // return <div style={style}>{name}</div>;
}

export default App;
