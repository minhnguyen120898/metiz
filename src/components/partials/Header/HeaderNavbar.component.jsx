import React from 'react';
import { useTranslation } from "react-i18next";
import { Link, Redirect} from 'react-router-dom';

const HeaderNavbar = () => {
    const { t } = useTranslation("common");
    const handleLogout = () => {
        localStorage.removeItem("token");
        return <Redirect to="/" />;
    }
     return (
         <div className="header__container">
                <Link to="/" className="header__logo">
                    <img src="https://metiz.vn/static/assets/websites/images/Metiz_logo/METIZ_LOGO_WEB.png" alt="logo"/>
                </Link>
                <div className="header__nav">
                    <ul className="nav header__nav__left">
                        <li ><a href="./">{t("navbar.thecinema")}</a></li>
                        <li className="header__dropdown">
                                    <p>{t("navbar.movies")}</p>
                                    <div className="header__dropdown-menu">
                                        <Link to="/showing">Phim đang chiếu</Link>
                                        <Link to="/coming">Phim sắp chiếu</Link>
                                    </div>
                                </li>                  
                        <li><Link to="/sale" >{t("navbar.sale")}</Link></li>
                    </ul>
                    { !localStorage.getItem("token") ?
                                (<ul className="nav header__nav__right"> 
                                    <li><Link to="/login">{t("navbar.login")}</Link></li>
                                    <li><Link to="/register">{t("navbar.registration")}</Link></li>
                                </ul>) :
                                (<ul className="nav header__nav__right">
                                    <li><Link to="/profile">{t("navbar.person")}</Link></li>
                                    <li><a href="/" onClick={handleLogout}>{t("navbar.logout")}</a></li>
                                </ul>)                              
                            }          
                    
                    <div className="clearfix"></div>
                </div>
            </div>
     )
}

export default HeaderNavbar;