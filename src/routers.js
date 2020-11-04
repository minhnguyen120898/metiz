import React from 'react'
import ChooseTickets from './components/pages/ChooseTickets.component'
import ChooseSeats from './components/pages/ChooseSeats.component'
import Error404 from './components/pages/Error404.component'
import Home from './components/pages/home.component'
import MovieDetail from './components/pages/MovieDetail.component'
import Sale from './components/pages/sale.component'
import SaleDetails from './components/pages/saledetail.component'
import Pays from './components/pages/Pays.component'
import Register from './components/pages/Register.component'
import Login from './components/pages/Login.component'
import ListShowing from './components/pages/listShowing.component'
import ListComming from './components/pages/listComing.component'
import Profile from './components/pages/Profile.component'
import ChangePassword from './components/Profile/ChangePassword.component'
import UserManagement from './components/pages/userManagement.component'
import Edit from './components/admin/editUser'
import MovieManagement from './components/pages/movieManagement.component'
import EditMovie from './components/admin/editMovie'
import AddMovie from './components/admin/addMovie'
const routers = [
     {
          path: "/sale",
          exact: true,
          main: () => <Sale/>
     },
     {
          path:"/",
          exact: true,
          main: () => <Home/>
     },
     {
          path:"/sale/:saleId",
          exact: true,
          main: () => <SaleDetails/>
     },
     {
          path: "/showing",
          exact: true,
          main: () => <ListShowing/>
     },
     {
        path: '/coming',
        exact : true,
        main : () => <ListComming />
     },
     {
        path: '/profile',
        exact: true,
        main : () => <Profile />
     },
     {
          path: "/movie-detail/:productId",
          exact: true,
          main: () => <MovieDetail />,
     },
     {
          path: "/choose-tickets",
          exact: true,
          main: () => <ChooseTickets />,
     },
     {
          path: "/pays",
          exact: true,
          main: () => <Pays />,
     },
     {
          path: "/choose-seats",
          exact: true,
          main: () => <ChooseSeats />,
     },
     {
          path: "/register",
          exact: true,
          main: () => <Register />,
     },
     {
          path: "/login",
          exact: true,
          main: () => <Login />,
     },
      {
          path: "/changepassword",
          exact: true,
          main: () => <ChangePassword />
     },
     {
        path: '/admin/users',
        exact: true,
        main : () => <UserManagement />
    },
    {
        path: '/admin/users/edit/:userId',
        exact: true,
        main : () => <Edit />
    },
    {
        path: '/admin/movies',
        exact: true,
        main : () => <MovieManagement />
    },
    {
        path: '/admin/movies/edit/:movieId',
        exact: true,
        main : () => <EditMovie />
    },
    {
        path: '/admin/movies/add',
        exact: true,
        main : () => <AddMovie />
    },
     {
          path: "/*",
          exact: true,
          main: () => <Error404 />,
     },
]
export default routers