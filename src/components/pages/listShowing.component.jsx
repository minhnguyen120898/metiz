import React from 'react'
import ShowingMovies from '../list/ShowingMovies.component'
import Footer from '../partials/footer.component'
import Header from '../partials/Header/header.component'

const ListShowing = () => {
     return (
          <div className="container-fuild">
               <Header/>             
               <ShowingMovies />
               <Footer/>
          </div>
     )
}
export default ListShowing;