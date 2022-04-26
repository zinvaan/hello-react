import React, {Component} from "react";

class EventPractice extends Component{
  // constructor(props){
  //   super(props);
  //   this.state={
  //     message:'',
  //   }
  // }
  state={
    message:'',
  }
  handleChange(event){
    this.setState({
      message: event.target.value,
    });
  }
  handleClick(){
    alert(this.state.message);
    this.setState({
      message:'',
    });
  }
  render(){
    return(
      <div>
        <h1>이벤트 연습</h1>
        <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요."
        value={this.state.message}
        onChange={}
        />
        <button onClick={()=>{
        }}>Check</button>
      </div>
    );
  }
}

export default EventPractice;