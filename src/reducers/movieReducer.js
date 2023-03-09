const initialState = {
  loading: false,
  data: null,
  error: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MOVIE_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'FETCH_MOVIE_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case 'FETCH_MOVIE_FAILURE':
      return {
        ...state,
        loading: false,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;
