import React from 'react'
import ComingMovies from '../list/ComingMovies.component'
import Footer from '../partials/footer.component'
import Header from '../partials/Header/header.component'

const ListComming = () => {
     return (
          <div className="container-fluid">
               <Header/>
               <ComingMovies />
               <Footer/>
          </div>
     )
}
export default ListComming;