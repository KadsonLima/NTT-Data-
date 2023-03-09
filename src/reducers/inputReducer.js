const initialState = {
  inputValue: '',
};

function inputReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_INPUT_VALUE':
      return {
        ...state,
        inputValue: action.payload,
      };
    case 'RESET_INPUT_VALUE':
      return {
        ...state,
        inputValue: '',
      };
    default:
      return state;
  }
}

export default inputReducer;

