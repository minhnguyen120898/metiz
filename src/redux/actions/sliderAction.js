import slidersApi from "../../api/sliderApi";

export const fetchSliderBegin = () => {
    return {
        type: "FETCH_SLIDER_BEGIN"
    }
}

export const fetchSlider = () => {
    
    return async (dispatch) => {
        try {
            const res = await slidersApi.getSlides();

    
            dispatch(setSlider(res.data));
        } catch(err) {
            dispatch(fetchSliderFailure(err));
        }
    };
}

export const setSlider = (sliders) => {
    return {
        type: 'FETCH_SLIDER',
        dataSlider: sliders,
    }
}


export const fetchSliderFailure = (value) => {
    return {
        type: 'FETCH_SLIDER_FAILURE',
        value
    }
}