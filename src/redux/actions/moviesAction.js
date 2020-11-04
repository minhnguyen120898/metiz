import Axios from "axios"

export const getMovies = () => {
     return async (dispatch) => {
          try {
              const res = await Axios.get(`http://localhost:3333/movies`);

            dispatch(setMovies(res.data));
          } catch (err) {
              dispatch(fetchMoviesFailed(err));
          }
     }
}

export const fetchMoviesBegin = () => {
    return {
        type: "FETCH_MOVIES_BEGIN",
    }
}

export const setMovies = (data) => {
    return {
        type: "SET_MOVIES",
        value : data
    }
}

export const fetchMoviesFailed = (value) => {
    return {
        type: "FETCH_MOVIES_FAILED",
        value
    }
}