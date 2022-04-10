import React, { Component } from "react";

class Counter extends Component {
    state = { //state 초깃값 설정
        number: 0,
        fixNumber: 0,
        };
    render(){
        const {number, fixNumber} = this.state; //state를 조회할 때 this.state로 조회한다.
        return(
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixNumber}</h2>
                <button onClick={()=>{
                    this.setState(
                        {
                            number: number + 1,
                        },
                        () => {
                            console.log('방금 setState가 호출 되었습니다.');
                            console.log(this.state);
                        }
                    );
                }}>
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;