import React from 'react';
import '../App.css';

const Navbar = () => {
    return (
        <div>
            <header className='navbar'>
                <div className='text-width-controller'>
                    <span id='main-name'>
                        <a href='../'>2witness Blog</a>
                    </span>
                    <span id='nav-interactions'>
                        <a id='Om' href='Nyheter'>Blog</a>
                        <a id='Team' href='Team'>Teamet</a>
                        <a id='Video' href='Video'>Video</a>
                        <a id='Artiklar' href='Artiklar'>Artiklar</a>

                    </span>
                </div>
            </header>
        </div>
    )  
}

export default Navbar;
