
const initialState = {
    sliders: [],
    error: false,
    loading: false,
};

const sliderReducer = (state = initialState ,action) => {
    switch (action.type) {
        case "FETCH_SLIDER_BEGIN": {
            return {
                ...state,
                loading: true
            }
        }
        case "FETCH_SLIDER":{
            return {
                ...state,
                
                sliders : action.dataSlider,
                loading: false
            }
        }      
        case "FETCH_SLIDER_FAILURE":{
            return {
                ...state,
                
                error : action.value,
                loading: false
            }
        }      
        default: 
            return state;
    }
}

export default sliderReducer;