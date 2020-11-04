import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Fade } from 'react-slideshow-image';
import { fetchSlider, fetchSliderBegin } from '../../redux/actions/sliderAction';

const Sliders = () => {
    const dispatch = useDispatch();
    const { sliders , error , loading } = useSelector(state => state.slider);
    useEffect(() => {
        dispatch(fetchSliderBegin());
        dispatch(fetchSlider());
    },[dispatch]);  

    return (
        <div className="slider container">
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error.message}</p>
            ) : (
                <Fade>
                    {sliders.map((e, i) => (
                        <div className="slider__image" key={i}>
                            <img src={e.image} alt="images" />
                        </div>
                    ))}
                </Fade>
            )}
        </div>
    );
}

export default Sliders;