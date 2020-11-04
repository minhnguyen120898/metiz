const initialState = {
     loading: false,
     seats: [],
     error: ""
}

const seatsReducer = (state = initialState, action) => {
     switch (action.type) {
          case "GET_SEATS_BEGIN" : {
               return {
                    ...state,
                    loading: true
               }
          }
          case "SET_SEATS": {
               return {
                    ...state,
                    seats: action.value,
                    loading: false,
               }
          }

          case "GET_SEATS_FAILURE" : {
               return {
                    ...state,
                    loading: false,
                    error: action.value,
               }
          }

          default: return state;
     }
}

export default seatsReducer;