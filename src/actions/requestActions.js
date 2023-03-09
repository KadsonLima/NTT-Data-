function requestData() {
    return async (dispatch) => {
      dispatch({ type: 'REQUEST_DATA_PENDING' });
  
      try {
        const response = await fetch('https://example.com/api/data');
        const data = await response.json();
  
        dispatch({ type: 'REQUEST_DATA_SUCCESS', payload: data });
      } catch (error) {
        dispatch({ type: 'REQUEST_DATA_ERROR', payload: error.message });
      }
    };
  }
  
  export { requestData };
