
const initialState = {
    news: [],
    saleDetail: [],
    loading: false,
    error: false,
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_NEWS" : {
            return {
                ...state,
                news : action.newsData
            }
        }
        case "SET_SALE_DETAILS": {
            
            return {
                ...state,
                loading: false,
                saleDetail: action.value
            }
        }

        case "GET_DETAILS_EMPTY": {
            return {
                ...state,
                loading: true
            }
        }
        default : {
            return state;
        }
    }
}

export default newsReducer;