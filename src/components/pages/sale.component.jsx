import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchNews } from '../../redux/actions/newsAction';
import Footer from '../partials/footer.component';
import Header from '../partials/Header/header.component';

const Sale = () => {

     const dispatch = useDispatch();
     const {news, loading, error} = useSelector(state => state.news);
     const {t} = useTranslation("common");


     useEffect(() => {
          dispatch(fetchNews());
     },[dispatch])
     return (
          <div className="wrapper">
               <Header/>
               <div className="news container-fluid">
                  <div className="container">
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
               <Footer />
          </div>
     )
}


export default Sale;