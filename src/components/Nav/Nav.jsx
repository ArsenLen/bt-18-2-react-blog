import React from 'react';
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
               <Link to="/">Главная</Link>
               <Link to="/createpost">Создать пост</Link>
        </nav>
    );
};

export default Nav;