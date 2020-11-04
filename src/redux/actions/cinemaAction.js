import Axios from "axios";

export const fetchCinema = () => {
     return async (dispatch) => {
          try {
               const res = await Axios.get(`http://localhost:3333/cinemas`);

               dispatch(setCinema(res.data));
          } catch(error) {
               dispatch(fetchCinemaError(error));
          }
     }
}

export const fetchCinemaBegin = () => {
  return {
    type: "FETCHCINEMA_BEGIN",
  };
};

export const fetchCinemaError = (value) => {
     return {
          type: "FETCHCINEMA_ERROR",
          value
     }
}

export const setCinema = (data) => {
     return {
          type: "FETCHCINEMA_SUCCESS",
          value: data
     }
}