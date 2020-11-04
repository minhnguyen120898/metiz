import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { checkShowingProduct } from '../../common/filterProducts';
import { fetchProducts,fetchProductsBegin, getSearch } from '../../redux/actions/productAction';

const ShowingMovies = () => {

    const { products, loading, error, searchValue } = useSelector(state => state.product);
    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(fetchProducts(searchValue));
    },[dispatch,searchValue]);
  
    const handleSearchItem = (value) => {
        dispatch(fetchProductsBegin());
          const action = getSearch(value);

          dispatch(action);
     };

    return (
        <div className="container">
            <div className="listMovies__top">
                <h1 className="listMovies__title">Phim đang chiếu</h1>
                <div className="listMovies__search">
                    <label htmlFor="">Tìm Kiếm:</label>
                    <input    
                        placeholder="Tìm kiếm phim ở đây"
                        
                        onChange={(e) => handleSearchItem(e.target.value)}
                    />
                </div>
            </div>
            <div className="listMovies">            
                {loading ? (
                <p>Loading...</p>
                ) : error ? (
                    <p>{error.message}</p>
                ): (
                    products.filter((product) => checkShowingProduct(product.releaseDate))
                    .map((e, i) => (                 
                        <div className="listMovies__item" key={i}>
                            <Link to={`/movie-detail/${e.id}`} className="listMovies__link">
                                <img src={e.image} alt="imgMovies"/>
                            </Link> 
                            <p className="listMovies__name">{e.name}</p>
                            <p className="listMovies__type">Thể loại: {e.type}</p>
                            <p className="listMovies__time">{e.time} phút</p>
                            <p className="listMovies__premiere">Khởi chiếu: {e.releaseDate}</p>
                        </div>                       
                    ))                   
                )}
             </div>
        </div>
    );
}

export default ShowingMovies;