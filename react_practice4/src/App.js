import React, {useState, useCallback} from 'react';
import NewsItem from './components/NewsItem';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

const App=()=>{
  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category=>setCategory(category),[]);
  return(
    <div>
      <Categories category={category} onSelect={onSelect}/>
      <NewsList category={category}/>
    </div>
  );
};

export default App;