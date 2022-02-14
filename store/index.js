import { createStore } from 'redux';

function counterReducer(state = { value: 0, step: 5, max: Infinity }, action) {
  let nextValue = state.value + state.step;
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        value: state.max >= nextValue ? nextValue : state.value,
      };
    case 'decrement':
      return { ...state, value: state.value - state.step };
    case 'changeStep':
      return { ...state, step: action.payload };
    case 'changeMax':
      return { ...state, max: action.payload };
    case 'reset':
      return { ...state, value: 0, max: Infinity };
    default:
      return state;
  }
}

let store = createStore(counterReducer);
export default store;
