import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const {t} = useTranslation("common");
    return (
        <footer className="footer container-fluid">
            <div className="container">
                <div className="list-social">
                <ul className="list-social__inline">
                    <li>
                        <a href="./">
                            <img src="https://metiz.vn/static/assets/websites/images/social/icon_facebook_hover.png" alt="social"/>
                        </a>
                    </li>
                    <li>
                        <a href="./">
                            <img src="https://metiz.vn/static/assets/websites/images/social/icon_instagram_hover.png" alt="social"/>
                        </a>
                    </li>
                    <li>
                        <a href="./">
                            <img src="https://metiz.vn/static/assets/websites/images/social/icon_youtube_hover.png" alt="social"/>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="container">
                <div className="row footer__content">
                    <div className="col-12 col-sm-4">
                        <img src="https://metiz.vn/static/assets/websites/images/logo_footer.png" alt=""/>
                        <h3 className="footer__address"> 
                        {t("footer.address")}
                        </h3>
                    </div>
                    <div className="col-12 col-sm-4">
                        <h2>METIZ CINEMA</h2>
                        <ul className="list">
                            <li><a href="./">{t("footer.recruit")}</a></li>
                            <li><a href="./">{t("footer.introduce")}</a></li>
                            <li><a href="./">{t("footer.contact")}</a></li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-4">
                        <h2>{t("footer.title")}</h2>
                        <ul className="list">
                            <li><a href="./">{t("footer.rules")}</a></li>
                            <li><a href="./">{t("footer.question")}</a></li>
                            <li><a href="./">{t("footer.transac-terms")}</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row footer__content2">
                    <div className="col-12 col-sm-9">
                        <p>Tên Doanh Nghiệp: Công Ty TNHH KHỞI PHÁT.</p>
                        <p>Giấy CNĐKKD: 0400668112 - Ngày cấp: 05/11/2008. Đăng ký thay đổi lần thứ 11 ngày 21/12/2016</p>
                        <p>Cơ quan cấp: Phòng Đăng ký kinh doanh - Sở kế hoạch và đầu tư Thành phố Đà Nẵng</p>
                        <p>Địa chỉ đăng ký kinh doanh: 22 đường 2/9, Phường Bình Hiên, Q.Hải Châu, Tp.Đà Nẵng, Việt Nam.</p>
                        <p>Điện thoại: <a href="tel:0236 3630 689">0236 3630 689</a></p>
                    </div>
                    <div className="col-12 col-sm-3">
                        <a href="./">
                            <img className="icon-notify" src="https://metiz.vn/static/assets/websites/images/icon-notify.png" alt=""/>
                        </a>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-12 col-sm-4">
                        <p>MỘT SẢN PHẨM ĐẾN TỪ KHỞI PHÁT, LTD.</p>
                    </div>
                    <div className="col-12 col-sm-4">
                        <img className="footer__endImg" src="https://metiz.vn/static/assets/websites/images/logo_bottom.png" alt=""/>
                    </div>
                    <div className="col-12 col-sm-4">
                        <p className="text-right">BẢN QUYỀN © 2017 Metiz CINEMA</p>
                    </div>
                </div>
            </div>
            </div>
        </footer>
    );
}

export default Footer;