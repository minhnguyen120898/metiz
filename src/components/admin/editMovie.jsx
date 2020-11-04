import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {  useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { modifyMovie     } from '../../api/adminApi';
import Footer from '../partials/footer.component';
import HeaderTopbar from '../partials/headerTopBar.coponent';

function EditMovie() {

    const { movieId } = useParams();
    const history = useHistory();
    const movieEdit = useSelector((state) => state.adminMovie.movies.find((e) => e.id === parseInt(movieId)));
    console.log(movieEdit);
    const [currentMovie,setCurrentMovie] = useState({...movieEdit});
    
    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(currentMovie);
        let res = await modifyMovie(currentMovie);

        if(res.data) {
            alert("Chỉnh sửa thành công!");
            const url = `/admin/movies`;
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
                        <li className="breadcrumb-item"><Link to="/admin/movies">Quay lại</Link></li>
                    </ol>
                </nav>
                <div className="profile">
                    <div className="profile__left">
                        <p className="profile__left__title">Thông Tin Phim</p>
                        <ul className="profile__left__list">             
                            <li className="active">Thông tin phim</li>
                        </ul>
                    </div>
                    <div className="profile__right">
                        <h1>Thông tin chi tiết</h1>
                        <form onSubmit={ onSubmit }>
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <label>Name</label>
                                    <input 
                                        type="text"
                                        value={ currentMovie.name }
                                        onChange = { (e) => setCurrentMovie({
                                            ...currentMovie,
                                            name : e.target.value
                                        })}
                                        required
                                        />
                                </div>
                                <div className="col-12 col-md-6">
                                    <label>Image</label>
                                    <input 
                                        type="text"
                                        value={ currentMovie.image }
                                        onChange = { (e) => setCurrentMovie({
                                            ...currentMovie,
                                            image : e.target.value
                                        })}
                                        required
                                        />
                                </div>
                                <div className="col-12 col-md-6">
                                    <label>Ratings</label>
                                    <input 
                                        type="text"                               
                                        value={ currentMovie.ratings }
                                        onChange={ (e) => setCurrentMovie({
                                            ...currentMovie,
                                            ratings : e.target.value
                                        })}
                                        required/>
                                </div>
                                <div className="col-12 col-md-6">
                                    <label>Time</label>
                                    <input 
                                        type="text"             
                                        value={ currentMovie.time }                  
                                        onChange={ (e) => setCurrentMovie({
                                            ...currentMovie,
                                            time : e.target.value
                                        })}
                                        required/>
                                </div>
                                <div className="col-12 col-md-6">
                                    <label>Producer</label>
                                    <input 
                                        type="text"
                                        value={currentMovie.producer}                                
                                        onChange={ (e) => setCurrentMovie({
                                            ...currentMovie,
                                            producer : e.target.value
                                        }) }
                                        required/>
                                </div>       
                                <div className="col-12 col-md-6">
                                    <label>Type</label>
                                    <input 
                                        type="text"
                                        value={currentMovie.type}                                
                                        onChange={ (e) => setCurrentMovie({
                                            ...currentMovie,
                                            type : e.target.value
                                        }) }
                                        required/>
                                </div>    
                                <div className="col-12 col-md-6">
                                    <label>Actor</label>
                                    <input 
                                        type="text"
                                        value={currentMovie.actor}                                
                                        onChange={ (e) => setCurrentMovie({
                                            ...currentMovie,
                                            actor : e.target.value
                                        }) }
                                        required/>
                                </div>     
                                <div className="col-12 col-md-6">
                                    <label>ReleaseDate</label>
                                    <input 
                                        type="text"
                                        value={currentMovie.releaseDate}                                
                                        onChange={ (e) => setCurrentMovie({
                                            ...currentMovie,
                                            releaseDate : e.target.value
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

export default EditMovie;
