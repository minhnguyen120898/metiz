import Axios from "axios"

export const getSeatsBegin = () => {
     return {
          type: "GET_SEATS_BEGIN"
     }
}

export const getSeats = () => {
     return async (dispatch) => {
         try {
              const res = await Axios.get(`http://localhost:3333/seats`);

               dispatch(setSeats(res.data));
         } catch(err) {
              dispatch(getSeatsFailure(err));
         }
     }
}

export const setSeats = (data) => {
     return {
          type: "SET_SEATS",
          value: data
     }
}


export const getSeatsFailure = (value) => {
     return {
          type: "GET_SEATS_FAILURE",
          value
     }
}