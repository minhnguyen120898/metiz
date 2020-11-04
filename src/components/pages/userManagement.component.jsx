import React, { useEffect } from 'react';
import HeaderTopbar from '../partials/headerTopBar.coponent';
import Footer from '../partials/footer.component';
import SideBar from '../partials/sideBar.coponent';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../redux/actions/adminUserAction';
import AdminAction from '../admin/AdminAction';
import { Redirect } from 'react-router';

function UserManagement(props) {

    const { users, loading , error } = useSelector(state => state.admin);
    const dispatch = useDispatch();

    useEffect(() => {
        const action = fetchUsers();
        dispatch(action);
    },[dispatch])
    
    if(!localStorage.getItem("token")) {
        return <Redirect to="/login" />
    }else {
        const localstorage = JSON.parse(localStorage.getItem("token"));
        console.log(localstorage.email);
        if(localstorage.email !== "admin@gmail.com"){
            return <Redirect to="/" />
        }
    }
    return (
        <>
            <HeaderTopbar />
            <div className="admin container">
                <div className="admin__left">
                    <SideBar />
                </div>
                <div className="admin__right">
                    <p className="admin__title">Users Management</p>
                    <hr/>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <p>Loading...</p>
                                ) : error ? (
                                    <p>{error.message}</p>
                                ): (
                                    users.map((e, i) => (
                                        <tr key={i}>
                                            <td>{e.id}</td>
                                            <td>{e.name}</td>
                                            <td>{e.email}</td>
                                            <td>{e.phone}</td>
                                            <td>{e.address}</td>
                                            <td>
                                                <AdminAction userID={e.id} />
                                            </td>
                                        </tr>
                                    )) 
                                )}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default UserManagement;