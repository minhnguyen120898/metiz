import instanceAxios from "./axiosClient";

export const modifyUsers = (user) => {
    const url = `/users/${user.id}`;

    return instanceAxios.put(url,user);
}

export const modifyPassword = (id,newPassword) => {
    const url = `/users/${id}`;

    return instanceAxios.put(url,newPassword);
}