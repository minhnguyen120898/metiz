
const initialState = {
     movies: [],
    movieDetail: [],
    loading: false,
    error: "",
}

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_MOVIES_BEGIN": {
            return {
                ...state,
                loading: true
            }
        }
        case "SET_MOVIES" : {
            return {
                ...state,
                loading: false,
                movies : action.value
            }
        }

        case "FETCH_MOVIES_FAILED": {
            return {
                ...state,
                erorr: action.value
            }
        }
        
        default : {
            return state;
        }
    }
}

export default moviesReducer;