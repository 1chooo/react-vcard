import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar: React.FC = () => {
    const location = useLocation();
    const navItems = [
        { path: '/', label: 'About' },
        { path: '/resume', label: 'Resume' },
        { path: '/portfolio', label: 'Portfolio' },
        { path: '/blog', label: 'Blog' },
        { path: '/contact', label: 'Contact' }
    ];

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                {navItems.map(item => (
                    <li key={item.path} className="navbar-item">
                        <Link
                            to={item.path}
                            className={`navbar-link ${location.pathname === item.path ? 'active' : ''}`}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default NavBar;
