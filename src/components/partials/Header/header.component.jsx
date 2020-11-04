import React from 'react'
import HeaderNavbar from './HeaderNavbar.component'
import HeaderTopBar from './HeaderTopbar.component';


const Header = () => {
     return (
          <header className="header container-fluid wrapper">
               <div className="container">
                    <HeaderTopBar/>
                    <HeaderNavbar/>
               </div>
          </header>
     )
}

export default Header;