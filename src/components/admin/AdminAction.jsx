import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { deleteMovie, deleteUser } from '../../api/adminApi';
import { removeMovieAction } from '../../redux/actions/adminMovieAction';
import { removeUser } from '../../redux/actions/adminUserAction';

function AdminAction(props) {

    const { userID, movieId } = props;
    const dispatch = useDispatch();
    const history = useHistory();

    const handleEdit = (userID,movieId) => {
        if(userID) {
            if(window.confirm("Are you sure you want to edit this user?")){
                const url = `/admin/users/edit/${userID}`;
                history.push(url);
            }
        }
        if(movieId) {
            if(window.confirm("Are you sure you want to edit this movie?")){
                const url = `/admin/movies/edit/${movieId}`;
                history.push(url);
            }
        }
    }
    const handleDelete = (userID) => {
        if(userID) {
            if(window.confirm("Are you sure you want to delete this user?")){
                dispatch(removeUser(userID));
                deleteUser(userID);
            }
        }

        if(movieId) {
            if(window.confirm("Are you sure you want to delete this movie?")){
                dispatch(removeMovieAction(movieId));
                deleteMovie(movieId);
            }
        }
    }

    return (
        <div className="btn-group">
            <button className="btn-primary" onClick={() => handleEdit(userID,movieId)}>Edit</button>
            <button className="btn-secondary" onClick={() => handleDelete(userID,movieId)}>Delete</button>
        </div>
    );
}

export default AdminAction;