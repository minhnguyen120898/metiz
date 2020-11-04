const initialState = {
    cinemas: [],
    loading: false,
    error: "",
}

const cinemaReducer = (state = initialState, action) => {
     switch (action.type) {

          case "FETCHCINEMA_BEGIN": {
               return {
                    ...state,
                    loading: true
               }
          }
          case "FETCHCINEMA_SUCCESS": {
               return {
                    ...state,
                    loading: false,
                    cinemas : action.value
               }
          }

          case "FETCHCINEMA_ERROR": {
               return {
                    ...state,
                    error: action.value
               }
          }
          default: return state
     }
}

export default cinemaReducer;