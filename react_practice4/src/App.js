import React from 'react';
import {Route} from 'react-router-dom';
import NewsPage from './components/NewsPage';

const App=()=>{
  return(
    <div>
      <Route path='/:category?' component={NewsPage}/>
    </div>
  );
};

export default App;