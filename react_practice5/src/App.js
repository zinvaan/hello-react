import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      await axios
        .get('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => {
          setData(response.data);
        });
    } catch (e) {
      console.log('error: ', e);
    }
  };
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
        {data && (
          <textarea
            rows={7}
            value={JSON.stringify(data, null, 2)}
            readOnly={true}
          />
        )}
      </div>
    </div>
  );
};

export default App;
