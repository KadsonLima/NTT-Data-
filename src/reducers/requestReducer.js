const initialState = {
    isLoading: false,
    data: null,
    error: null,
  };
  
  function requestDataReducer(state = initialState, action) {
    switch (action.type) {
      case 'REQUEST_DATA_PENDING':
        return {
          ...state,
          isLoading: true,
          data: null,
          error: null,
        };
      case 'REQUEST_DATA_SUCCESS':
        return {
          ...state,
          isLoading: false,
          data: action.payload,
          error: null,
        };
      case 'REQUEST_DATA_ERROR':
        return {
          ...state,
          isLoading: false,
          data: null,
          error: action.payload,
        };
      default:
        return state;
    }
  }
  
  export default requestDataReducer;
