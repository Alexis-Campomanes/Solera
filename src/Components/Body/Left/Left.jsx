import React from 'react';
import './Left.scss';

const Left = () => {
    return (
        <div className='left'>
        <div className='l-title'>
          <span>Electricidad</span>
          <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
        </div>
        <div className='l-footer'>
          <button className='l-button'>Editar</button>
          <button className='l-button'>Eliminar</button>
        </div>
            
        </div>
    );
}

export default Left;
