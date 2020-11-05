import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTicket } from '../../redux/actions/ticketsAction';

import Footer from '../partials/footer.component';
import Header from '../partials/Header/header.component';

function Transaction() {

    const {ticketClients,loading , error} = useSelector((state) => state.ticketClient);

    const dispatch = useDispatch();
    useEffect(() => {
        const email = JSON.parse(localStorage.getItem("token")).email;
        console.log(email);
        dispatch(fetchTicket(email));
    }, [dispatch])
    
    return (
        <>
            <div className="">
                <Header />
                <div className="profile container">
                    <div className="profile__left">
                        <p className="profile__left__title">Tài khoản</p>
                        <ul className="profile__left__list">             
                            <li><Link to="/profile">Thông tin tài khoản</Link></li>
                            <li><Link to="/changepassword">Thay đổi mật khẩu</Link></li>
                            <li className="active"><Link to="/transaction">Lịch sử giao dịch</Link></li>
                        </ul>
                    </div>
                    <div className="profile__right">
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Ngày</th>
                                    <th>Movie Name</th>
                                    <th>Movie Cinema</th>
                                    <th>Time</th>
                                    <th>Seat</th>
                                    <th>Combo</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading?(
                                    <p>Loading...</p>
                                ): error ? (
                                    <p>{error.message}</p>
                                ) : (
                                    ticketClients.map((e, i) => (
                                        <tr key={i}>
                                            <td>{e.id}</td>
                                            <td>{e.timeSet}</td>
                                            <td>{e.movieName}</td>
                                            <td>{e.movieCinema}</td>
                                            <td>{e.movieTime}</td>
                                            <td>{e.seat}</td>
                                            <td>{e.totalCombo1 ? "Combo 1" : e.totalCombo2 ? "Combo 2" : ""}</td>
                                            <td>{e.totalTicket+e.totalCombo1+e.totalCombo2}</td>
                                        </tr>
                                    )) 
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Transaction;