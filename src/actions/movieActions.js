const apiKey = process.env.REACT_APP_API_KEY;


export const fetchMovie = (movieId) => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_MOVIE_REQUEST' });

    fetch(`http://www.omdbapi.com/?s=${movieId}&apikey=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === 'True') {
          dispatch({ type: 'FETCH_MOVIE_SUCCESS', payload: data });
        } else {
          dispatch({ type: 'FETCH_MOVIE_FAILURE', payload: data.Error });
        }
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_MOVIE_FAILURE', payload: error.message });
      });
  };
};
