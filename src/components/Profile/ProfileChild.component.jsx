  
import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { modifyUsers } from '../../api/userApi';


const ProfileChild = () => {

   const profile = JSON.parse(localStorage.getItem("token"));
   console.log(profile);
    
    const [currentUser,setCurrentUser] = useState({...profile});

    if(!localStorage.getItem("token")) {
        return <Redirect to="/Login" />;
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(currentUser);
        let res = await modifyUsers(currentUser);

        if(res.data) {
            localStorage.setItem("token", JSON.stringify(res.data));
            alert("Chỉnh sửa thành công!");
        }else {
            alert("Thao tác của bạn thất bại! Vui lòng thử lại!");
        }
    }
    return (
        <div>
            <div className="profile container">
                <div className="profile__left">
                    <p className="profile__left__title">Tài khoản</p>
                    <ul className="profile__left__list">             
                        <li className="active">Thông tin tài khoản</li>
                        <li><Link to="/changepassword">Thay đổi mật khẩu</Link></li>
                        <li>Lịch sử giao dịch</li>
                    </ul>
                </div>
                <div className="profile__right">
                    <h1>Thông tin tài khoản</h1>
                    <form onSubmit={ onSubmit }>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <label>Họ Tên:</label>
                                <input 
                                    type="text"
                                    value={ currentUser.name }
                                    onChange = { (e) => setCurrentUser({
                                        ...currentUser,
                                        name : e.target.value
                                    })}
                                    required
                                    />
                            </div>
                            <div className="col-12 col-md-6">
                                <label>Giới tính:</label>
                                <select
                                    value={currentUser.gender}
                                    onChange={(e) => setCurrentUser({
                                        ...currentUser,
                                        gender : e.target.value
                                    })}
                                    >
                                    <option value="male">Nam</option>
                                    <option value="female">Nữ</option>
                                </select>
                            </div>
                            <div className="col-12 col-md-6">
                                <label>Email:</label>
                                <input 
                                    type="email"                               
                                    value={ currentUser.email }
                                    onChange={ (e) => setCurrentUser({
                                        ...currentUser,
                                        email : e.target.value
                                    })}
                                    required/>
                            </div>
                            <div className="col-12 col-md-6">
                                <label>Số điện thoại:</label>
                                <input 
                                    type="text"             
                                    value={ currentUser.phone }                  
                                    onChange={ (e) => setCurrentUser({
                                        ...currentUser,
                                        phone : e.target.value
                                    })}
                                    required/>
                            </div>
                            <div className="col-12 col-md-6">
                                <label>Địa chỉ:</label>
                                <input 
                                    type="text"
                                    value={currentUser.address}                                
                                    onChange={ (e) => setCurrentUser({
                                        ...currentUser,
                                        address : e.target.value
                                    }) }
                                    required/>
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
    );
}

export default ProfileChild;