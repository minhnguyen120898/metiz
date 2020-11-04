import { getUsers } from "../../api/adminApi";

export const fetchUsers = () => {
    return async (dispatch) => {
        try {
            const res = await getUsers();
            dispatch(getUsersAction(res.data));
        } catch (error) {
            getUsersFailed(error);
        }
        
    };
}

export const getUsersAction = (users) => {
    return {
        type: "GET_USERS",
        users,
    }
}

export const removeUser = (userId) => {
    return {
        type : "REMOVE_USER",
        userId
    }
}

export const editUser = (userId) => {
    return {
        type : "EDIT_USER",
        userId
    }
}

export const getUsersFailed = (error) => {
    return {
        type: "GET_USERSFAILED",
        error,
    }
}
