import React from 'react';
import './Navbar.scss';

const Navbar = () => {
    return (
        <div className='navbar'>
          <ul className='n-conteiner'>
            <li>Todos</li>
            <li>Autos</li>
            <li>Salud</li>
            <li>Hogar</li>
          </ul>
        </div>
    );
}

export default Navbar;
