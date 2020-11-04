import React from 'react';
import { Link } from 'react-router-dom';

function SideBar(props) {

    const currentURL = window.location.href;

    const SIDE_BAR = [
        { to: "/admin/users", title: "Users Management" },
        { to: "/admin/movies", title: "Movies Management"},
        { to: "/admin/revenue", title: "Revenue Management" },
        { to: "/admin/tickets", title: "Tickets Management" },
      ];

    return (
        <div className="slide-bar">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/admin/users">Home</Link></li>
                    <li className="breadcrumb-item"><Link to="#">{currentURL.slice(28)}</Link></li>
                </ol>
            </nav>
            
            <div className="slide-bar__main">
                <p className="profile__left__title">Menu</p>
                <ul className="profile__left__list">
                    {SIDE_BAR.map((e, i) => (
                        <li key={i} className= { currentURL.includes(e.to) ? "active" : ""}>
                            <Link to={e.to}>{e.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
      </div>
    );
}

export default SideBar;