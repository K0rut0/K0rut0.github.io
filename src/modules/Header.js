import React from 'react';
import "./Header.css";

function Header(){
    return(
        <div className='header-main'>
            <h1 className='head-Text'>Koruto.dev</h1>
            <ul className='ul-main'>
                <li>Projects</li>
                <li>Contacts</li>
                <li>About</li>
            </ul>
        </div>
    )
}

export default Header;