// CounterContainer 컴포넌트를 리덕스와 연동 하려면
// react-redux에서 제공하는 connect 함수를 사용한다.
// const makeContainer = connect(mapStateToProps, mapDispatchToProps)
// makeContainer(타깃컴포넌트);
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter'; // action 생성함수 불러오기

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};
const mapStateToProps = (state) => ({
  number: state.counter.number,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      increase,
      decrease,
    },
    dispatch,
  );
// bindActionCreators 유틸 함수 안 쓸 경우,
// ({
//   increase: () => {
//     dispatch(increase());
//   },
//   decrease: () => {
//     dispatch(decrease());
//   },
// });

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
