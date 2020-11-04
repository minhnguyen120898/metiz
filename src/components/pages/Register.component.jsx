import React from 'react'
import RegisterChild from '../RegisterChild/RegisterChild.component'
import Footer from '../partials/footer.component'
import Header from '../partials/Header/header.component'

const Register = () => {
     return (
          <div>
               <Header/>         
               <RegisterChild />
               <Footer/>
          </div>
     )
}
export default Register;