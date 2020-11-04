import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { modifyUser } from '../../api/adminApi';
import Footer from '../partials/footer.component';
import HeaderTopbar from '../partials/headerTopBar.coponent';

function Edit(props) {

    const { userId } = useParams();
    const history = useHistory();
    const userEdit = useSelector((state) => state.admin.users.find((e) => e.id === parseInt(userId)));
    console.log(userEdit);
    const [currentUser,setCurrentUser] = useState({...userEdit});
    
    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(currentUser);
        let res = await modifyUser(currentUser);

        if(res.data) {
            alert("Chỉnh sửa thành công!");
            const url = `/admin/users`;
            history.push(url);
        }else {
            alert("Thao tác của bạn thất bại! Vui lòng thử lại!");
        }
    }

    return (
        <div>
            <HeaderTopbar />
            <div className="container">
                <nav aria-label="breadcrumb" className="edit">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/admin/users">Quay lại</Link></li>
                    </ol>
                </nav>
                <div className="profile">      
                    <div className="profile__left">
                        <p className="profile__left__title">Tài khoản</p>
                        <ul className="profile__left__list">             
                            <li className="active">Thông tin tài khoản</li>
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
            <Footer />
        </div>
    );
}

export default Edit;