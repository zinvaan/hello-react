import React, {Component} from 'react';
import TOC from './components/TOC';
import Subject from './components/Subject';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import Control from './components/Control';
import UpdateContent from './components/UpdateContent';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    //↓ UI에 영향을 안주는 값은 state 값으로 안줘도 된다.
    this.max_content_id = 3;
    this.state = {
      mode: 'create', 
      selected_content_id: 2,
      subject: {title: 'WEB', sub: 'World Wide Web!'},
      welcome:{title: 'Welcome', desc:'Hello, React!'},
      contents: [
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'},
      ]
    }
  }
  getReadContent(){
    let i = 0;
      while(i<this.state.contents.length){
        let data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          return data;
        }
        i = i+1;
      }
  }
  getContent(){
    let _title, _desc, _article = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    }
    else if(this.state.mode === 'read'){
      let _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
    }
    else if(this.state.mode === 'create'){
      _article = <CreateContent onSubmit={function(_title, _desc){
        //setState를 통해서 새로운 content 값을 추가
        //add content to this.state.contents
        this.max_content_id = this.max_content_id + 1;
        // this.state.contents.push({
        //   id: this.max_content_id, title: _title, desc: _desc
        // });
        let _contents = this.state.contents.concat({
             id: this.max_content_id, title: _title, desc: _desc
           });
        this.setState({
          contents: _contents,
        });
      }.bind(this)}></CreateContent>
    }
    else if(this.state.mode === 'update'){
      let _content = this.getReadContent();
      _article = <UpdateContent data={_content} onSubmit={function(_title, _desc){
        //setState를 통해서 새로운 content 값을 추가
        //add content to this.state.contents
        this.max_content_id = this.max_content_id + 1;
        // this.state.contents.push({
        //   id: this.max_content_id, title: _title, desc: _desc
        // });
        let _contents = this.state.contents.concat({
             id: this.max_content_id, title: _title, desc: _desc
           });
        this.setState({
          contents: _contents,
        });
      }.bind(this)}></UpdateContent>
    }
    return _article;
  }
  render(){
    console.log('App render');
    return(
      <div className="App">
        <Subject 
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function(){
            this.setState({
              mode: 'welcome',
            })
          }.bind(this)}>
        </Subject>
        <TOC
        onChangePage={function(id){
          this.setState({
            mode: 'read',
            selected_content_id: Number(id),
          });
        }.bind(this)}
        data={this.state.contents}
        ></TOC>
        <Control onChangeMode={function(_mode){
          this.setState({
            mode: _mode,
          })
        }.bind(this)}></Control>
        {/* 기존 {_article}을 this.getContent()로 대체 */}
        {this.getContent()}
      </div>
    );
  }
}

export default App;