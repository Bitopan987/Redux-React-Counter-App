import { connect } from 'react-redux';
import { increment, decrement, reset } from '../store/action';
import Steps from './Steps';
import Max from './Max';

function App(props) {
  return (
    <>
      <h1> Redux Counter App</h1>
      <h2>{props.count}</h2>
      <button
        onClick={() => props.dispatch(increment())}
        style={{ margin: '3px', borderRadius: '7px' }}
      >
        increment
      </button>
      <button
        onClick={() => props.dispatch(decrement())}
        style={{ margin: '3px', borderRadius: '7px' }}
      >
        decrement
      </button>
      <button
        onClick={() => props.dispatch(reset())}
        style={{ margin: '3px', borderRadius: '7px' }}
      >
        reset
      </button>
      <div>
        <Steps />
      </div>
      <div>
        <Max />
      </div>
    </>
  );
}

export default connect(getCount)(App);

function getCount(state) {
  return {
    count: state.value,
  };
}
