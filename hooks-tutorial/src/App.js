import React, {useState} from 'react';
import Info from './Info';

const App=()=>{
  const [visible, setVisible] = useState(false);

  return(
    <div>
      <button onClick={()=>{
        setVisible(!visible);
      }}>{visible?'보이기':'숨기기'}</button>
      <hr/>
      {visible && <Info/>}
    </div>
  );
};

export default App;