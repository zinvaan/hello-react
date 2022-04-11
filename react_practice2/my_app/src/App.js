import './App.css';
import {useState} from 'react';

function Header(props){
  console.log('props', props, props.title);
  return(
    <header>
      <h1><a href="/" onClick={(event)=>{
        event.preventDefault();
        props.onChangeMode();
      }}>{props.title}</a></h1>
    </header>
  );
}

function Nav(props){
  const lis = []
  for(let i=0; i<props.topics.length;i++){
    let t = props.topics[i];
    lis.push(
    <li key={t.id}>
      {/* id값은 숫자였으나 tag의 속성으로 들어가면 문자열로 된다. */}
      <a id={t.id} href={'/read'+t.id} onClick={(event)=>{
        event.preventDefault();
        // 문자가 된 id 값을 가져오게 된다.
        // 따라서 event.target.id를 숫자로 바꿔줘야한다.
        props.onChangeMode(Number(event.target.id));
        }}>
        {t.title}
      </a>
    </li>)
  }
  return(
    <nav>
        <ol>
          {lis}
        </ol>
    </nav>
  );
}

function Article(props){
  return(
    <article>
        <h2>{props.title}</h2>
        {props.body}
    </article>
  );
}
function App() {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'Javascript', body:'Javascript is ...'},
  ]
  let content = null;
  if(mode === 'WELCOME'){
    content = <Article title="Read" body="Hello, Read"></Article>  
  }
  else if (mode === 'READ'){
    let title, body = null;
    for(let i=0; i<topics.length; i++){
      console.log(topics[i].id, id);
      if(topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
  }
  return(
    <div>
      <Header title="WEB" onChangeMode={()=>{
        setMode('WELCOME');
      }}></Header>
      <Nav topics={topics} onChangeMode={(_id)=>{
        setMode('READ');
        setId(_id);
      }}></Nav>
      {content}
    </div>
  );
}

export default App;
