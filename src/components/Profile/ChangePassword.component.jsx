import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import { modifyPassword } from '../../api/userApi';
import Header from '../partials/Header/header.component';
import Footer from '../partials/footer.component';

const ChangePassword = () => {

    const profile = JSON.parse(localStorage.getItem("token"));
    const [showCurrent, setshowCurrent] = useState(false);
    const [showNew, setShowNew] = useState(false);
    const [newPassword,setNewPassword] = useState({...profile});

    if(!localStorage.getItem("token")) {
        return <Redirect to="/Login" />;
    }

    const checkCurrentPassword = (value) => {
        const decode = atob(profile.password);
        if (value === decode) {
            setshowCurrent(false);
        }else {
            setshowCurrent(true);
        }
    }

    const checkNewPassword = (value) => {
        if(value === newPassword.password) {
            setShowNew(false);
        }else {
            setShowNew(true);
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const decodeNewPass = btoa(newPassword.password);
        let res = await modifyPassword(profile.id,{
            ...newPassword,
            password : decodeNewPass
        });
        console.log(res);
        if(res.data) {
            localStorage.setItem("token", JSON.stringify(res.data));
            alert("Đổi mật khẩu thành công!");
        }else {
            alert("Thao tác của bạn thất bại! Vui lòng thử lại!");
        }
    }
    return (
        <div className="wrapper">
            <Header />
            <div className="bg-movies">
                 <div className="profile container">
                <div className="profile__left">
                    <p className="profile__left__title">Tài khoản</p>
                    <ul className="profile__left__list">             
                        <li><Link to="/profile">Thông tin tài khoản</Link></li>
                        <li className="active"><Link to="/changepassword">Thay đổi mật khẩu</Link></li>
                        <li><Link to="/transaction">Lịch sử giao dịch</Link></li>
                    </ul>
                </div>
                <div className="profile__right">
                    <h1>Thay đổi mật khẩu</h1>
                    <form onSubmit={ onSubmit }>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <label>Mật khẩu cũ:</label>
                                <input 
                                    type="password"
                                    onChange = { (e) => checkCurrentPassword(e.target.value)}
                                    required
                                    />
                                <Alert show={showCurrent} variant="danger">
                                    <p>Mật khẩu hiện tại không trùng khớp!!</p>
                                </Alert>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                    <label>Mật khẩu mới:</label>
                                    <input 
                                        type="password"
                                        onChange = { (e) => setNewPassword({
                                            ...newPassword,
                                            password: e.target.value
                                        })}
                                        required
                                        />
                                </div>
                                <div className="col-12 col-md-6">
                                    <label>Nhập lại mật khẩu mới:</label>
                                    <input 
                                        type="password"
                                        onChange = { (e) => checkNewPassword(e.target.value)}
                                        required
                                        />
                                    <Alert show={showNew} variant="danger">
                                        <p>Mật khẩu nhập lại không trùng khớp!!</p>
                                    </Alert>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 text-center">
                                <button className="register__btn-register" type="submit">Lưu</button>
                            </div>
                        </div>
                    </form>     
                </div>
            </div>
            </div>
            <Footer />
        </div>
    );
}

export default ChangePassword;