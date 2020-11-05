import instanceAxios from "./axiosClient";

export const getTickets = (email) => {
    const url = `/tickets?&email=${email}`;

    return instanceAxios.get(url);
}