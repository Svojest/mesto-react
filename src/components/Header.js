import React from 'react';
import logo from '../images/logo.svg';

export default function Header() {
    return (
        <header className="header">
            <a href="/">
                <img className="header__logo" src={logo} alt="Логотип" />
            </a>
        </header>
    );
}
