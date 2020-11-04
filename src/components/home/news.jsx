import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchNews } from '../../redux/actions/newsAction';

const  News = () => {
    const dispatch = useDispatch(); 
    const { news, loading, error} = useSelector(state => state.news);   
    const {t} = useTranslation("common");
    
    useEffect(() => {
        dispatch(fetchNews());
    },[dispatch])

    return (
        <div className="news container-fluid">
            <div className="container">
                <h2 className="news__title">{t("sale.promotion")}</h2>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="news__box">
                            <h3>{t("sale.promotion-atr")}</h3>
                            <p>{t("sale.info")}</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="news__show-more">
                            <a href="./">{t("sale.see")}</a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {loading ? (
                        <p>loading...</p> 
                    ): error ? (
                        <p>{error.message}</p>     
                    ):(
                        news.slice(0,4) 
                        .map((e,i) => (
                            <div className="col-6 col-md-3 news__img" key={i}>
                                <img src={e.image} alt=""/>
                                <Link to={`sale/${e.id}`} className="news__img-wrap">
                                    <p>{t("sale.detail")}</p>
                                    <h4 className="btn-details">{t("sale.btn")}</h4>
                                </Link>
                            </div>   
                        ))
                    )}
                </div>
                
            </div>
        </div>
    );
}

export default News;