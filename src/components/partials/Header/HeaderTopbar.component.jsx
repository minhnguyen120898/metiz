import React from 'react';

import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from 'react-redux';

import {getChange} from '../../../redux/actions/i18Action';

const HeaderTopBar = () => {
    const { t, i18n } = useTranslation("common");
    const dispatch = useDispatch();

    const {status} = useSelector((state) => state.i18n);
    const handleVi = () => {
        i18n.changeLanguage("vi");
        dispatch(getChange(true));
        console.log("bac");
    };

    const handleEn = () => {
        i18n.changeLanguage("en");
        dispatch(getChange(false));
    };
     return (
          <div className="header__info">
                <div className="header__info__phone">
                    Hotline: <a href="tel:0236 3630 689">0236 3630 689</a>
                </div>
                <div className="header__info__opentime">
                    {t("topbar.opendoor")}
                </div>
                <div className="topbar__language">
                        <button
                            className={
                            status === true
                                ? "topbar__language--vn active"
                                : "topbar__language--vn"
                            }
                            onClick={handleVi}
                        >
                            VN
                        </button>
                        <button
                            className={
                            status === false
                                ? "topbar__language--en active"
                                : "topbar__language--en"
                            }
                            onClick={handleEn}
                        >
                            EN
                        </button>
                    </div>
            </div>
     )
}

export default HeaderTopBar;