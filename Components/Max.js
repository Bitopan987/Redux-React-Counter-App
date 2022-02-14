import { connect } from 'react-redux';
import { updateMax } from '../store/action';

function Max(props) {
  function handleClick(max) {
    return props.dispatch(updateMax(max));
  }

  return (
    <>
      <div style={{ margin: '1rem' }}>
        <button
          style={{ borderRadius: '7px' }}
          className={props.max === 15 && 'active'}
          onClick={() => handleClick(15)}
        >
          15
        </button>
        <button
          style={{ margin: '8px', borderRadius: '7px' }}
          className={props.max === 100 && 'active'}
          onClick={() => handleClick(100)}
        >
          100
        </button>
        <button
          style={{ borderRadius: '7px' }}
          className={props.max === 200 && 'active'}
          onClick={() => handleClick(200)}
        >
          200
        </button>
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    max: state.max,
  };
}

export default connect(mapStateToProps)(Max);
