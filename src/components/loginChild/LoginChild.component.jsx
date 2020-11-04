import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router';
import { getUser } from '../../api/authApi';
import {  getEmail, getPassword } from '../../redux/actions/loginAction';

const LoginChild = () => {

    const { email, password } = useSelector(state => state.login);
    const dispatch = useDispatch();
    const history = useHistory();
   
    const onSubmit = async (event) => {
        event.preventDefault();
        
        let res = await getUser(email);
        console.log(res);
        if(res.data.length) {
            const decode = atob(res.data[0].password);
            if(decode === password) {
                localStorage.setItem("token",JSON.stringify({
                        ...res.data[0],
                }));                
                if(res.data[0].email === "admin@gmail.com") {
                    history.push("/admin/users");
                    alert("Đăng nhập thành công!");
                }else{
                    history.push("/");
                    alert("Đăng nhập thành công!");
                }
            }else {
                alert("Mật khẩu không đúng! Vui lòng nhập lại")
            }
        }else {
            alert("Đăng nhập không thành công!");
        }
    }
    
    if(localStorage.getItem("token")){
        return <Redirect to="/"/>
    }

    return (
        <div>
            <div className="login">
                <p className="login__title">Đăng nhập</p>
                <form onSubmit={ onSubmit }>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <label htmlFor="email">Email:</label>
                            <input 
                                type="email"                               
                                value={ email }
                                onChange={ (e) => dispatch(getEmail(e.target.value)) }
                                placeholder="Nhập email ở đây" 
                                required/>
                        </div>
                        <div className="col-12 col-md-6">
                            <label htmlFor="password">Mật Khẩu:</label>
                            <input 
                                type="password"                                
                                value= { password } 
                                onChange={ (e) => dispatch(getPassword(e.target.value)) }
                                placeholder="Nhập mật khẩu ở đây" 
                                required/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <button className="login__btn-login" type="submit">Đăng nhập</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <a href="./" className="login__forgetPassword">Tìm lại mật khẩu</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginChild;