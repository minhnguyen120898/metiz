import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import {
  fetchProductDetails,
  fetchProductsDetailsBegin
} from "../../redux/actions/productAction";
import ShowTime from "./ShowTime.component";


const MovieDetailChild = () => {
  const { t } = useTranslation("common");
  const { productId } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const { productDetails, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProductsDetailsBegin());
    const action = fetchProductDetails(productId);
    dispatch(action);
  }, [dispatch, productId]);

  return (
    <div>
      <div className="breadcrumbs">
        <div className="container">
          <div className="breadcrumbs__link">
            <Link to="/">{t("breadcrumbs.home")}</Link>
            <Link to={location.pathname}>{t("breadcrumbs.listDetails")}</Link>
          </div>
        </div>
      </div>
      <div className="movie-detail">
        <div className="container">
          <div className="movie-detail__grid">
            <div className="movie-detail__feature">
              {loading ? (
                <p>Loading...</p>
              ) : error ? (
                <p>{error.message}</p>
              ) : (
                <div className="list-movie__box" key={productDetails.id}>
                    <div className="list-movie__poster">
                      <img src={productDetails.image} alt="images" />
                    </div>
                    <div className="list-movie__content">
                      <h3 className="list-movie__title">
                        <Link to="/">{productDetails.name}</Link>
                      </h3>
                      <div className="list-movie__rating">
                        <span className="list-movie__rating--icon">
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i
                            className={
                              productDetails.ratings >= 2 ? "fa fa-star" : "fa fa-star-o"
                            }
                            aria-hidden="true"
                          ></i>
                          <i
                            className={
                              productDetails.ratings >= 3 ? "fa fa-star" : "fa fa-star-o"
                            }
                            aria-hidden="true"
                          ></i>
                          <i
                            className={
                              productDetails.ratings >= 4 ? "fa fa-star" : "fa fa-star-o"
                            }
                            aria-hidden="true"
                          ></i>
                          <i
                            className={
                              productDetails.ratings >= 5 ? "fa fa-star" : "fa fa-star-o"
                            }
                            aria-hidden="true"
                          ></i>
                        </span>
                      </div>
                      <div className="list-movie__time">
                        <span className="list-movie__time--slot">G</span>
                        <span className="list-movie__time--icon">
                          <i className="fa fa-clock-o" aria-hidden="true"></i>
                        </span>
                        <span className="list-movie__time--text">
                          {productDetails.time} {t("movieDetail.minutes")}
                        </span>
                      </div>
                      <div className="list-movie__info">
                        <label className="release-date">
                          {t("movieDetail.releaseDate")}:
                        </label>
                        <span className="text">{productDetails.releaseDate}</span>
                      </div>
                      <div className="list-movie__info">
                        <label className="release-date">
                          {t("movieDetail.genre")}:
                        </label>
                        <span className="text">{productDetails.type}</span>
                      </div>
                      <div className="list-movie__info">
                        <label className="release-date">
                          {t("movieDetail.actor")}:
                        </label>
                        <span className="text">{productDetails.actor}</span>
                      </div>
                      <div className="list-movie__info">
                        <label className="release-date">
                          {t("movieDetail.director")}:
                        </label>
                        <span className="text">{productDetails.producer}</span>
                      </div>
                      <div className="list-movie__button">
                        <Link to="/" className="list-movie__trailer">
                          {t("movieDetail.trailer")}
                        </Link>
                      </div>
                    </div>
                  </div>
              )}
              <ShowTime />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailChild;
