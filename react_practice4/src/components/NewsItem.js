// 각 뉴스 정보를 보여 주는 컴포넌트

import React from 'react';
import styled from 'styled-components';

const NewsItemBlock = styled.div`
  display: flex;
  .thumbnail{
    margin-right: 1rem;
    img{
      display: block;
      width: 160px;
      heigth: 100px;
      object-fit: cover;
    }
  }
  .contents{
    h2{
      margin: 0;
      a{
        color: black;
      }
    }
    p{
      margin: 0;
      line-heigth: 1.5;
      margin-top: 0.5rem;
      white-space: noraml;
    }
  }
  &+&{
    margin-top: 3rem;
  }
`;

const NewsItem=({article})=>{
  const {title, description, url, urlToImage} = article;
  return(
    <NewsItemBlock>
      {urlToImage && (
      <div className='thumbnail'>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img src={urlToImage} alt="thumbnail"/>
        </a>
      </div>)}
      <div className='contents'>
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </NewsItemBlock>
  );
};

export default NewsItem;