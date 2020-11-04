import Axios from "axios";

export const fetchProducts = (valueSearch) => {

    let URLparams = "";
    URLparams+= (valueSearch ? (`&name_like=${valueSearch}`) : ""); 
    
    return async (dispatch) => {
        try {
            const res = await Axios.get(`http://localhost:3333/products?${URLparams}`);
    
            dispatch(setProduct(res.data));
        } catch(err) {
            dispatch(fetchProductsFailure(err));
        }
    };
}

export const fetchProductsBegin = () => {
    return {
        type: "FETCH_PRODUCTS_BEGIN"
    }
}

export const fetchProductsFailure = (value) => {
    return {
        type: "FETCH_PRODUCTS_FAILURE",
        value
    }
}

export const fetchProductsDetailsBegin = () => {
    return {
        type: "FETCH_PRODUCTS_BEGIN",
        
    }
}

export const fetchProductDetails = (productId) => {
    console.log(productId);
    return async (dispatch) => {
        try {
            const res = await Axios.get(`http://localhost:3333/products/${productId}`);

            dispatch(setProductDetails(res.data));
        } catch(err) {
            dispatch(fetchProductsDetailsFailure(err));
        }
    }
}


export const fetchProductsDetailsFailure = (value) => {
    return {
        type: "FETCH_PRODUCTS_BEGIN",
        value
    }
}

export const setProductDetails = (data) => {
    return {
        type: "SET_PRODUCTDETAILS",
        value: data
    }
}

export const setProduct = (product) => {
    return {
      type: "FETCH_PRODUCTSUCCESS",
      dataProduct: product,
    };
};

export const commingSoonProduct = (product) => {
    return {
        type: "COMINGSOON_PRODUCTS",
        product,
    }
}

export const showingProduct = (product) => {
    return {
        type: "SHOWING_PRODUCTS",
        product,
    }
}

export const getSearch = (searchValue) => {
    return {
        type: "GET_SEARCH",
        value: searchValue,
    }
}