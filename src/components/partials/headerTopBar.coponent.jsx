import React from 'react';
import { Redirect, useHistory } from 'react-router';

function HeaderTopbar(props) {
    const history = useHistory();
    
    if(!localStorage.getItem("token")){
       return <Redirect to="/login"/> 
    }
    
    const handleLogout = () => {
        localStorage.removeItem("token");
        history.push("/login");
    }
    
    return (
        <header className="header-topBar">
            <a href="/">
                <img
                    src="https://metiz.vn/static/assets/websites/images/Metiz_logo/METIZ_LOGO_WEB.png"
                    className="header-topBar__img"
                    alt="img-header-top"
                />
            </a>
            <ul className="nav header-topBar__nav">
                <li><a href="/" onClick={handleLogout}>Đăng xuất</a></li>
            </ul>
        </header>
    );
}

export default HeaderTopbar;
