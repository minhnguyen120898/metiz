const initialState=  {
    combo: [],
    loading: false,
    error: "",
}

const comboReducer = (state = initialState, action) => {
     switch (action.type) {
          case "FETCH_COMBO_BEGIN": {
               return {
                    ...state,
                    loading: true
               }
          }
          case "FETCH_COMBO_SUCCESS": {
               return {
                    ...state,
                    combo: action.value,
                    loading: false
               }
          }

          case "FETCH_COMBO_FAILED": {
               return {
                    ...state,
                    error: action.value
               }
          }

          default: return state
     }
}

export default comboReducer;