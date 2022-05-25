/*
  컨테이너 컴포넌트
*/
import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increaseAsync, decreaseAsync } from '../modules/counter';

const CounterContainer = ({ number, increaseAsync, decreaseAsync }) => {
  return (
    <Counter
      number={number}
      onIncrease={increaseAsync}
      onDecrease={decreaseAsync}
    />
  );
};

const mapStateToProps = (state) => ({
  number: state.counter,
});
const mapDispatchToProps = (dispatch) => ({
  increaseAsync: () => {
    dispatch(increaseAsync());
  },
  decreaseAsync: () => {
    dispatch(decreaseAsync());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
