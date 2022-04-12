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
function Create(props){
  return(
    <article>
      <h2>Create</h2>
      <form onSubmit={(event)=>{
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        props.onCreate(title, body);
      }}>
        <p><input type="text" name="title" placeholder="title"></input></p>
        <p><textarea name='body' placeholder='body'></textarea></p>
        <p><input type="submit" value="Create"></input></p>
      </form>
    </article>
  );
}
function App() {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useState([
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'Javascript', body:'Javascript is ...'},
  ]);
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
  else if (mode === 'CREATE'){
    content = <Create onCreate={(_title, _body)=>{
      const newTopic = {id: nextId, title: _title, body: _body}
      //상태를 다룰 때 그 상태가 객체와 같이 복합적인 데이터인 경우
      //처리할 때 아래의 절차를 따른다
      //1. 기존데이터를 복사하고 [...value];
      const newTopics = [...topics];
      //2. 복사한 데이터를 변경한 뒤
      newTopics.push(newTopic);
      //3. 변경한 데이터를 set 한다.
      setTopics(newTopics);
      setMode('READ');
      setId(nextId);
      setNextId(nextId + 1);
    }}></Create>
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
      <a href="/create" onClick={(event)=>{
        event.preventDefault();
        setMode('CREATE');
      }}>Create</a>
    </div>
  );
}

export default App;
