import Axios from "axios";
import saleApi from "../../api/SaleApi";

export const fetchNews =  () => {
   
    return async (dispatch) => {
        const res = await saleApi.getSale();

        dispatch(setNews(res.data));
    }
}

export const getSaleDetails = (saleId) => {
    console.log(saleId);
    return async (dispatch) => {
        const res = await Axios.get(`http://localhost:3333/news/${saleId}`);

        dispatch(setSaleDetails(res.data));
        console.log(res.data)
    }
}

export const getSaleDetailsBegin = () => {
    return {
        type: "GET_DETAILS_EMPTY"
    }
}
export const setNews = (news) => {
    return {
        type: "SET_NEWS",
        newsData : news
    }
}

export const setSaleDetails = (data) => {
    console.log(data);
    return {
        type: "SET_SALE_DETAILS",
        value: data
    }
}