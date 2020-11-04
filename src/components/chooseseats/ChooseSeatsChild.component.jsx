import Axios from "axios";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {
  getMovieCinema,
  getMovieImage,
  getMovieName,
  getMovieTime,
  getTimeSet,
  getCurrentChooseSeat,
  getTicket,
  getChoosedSeat,
} from "../../redux/actions/currentChoiceAction";
import { getSeats, getSeatsBegin } from "../../redux/actions/seatsAction";
import InfoPayment from "../infopayment/InfoPayment.component";

const ChooseSeatsChild = () => {
  const { t } = useTranslation("common");

  const dispatch = useDispatch();
  const location = useLocation();

  // const { seats, loading, error } = useSelector((state) => state.seats);
  const { cinemas, loading, error } = useSelector((state) => state.cinemas);
  const { currentChooseSeat, choosedSeat } = useSelector(
    (state) => state.currentChoose
  );

  useEffect(() => {
    dispatch(getSeatsBegin());
    dispatch(getSeats());

    dispatch(getTicket());

    dispatch(getTimeSet());
    dispatch(getMovieName());
    dispatch(getMovieCinema());
    dispatch(getMovieTime());
    dispatch(getMovieImage());
  }, [dispatch]);

  useEffect(() => {
    async function getAllTickets() {
      const allTickets = await Axios.get(`http://localhost:3333/tickets`);
      
      const allSeat = [];
      allTickets.data.forEach((el) => el.seat.forEach((e) => allSeat.push(e)));
      console.log(allTickets.data);
      dispatch(getChoosedSeat(allSeat));
    }
    getAllTickets();
  }, [dispatch]);

  const handleChooseSeat = (seat) => {
    dispatch(getCurrentChooseSeat(seat.codeSeat));
  };

  return (
    <div>
      <div className="breadcrumbs">
        <div className="container">
          <div className="breadcrumbs__link">
            <Link to="/">{t("breadcrumbs.home")}</Link>
            <Link to="/">{t("breadcrumbs.listDetails")}</Link>
            <Link to="/choose-tickets">{t("breadcrumbs.buyTicket")}</Link>
            <Link to={location.pathname}>{t("breadcrumbs.chooseSeats")}</Link>
          </div>
        </div>
      </div>
      <div className="choose-seat">
        <div className="container">
          <div className="choose-seat__grid">
            <div className="frame-choose">
              <div className="frame-choose__inner">
                <h3 className="frame-choose__title">
                  {t("titleBooking.chooseSeats")}
                </h3>
                <div className="choose-seat__scope">
                  <div className="choose-seat__row">
                    {loading ? (
                      <p>Loading...</p>
                    ) : error ? (
                      <p>{error.message}</p>
                    ) : (
                      cinemas.map((e) => (
                        e.session.map((el) => (
                          el.seats.map((ul, id) => (
                            <button
                              key={id}
                              className={
                                choosedSeat &&
                                choosedSeat.findIndex((c) => c === ul.codeSeat) !==
                                  -1
                                  ? "choosed"
                                  : currentChooseSeat.findIndex(
                                      (s) => s === ul.codeSeat
                                    ) !== -1
                                  ? "active"
                                  : ""
                              }
                              disabled={
                                choosedSeat &&
                                choosedSeat.findIndex((c) => c === ul.codeSeat) !==
                                  -1
                              }
                              onClick={() => handleChooseSeat(ul)}
                            >
                              {ul.codeSeat}
                            </button>
                          ))
                        ))
                      ))
                    )}
                  </div>
                  <div className="screen">{t("chooseSeat.screen")}</div>
                  <div className="seats-cinema">
                    <span className="seat-cinema-selected">
                      {t("chooseSeat.selected")}
                    </span>
                    <span className="seat-cinema-sold">
                      {t("chooseSeat.sold")}
                    </span>
                    <span className="seat-cinema-choose">
                      {t("chooseSeat.choose")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <InfoPayment />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseSeatsChild;
