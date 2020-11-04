const initialState = {
    users : [],
    loading : false,
    error : false
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_USERS" : {
            return {
                ...state,
                users : action.users,
            }
        }
        case "REMOVE_USER" : {
            return {
                ...state,
                users : state.users.filter((e) => action.userId !== e.id),
            }
        }
        case "EDIT_USER" : {
            return {
                ...state,
                users : action.userId
            }
        }
        default :
            return state;
    }
}

export default adminReducer;
