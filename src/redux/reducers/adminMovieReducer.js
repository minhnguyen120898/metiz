const initialState = {
    movies : [],
    error: false,
    loading: false,
    name : "",
    image: "",
    time: "",
    ratings : "",
    producer : "",
    type : "",
    actor : "",
    releaseDate : "",
}

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_MOVIES_ACTION" : {
            return {
                ...state,
                movies : action.movies
            }
        }
        case "GET_MOVIES_FAILED" : {
            return {
                ...state,
                error : action.error
            }
        }
        case "REMOVE_MOVIE_ACTION" : {
            return {
                ...state,
                movies : state.movies.filter(movie => movie.id !== action.movieId)
            }
        }
        case "EDIT_MOVIE_ACTION" : {
            return {
                ...state,
                users : action.userId
            }
        }
        case "GET_ALL" : {
            return {
                ...state,
                name : "",
                image: "",
                time: "",
                ratings : "",
                producer : "",
                type : "",
                actor : "",
                releaseDate : "",
            }
        }
        case "GET_NAME" : {
            return {
                ...state,
                name : action.name,
            }
        }
        case "GET_TYPE" : {
            return {
                ...state,
                type : action.data,
            }
        }
        case "GET_IMAGE" : {
            return {
                ...state,
                image : action.image,
            }
        }
         case "GET_ACTOR" : {
            return {
                ...state,
                actor : action.actor,
            }
        }
         case "GET_RATINGS" : {
            return {
                ...state,
                ratings : action.ratings,
            }
        }
        case "GET_PRODUCER" : {
            return {
                ...state,
                producer : action.producer
            }
        }
         case "GET_TIME" : {
            return {
                ...state,
                time : action.time,
            }
        }
         case "GET_RELEASE_DATE" : {
            return {
                ...state,
                releaseDate : action.releaseDate,
            }
        }
         case "GET_IMAGE" : {
            return {
                ...state,
                image : action.image,
            }
        }
        default: 
            return state;
    }
}

export default moviesReducer;
