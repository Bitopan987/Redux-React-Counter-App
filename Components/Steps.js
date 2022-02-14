import { connect } from 'react-redux';
import { updateStep } from '../store/action';

function Steps(props) {
  function handleClick(step) {
    return props.dispatch(updateStep(step));
  }

  return (
    <>
      <div style={{ margin: '1rem' }}>
        <button
          style={{ borderRadius: '7px' }}
          className={props.step === 5 && 'active'}
          onClick={() => handleClick(5)}
        >
          5
        </button>
        <button
          style={{ margin: '8px', borderRadius: '7px' }}
          className={props.step === 10 && 'active'}
          onClick={() => handleClick(10)}
        >
          10
        </button>
        <button
          style={{ borderRadius: '7px' }}
          className={props.step === 15 && 'active'}
          onClick={() => handleClick(15)}
        >
          15
        </button>
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    step: state.step,
  };
}

export default connect(mapStateToProps)(Steps);
