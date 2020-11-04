
export const getEmail = (data) => {
    return {
        type: "GET_EMAIL",
        email: data,
    }
}

export const getPassword = (data) => {
    return {
        type: "GET_PASSWORD",
        password: data,
    }
}

export const getAll = (data) => {
    return {
        type: "GET_ALL",
        email : data.email,
        password: data.password,
        address: data.address,
        name : data.name,
        gender: data.gender,
        phone: data.phone,
    }
}

export const getAddress = (data) => {
    return {
        type: "GET_ADDRESS",
        address: data
    }
}

export const getName = (data) => {
    return {
        type: "GET_NAME",
        name: data
    }
}

export const getPhone = (data) => {
    return {
        type: "GET_PHONE",
        phone: data
    }
}


export const getGender = (data) => {
    return {
        type: "GET_GENDER",
        gender: data
    }
}