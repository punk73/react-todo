import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar-material blue text-white">
            <div className="nav-wrapper">
                <a href="#" className="left brand-logo">Coolz Todo Apps</a>
                <ul id="nav-mobile" className="right">
                    <li><a href="/">Todos</a></li>
                    <li><a href="/registration">Register</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;