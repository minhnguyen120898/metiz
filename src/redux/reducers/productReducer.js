
const initialState = {
    products: [],
    productDetails: [],
    filter: [],
    searchValue: "",
    error: "",
    loading: false
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS_BEGIN': {
            return {
               ...state,
               loading: true
            }
        }
        case 'FETCH_PRODUCTSUCCESS': {
            return {
                ...state,
                loading: false,
                products : action.dataProduct,
                filter: action.dataProduct
            }
        }

        case 'FETCH_PRODUCTS_FAILURE': {
            return {
               ...state,
               error: action.value
            }
        }
        case 'COMINGSOON_PRODUCTS' : {
            return {
                ...state,
                filter : action.product,
            }
        }
        case 'SHOWING_PRODUCTS' : {
            return {
                ...state,
                filter : action.product,
            }
        }

        case "FETCH_PRODUCTS_BEGIN": {
            return {
                ...state,
                loading: true
            }
        }

        case "SET_PRODUCTDETAILS" : {
            return {
                ...state,
                loading: false,
                productDetails: action.value,
            }
        }

        case "FETCH_PRODUCTS_FAILURE": {
            return {
                ...state,
                error: action.value,
            }
        }

        case "GET_SEARCH" : {
            return {
                ...state,
                searchValue : action.value
            }
        }
        default: 
            return state;
    }
}

export default productReducer;