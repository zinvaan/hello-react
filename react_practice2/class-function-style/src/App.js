import React, {useState} from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Hello World</h1>
      <FuncComp initNumber={2}></FuncComp>
      <ClassComp initNumber={2}></ClassComp>
    </div>
  );
}

function FuncComp(props){
  let numberState = useState(props.initNumber);
  let number = numberState[0];
  let setNumber = numberState[1];

  // let dateState = useState((new Date()).toString());
  // let _date = dateState[0];
  // let setDate = dateState[1];

  let [_date, setDate] = useState((new Date()).toString());

  return(
    <div className="container">
      <h1>function style component</h1>
      <p>Number: {number}</p>
      <p>Date: {_date}</p>
      <input type="button" value="random" onClick={
          function(){
            setDate((new Date).toString());
          }
        } ></input>
    </div>
  );
}

class ClassComp extends React.Component{
  state={
    number: this.props.initNumber,
    date: (new Date()).toString(),
  }
  render(){
    return(
      <div className="container">
        <h2>class style component</h2>
        <p>Number: {this.state.number} </p>
        <p>Date: {this.state.date} </p>
        <input type="button" value="random" onClick={
          function(){
            this.setState({number: Math.random()})
          }.bind(this)
        } ></input>
        <input type="button" value="date" onClick={
          function(){
            this.setState({date: (new Date()).toString()})
          }.bind(this)
        } ></input>
      </div>
    )
  }
}

export default App;
