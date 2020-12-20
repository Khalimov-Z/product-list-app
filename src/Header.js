import React from 'react';
import Logo from "./Logo";
import Menu from "./Menu";
import Checkout from "./Checkout";


function Header(props) {
    return (
        <div className="header">
            <Logo />
            <Menu />
            <Checkout
                database={props.database}
            />
            <a href="URL" className="btn-2">
                выход
            </a>
        </div>
    );
}

export default Header;