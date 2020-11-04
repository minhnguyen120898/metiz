import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSaleDetails, getSaleDetailsBegin } from '../../redux/actions/newsAction';
import Footer from '../partials/footer.component';
import Header from '../partials/Header/header.component';


const SaleDetails = () => {
     const dispatch = useDispatch();
     const {saleDetail, loading, error} = useSelector(state => state.news);

     const {saleId} = useParams();

     console.log(saleDetail);

     useEffect(() => {
          dispatch(getSaleDetailsBegin());
          dispatch(getSaleDetails(saleId));
     }, [dispatch, saleId]);
     return (
          <div className="wrapper">
               <Header/>
               <main className="bg-movies">
                    {loading ? (
                         <p>Loading...</p>
                    ) : error ? (
                         <p>{error.message}</p>
                    ): (
                         <div className="sale-detail__grid">
                              <div className="sale-detail__feature">
                                   <div className=" news__img" key={saleDetail.id}>
                                        <img src={saleDetail.image} alt=""/>
                                   </div>  
                              </div>
                              <div className="sale-detail__sidebar">
                                   <h1>XEM PHIM METIZ, NHẬN QUÀ NGỌT NGÀO DỊP LỄ 20/10</h1>
                                   <p>
                                        Để chào đón ngày cả thế giới hướng về phụ nữ, hướng về một nửa thế giới xinh xắn và tuyệt vời, 
                                        Metiz mang đến chương trình XEM PHIM METIZ, NHẬN QUÀ NGỌT NGÀO, 
                                        dành tặng 200 chiếc túi thơm cho các khách hàng nữ đến Metiz xem phim vào dịp lễ 20/10 này.
                                   </p>
                                   <p>
                                        Vào chủ nhật ngày 20/10/2019, 200 bạn nữ đầu tiên khi đến xem phim tại Metiz sẽ được nhận phần quà là những chiếc túi thơm Lavender xinh xắn
                                   </p>
                                   <p>
                                        Hy vọng món quà này sẽ thay Metiz gửi đến tất cả các cô gái 
                                        một ngày lễ 20/10 ý nghĩa và tuyệt vời bên người thân, người yêu và bạn bè nhé.
                                   </p>
                              </div>
                         </div>
                    )}
               </main>
               <Footer/>
          </div>
     )
}
export default SaleDetails;
