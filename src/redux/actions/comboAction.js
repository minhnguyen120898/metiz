import Axios from "axios";

export const fetchCombo = () => {
     return async (dispatch) => {
          try {
               const res = await Axios.get(`http://localhost:3333/combo`);

               dispatch(setCombo(res.data));
          } catch(err) {
               dispatch(fetchComboFailed(err));
          }
     }
}

export const setCombo = (data) => {
     return {
          type: "FETCH_COMBO_SUCCESS",
          value: data
     }
}

export const fetchComboFailed = (value) => {
     return {
          type: 'FETCH_COMBO_FAILED',
          value
     }
}

export const fetchComboBegin = () => {
     return {
          type: "FETCH_COMBO_BEGIN"
     }
}