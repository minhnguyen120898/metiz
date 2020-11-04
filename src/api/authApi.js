import instanceAxios from "./axiosClient";

export const getUser = (email) => {
    const url = `/users?email=${email}`;
    return instanceAxios.get(url);
}

export const postUserRegister = (user) => {
    const url = `/users`;
    return instanceAxios.post(url,user);
}