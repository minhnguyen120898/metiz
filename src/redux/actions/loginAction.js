export const getEmail = (data) => {
    return {
        type: "GET_EMAILLOGIN",
        email: data,
    }
}

export const getPassword = (data) => {
    return {
        type: "GET_PASSWORDLOGIN",
        password: data,
    }
}

export const getAll = (data) => {
    return {
        type: "GET_ALL",
        email : data.email,
        password: data.password
    }
}