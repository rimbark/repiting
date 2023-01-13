import React from 'react';
import style from './NavBar.module.css'
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={style.navBar}>
            <NavLink className={style.navLink} to={"/wall"}>Wall</NavLink>
            <NavLink className={style.navLink} to={"/messages"}>Messages</NavLink>
            <NavLink className={style.navLink} to={"/music"}>Music</NavLink>
            <NavLink className={style.navLink} to={"/photos"}>Photos</NavLink>
        </nav>
    );
}

export default NavBar;