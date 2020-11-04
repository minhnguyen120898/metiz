import React from 'react'
import ProfileChild from '../Profile/ProfileChild.component'

import Footer from '../partials/footer.component'
import Header from '../partials/Header/header.component'

const Profile = () => {
     return (
          <div className="wrapper">
               <Header/>
               <div className="bg-movies">
                    <ProfileChild />
                    
               </div>
               <Footer/>
          </div>
     )
}
export default Profile;