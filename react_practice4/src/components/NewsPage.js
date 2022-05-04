//react router 적용할 페이지

import React from "react";
import Categories from "./Categories";
import NewsList from "./NewsList";

const NewsPage=({match})=>{
  //카테고리가 선택되지 않았으면 기본값으로 all을 사용
  const category = match.params.category || 'all';
  return(
    <div>
      <Categories/>
      <NewsList category={category}/>
    </div>
  );
};

export default NewsPage;