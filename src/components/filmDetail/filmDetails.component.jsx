import React, { useEffect } from 'react';
import { Tabs,Tab } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { fetchProductDetails, fetchProductsDetailsBegin } from '../../redux/actions/productAction';

const FilmDetail = ()  => {

    const { productDetails , loading, error } = useSelector(state => state.product);
    console.log(productDetails);

    const {productID } = useParams();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchProductsDetailsBegin());
        const action = fetchProductDetails(productID);
        dispatch(action);
    },[dispatch,productID]);

    return (
        <div className="container">
            {loading ? (
            <p>Loading...</p>
            ) : error ? (
                <p>{error.message}</p>
            ): (
                <div className="detail">
                    <div className="row">
                        <div className="col-3">
                            <img src={productDetails.image} alt=""/>
                            <div className="detail__share">
                                <a href="./">Thích</a>
                                <a href="./">Chia sẻ</a>
                            </div>
                        </div>
                        <div className="col-9 detail__content">
                            <div className="detail__title">
                                <h1 className="detail__title__name">{productDetails.name}</h1>
                                <Link to={`/movie-detail/${productDetails.id}`} className="detail__title__book">Đặt vé</Link>
                            </div>
                            <div className="detail__info">
                                <p><label>Đạo diễn: </label><span className="detail__info__text">{productDetails.id}</span></p>
                                <p><label>Diễn viên: </label><span className="detail__info__text">{productDetails.actor}</span></p>
                                <p><label>Thể loại: </label><span className="detail__info__text">{productDetails.type}</span></p>
                                <p><label>Khởi chiếu: </label><span className="detail__info__text">{productDetails.releaseDate}</span></p>
                                <p><label>Thời lượng: </label><span className="detail__info__text">{productDetails.time}</span></p>
                                <p><label>Ngôn ngữ: </label><span className="detail__info__text">Tiếng Việt với phụ đề Tiếng Anh</span></p>
                                <p><label>Rated: </label><span className="detail__info__text">{productDetails.ratings}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        
            <div className="detail__bottom">
                <Tabs defaultActiveKey="detail" id="uncontrolled-tab-example">
                    <Tab eventKey="detail" title="Detail">
                        Trong buổi họp mặt của nhóm bạn thân, một thành viên bất ngờ đề xuất trò chơi chia sẻ điện thoại nhằm tăng tinh thần “đoàn kết”.
                        Từ đó, những góc khuất của từng người dần hé lộ và khiến cho mối quan hệ vốn khắng khít của họ bắt đầu lay chuyển.
                    </Tab>
                    <Tab eventKey="trailer" title="Trailer">

                    </Tab>
                    <Tab eventKey="evaluate" title="Evaluate">
                        <Link href="./" className="detail__title__book d-inline-block">Đặt vé</Link>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}

export default FilmDetail;