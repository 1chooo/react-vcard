import React from 'react';
import {
    Link, useLocation
} from 'react-router-dom';

function NavBar() {
    const location = useLocation();

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link
                        to="/"
                        className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}
                    >About
                    </Link>
                </li>

                <li className="navbar-item">
                    <Link
                        to="/resume"
                        className={`navbar-link ${location.pathname === '/resume' ? 'active' : ''}`}
                    >Resume
                    </Link>
                </li>

                <li className="navbar-item">
                    <Link
                        to="/portfolio"
                        className={`navbar-link ${location.pathname === '/portfolio' ? 'active' : ''}`}
                    >Portfolio
                    </Link>
                </li>

                <li className="navbar-item">
                    <Link
                        to="/blog"
                        className={`navbar-link ${location.pathname === '/blog' ? 'active' : ''}`}
                    >Blog
                    </Link>
                </li>

                <li className="navbar-item">
                    <Link
                        to="/contact"
                        className={`navbar-link ${location.pathname === '/contact' ? 'active' : ''}`}
                    >Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
