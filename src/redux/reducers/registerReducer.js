const initialState = {
    name : '',
    email : '',
    phone : '',
    address : '',
    gender : '',
    password : '',
};

const registerReducer = (state = initialState , action) => {
    switch (action.type) {
        case "GET_EMAIL" : {
            return {
                ...state,
                email : action.email,
            }
        }
        case "GET_PASSWORD" : {
            return {
                ...state,
                password : action.password,
            }
        }
        case "GET_ADDRESS" : {
            return {
                ...state,
                address : action.address,
            }
        }
        case "GET_NAME" : {
            return {
                ...state,
                name : action.name,
            }
        }
        case "GET_PHONE" : {
            return {
                ...state,
                phone : action.phone,
            }
        }
        case "GET_GENDER" : {
            return {
                ...state,
                gender : action.gender,
            }
        }
        case "GET_ALL" : {
            return {
                ...state,
                email : action.email,
                password: action.password,
                address: action.address,
                name : action.name,
                gender: action.gender,
                phone: action.phone,
            }
        }

        default:
            return state;
    }
}

export default registerReducer;