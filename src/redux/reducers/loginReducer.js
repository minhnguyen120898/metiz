const initialState = {
    email : "",
    password : "",
    isLoggin : false
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_ALL" : {
            return {
                email: action.email,
                password: action.password
            }
        }
        case "GET_EMAILLOGIN" : {
            return {
                ...state,
                email : action.email,
            }
        }
        case "GET_PASSWORDLOGIN" : {
            return {
                ...state,
                password : action.password,
            }
        }    
        default:
            return state;
    }
}
export default loginReducer;