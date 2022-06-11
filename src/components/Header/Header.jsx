import React from 'react';
import Nav from '../Nav/Nav';

const Header = () => {
    return (
        <header className="header">
            <a href="" className='header-brand'>
                <img src="logo" alt="" />
            </a>
           <Nav />
           <div className="buttons">
               <button>Login</button>
               <button>Register</button>
           </div>
        </header>
    );
};

export default Header;