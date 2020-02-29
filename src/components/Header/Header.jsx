import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://dynamic.brandcrowd.com/asset/logo/e39702a4-90f2-4790-afbd-d1d0209b495e/logo?v=4&text=Speech' />
        <div className={s.loginBlock}>
            {props.isAuth ? <div>{props.login} <button onClick={props.logout}>Log Out</button></div> :
                <NavLink to='/login'>Login</NavLink>}
        </div>

    </header>
}

export default Header;