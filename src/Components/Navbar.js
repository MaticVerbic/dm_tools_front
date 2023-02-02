import React from 'react';

function Navbar() {
    return (
        <nav className='navbar'>
        <h2>DM Tools</h2>
        <ul className='navbar-items'>
            <li>Favorites</li>
            <li>Classes</li>
            <li>Spells</li>
        </ul>
        </nav>
    )
}

export default Navbar;